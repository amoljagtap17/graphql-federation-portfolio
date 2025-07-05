// scripts/seedFirm.ts

import { AppDataSource, Firm, User } from "./data-source";

async function seedFirm() {
	await AppDataSource.initialize();

	// 1. Truncate tables (in right order, with CASCADE)
	await AppDataSource.query("TRUNCATE TABLE users, firms RESTART IDENTITY CASCADE;");

	// 2. Firm data
	const firmData = [
		{ name: "Goldman Sachs Asset Management", description: "Global investment management firm" },
		{ name: "BlackRock", description: "World's largest asset manager" },
	];

	// Insert Firms and build a name->entity map
	const firmRepo = AppDataSource.getRepository(Firm);
	const firmEntities = await firmRepo.save(firmData);
	const firmMap = new Map<string, Firm>();

	firmEntities.forEach((firm) => firmMap.set(firm.name, firm));

	// 3. User data
	const userData = [
		// Goldman Sachs users
		{
			username: "john.smith",
			email: "john.smith@gs.com",
			displayName: "John Smith",
			firmName: "Goldman Sachs Asset Management",
		},

		// BlackRock users
		{
			username: "david.wilson",
			email: "david.wilson@blackrock.com",
			displayName: "David Wilson",
			firmName: "BlackRock",
		},
	];

	const userRepo = AppDataSource.getRepository(User);

	for (const user of userData) {
		const firm = firmMap.get(user.firmName);
		if (firm) {
			await userRepo.save(
				userRepo.create({
					username: user.username,
					email: user.email,
					displayName: user.displayName,
					firmId: firm.id,
				}),
			);
		}
	}

	await AppDataSource.destroy();

	console.log("Firm seed complete!");
}

seedFirm().catch((err) => {
	console.error("Error in seedFirm:", err);
	process.exit(1);
});
