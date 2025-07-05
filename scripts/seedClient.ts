// scripts/seedClient.ts

import { Account, AppDataSource, Client, Firm } from "./data-source";

async function seedClient() {
	await AppDataSource.initialize();

	// 1. Truncate tables (in right order, with CASCADE)
	await AppDataSource.query("TRUNCATE TABLE accounts, clients RESTART IDENTITY CASCADE;");

	// 2. Get existing firms (we need firmIds for clients)
	const firmRepo = AppDataSource.getRepository(Firm);
	const firms = await firmRepo.find();

	if (firms.length === 0) {
		console.log("No firms found! Please run seed:firm first.");
		await AppDataSource.destroy();
		return;
	}

	// 3. Client data
	const clientData = [
		{
			name: "John Doe",
			firmId: firms[0].id,
			firmName: firms[0].name,
		},
		{
			name: "Jane Smith",
			firmId: firms.length > 1 ? firms[1].id : firms[0].id,
			firmName: firms.length > 1 ? firms[1].name : firms[0].name,
		},
	];

	// Insert Clients and build a name->entity map
	const clientRepo = AppDataSource.getRepository(Client);
	const clientEntities: Client[] = [];

	for (const client of clientData) {
		const clientEntity = clientRepo.create({
			name: client.name,
			firmId: client.firmId,
		});

		clientEntities.push(await clientRepo.save(clientEntity));
		console.log(`Created client: ${client.name} for firm: ${client.firmName}`);
	}

	const clientMap = new Map<string, Client>();
	clientEntities.forEach((client) => clientMap.set(client.name, client));

	// 4. Account data
	const accountData = [
		{
			accountNumber: "ACC-001-12345",
			accountType: "Investment",
			clientName: "John Doe",
			description: "Primary investment account",
		},
		{
			accountNumber: "ACC-002-67890",
			accountType: "Retirement",
			clientName: "Jane Smith",
			description: "401(k) retirement account",
		},
	];

	const accountRepo = AppDataSource.getRepository(Account);

	for (const account of accountData) {
		const client = clientMap.get(account.clientName);
		if (client) {
			const accountEntity = accountRepo.create({
				accountNumber: account.accountNumber,
				accountType: account.accountType,
				clientId: client.id,
			});

			await accountRepo.save(accountEntity);
			console.log(
				`Created account: ${account.accountNumber} (${account.accountType}) for client: ${account.clientName}`,
			);
		}
	}

	await AppDataSource.destroy();

	console.log("Client seed complete!");
}

seedClient().catch((err) => {
	console.error("Error in seedClient:", err);
	process.exit(1);
});
