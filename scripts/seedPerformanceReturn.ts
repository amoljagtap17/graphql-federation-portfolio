// scripts/seedPerformanceReturn.ts

import {
	Account,
	AppDataSource,
	Benchmark,
	Holding,
	PerformanceReturn,
	Security,
} from "./data-source";

async function seedPerformanceReturn() {
	await AppDataSource.initialize();

	// 1. Truncate tables (in right order, with CASCADE)
	await AppDataSource.query(
		"TRUNCATE TABLE performance_returns, benchmarks RESTART IDENTITY CASCADE;",
	);

	// 2. Get existing accounts (we need accountIds for performance returns)
	const accountRepo = AppDataSource.getRepository(Account);
	const accounts = await accountRepo.find();

	if (accounts.length === 0) {
		console.log("No accounts found! Please run seed:client first.");
		await AppDataSource.destroy();
		return;
	}

	// 3. Get existing holdings (we need holdingIds for performance returns)
	const holdingRepo = AppDataSource.getRepository(Holding);
	const holdings = await holdingRepo.find();

	if (holdings.length === 0) {
		console.log("No holdings found! Please run seed:holding first.");
		await AppDataSource.destroy();
		return;
	}

	// 4. Get existing securities (we need securityIds for performance returns)
	const securityRepo = AppDataSource.getRepository(Security);
	const securities = await securityRepo.find();

	if (securities.length === 0) {
		console.log("No securities found! Please run seed:holding first.");
		await AppDataSource.destroy();
		return;
	}

	// 5. Create Benchmarks
	const benchmarkData = [
		{
			code: "SPX",
			label: "S&P 500 Index",
		},
		{
			code: "NASDAQ",
			label: "NASDAQ Composite Index",
		},
		{
			code: "RUSSELL2000",
			label: "Russell 2000 Index",
		},
		{
			code: "MSCIWORLD",
			label: "MSCI World Index",
		},
		{
			code: "BNDX",
			label: "Vanguard Total International Bond ETF",
		},
		{
			code: "VTI",
			label: "Vanguard Total Stock Market ETF",
		},
		{
			code: "VXUS",
			label: "Vanguard Total International Stock ETF",
		},
		{
			code: "BND",
			label: "Vanguard Total Bond Market ETF",
		},
	];

	const benchmarkRepo = AppDataSource.getRepository(Benchmark);
	const benchmarkEntities: Benchmark[] = [];

	for (const benchmark of benchmarkData) {
		const benchmarkEntity = benchmarkRepo.create(benchmark);
		benchmarkEntities.push(await benchmarkRepo.save(benchmarkEntity));
	}

	console.log(`Created ${benchmarkEntities.length} benchmarks`);

	// 6. Create Performance Returns for different entities
	const performanceReturnRepo = AppDataSource.getRepository(PerformanceReturn);
	const currentDate = new Date();

	// Create performance returns for each account
	console.log("Creating performance returns for accounts...");
	for (let i = 0; i < accounts.length; i++) {
		const account = accounts[i];

		// Create varied performance data for each account
		const baseReturn = 8.5 + i * 2.5; // Vary base returns by account
		const volatility = 1.5 + i * 0.5; // Vary volatility by account

		const performanceData = [
			{
				entityType: "account",
				entityId: account.id,
				asOfDate: new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
				mdtReturnPercent: parseFloat((2.35 + i * 0.5 + Math.random() * 0.5 - 0.25).toFixed(2)),
				qtdReturnPercent: parseFloat((7.82 + i * 1.2 + Math.random() * 1.0 - 0.5).toFixed(2)),
				ytdReturnPercent: parseFloat(
					(baseReturn + Math.random() * volatility - volatility / 2).toFixed(2),
				),
				benchmarkReturnPercent: parseFloat((2.1 + Math.random() * 0.3 - 0.15).toFixed(2)),
				benchmarkId: benchmarkEntities[i % benchmarkEntities.length].id, // Rotate benchmarks
			},
			{
				entityType: "account",
				entityId: account.id,
				asOfDate: new Date(currentDate.getTime() - 60 * 24 * 60 * 60 * 1000), // 60 days ago
				mdtReturnPercent: parseFloat((1.85 + i * 0.3 + Math.random() * 0.4 - 0.2).toFixed(2)),
				qtdReturnPercent: parseFloat((5.67 + i * 0.8 + Math.random() * 0.8 - 0.4).toFixed(2)),
				ytdReturnPercent: parseFloat(
					(baseReturn - 2.5 + Math.random() * volatility - volatility / 2).toFixed(2),
				),
				benchmarkReturnPercent: parseFloat((1.92 + Math.random() * 0.25 - 0.125).toFixed(2)),
				benchmarkId: benchmarkEntities[i % benchmarkEntities.length].id, // Rotate benchmarks
			},
			{
				entityType: "account",
				entityId: account.id,
				asOfDate: new Date(currentDate.getTime() - 90 * 24 * 60 * 60 * 1000), // 90 days ago
				mdtReturnPercent: parseFloat((3.42 + i * 0.4 + Math.random() * 0.6 - 0.3).toFixed(2)),
				qtdReturnPercent: parseFloat((4.18 + i * 0.6 + Math.random() * 0.7 - 0.35).toFixed(2)),
				ytdReturnPercent: parseFloat(
					(baseReturn - 4.0 + Math.random() * volatility - volatility / 2).toFixed(2),
				),
				benchmarkReturnPercent: parseFloat((3.15 + Math.random() * 0.4 - 0.2).toFixed(2)),
				benchmarkId: benchmarkEntities[i % benchmarkEntities.length].id, // Rotate benchmarks
			},
			{
				entityType: "account",
				entityId: account.id,
				asOfDate: new Date(currentDate.getTime() - 120 * 24 * 60 * 60 * 1000), // 120 days ago
				mdtReturnPercent: parseFloat((2.15 + i * 0.35 + Math.random() * 0.5 - 0.25).toFixed(2)),
				qtdReturnPercent: parseFloat((3.89 + i * 0.5 + Math.random() * 0.6 - 0.3).toFixed(2)),
				ytdReturnPercent: parseFloat(
					(baseReturn - 5.5 + Math.random() * volatility - volatility / 2).toFixed(2),
				),
				benchmarkReturnPercent: parseFloat((2.85 + Math.random() * 0.35 - 0.175).toFixed(2)),
				benchmarkId: benchmarkEntities[i % benchmarkEntities.length].id, // Rotate benchmarks
			},
			{
				entityType: "account",
				entityId: account.id,
				asOfDate: new Date(currentDate.getTime() - 150 * 24 * 60 * 60 * 1000), // 150 days ago
				mdtReturnPercent: parseFloat((1.75 + i * 0.25 + Math.random() * 0.4 - 0.2).toFixed(2)),
				qtdReturnPercent: parseFloat((2.45 + i * 0.4 + Math.random() * 0.5 - 0.25).toFixed(2)),
				ytdReturnPercent: parseFloat(
					(baseReturn - 7.0 + Math.random() * volatility - volatility / 2).toFixed(2),
				),
				benchmarkReturnPercent: parseFloat((2.25 + Math.random() * 0.3 - 0.15).toFixed(2)),
				benchmarkId: benchmarkEntities[i % benchmarkEntities.length].id, // Rotate benchmarks
			},
		];

		for (const performance of performanceData) {
			const performanceEntity = performanceReturnRepo.create(performance);
			await performanceReturnRepo.save(performanceEntity);
		}

		console.log(
			`  Created ${performanceData.length} performance returns for account: ${account.accountNumber} (Account ${i + 1})`,
		);
	}

	// Create performance returns for each holding
	console.log("Creating performance returns for holdings...");

	// Group holdings by account to create varied performance data
	const holdingsByAccount: { [accountId: string]: typeof holdings } = {};
	for (const holding of holdings) {
		if (!holdingsByAccount[holding.accountId]) {
			holdingsByAccount[holding.accountId] = [];
		}
		holdingsByAccount[holding.accountId].push(holding);
	}

	let holdingIndex = 0;
	for (const accountId in holdingsByAccount) {
		const accountHoldings = holdingsByAccount[accountId];
		const accountIndex = accounts.findIndex((acc) => acc.id === accountId);

		// Create base performance characteristics for this account's holdings
		const accountBaseReturn = 7.5 + accountIndex * 2.2; // Vary by account
		const accountVolatility = 1.2 + accountIndex * 0.4; // Vary by account

		console.log(
			`  Processing ${accountHoldings.length} holdings for account ${accountIndex + 1}...`,
		);

		for (const holding of accountHoldings) {
			// Create individual holding variation within account characteristics
			const holdingVariation = (holdingIndex % 3) * 1.5; // Vary holdings within account
			const holdingBaseReturn = accountBaseReturn + holdingVariation;
			const holdingVolatility = accountVolatility + (holdingIndex % 2) * 0.3;

			// Create a single performance return record using the holding's actual entityId and asOfDate
			const performanceData = {
				entityType: "holding",
				entityId: holding.id, // Use the holding's actual ID
				asOfDate: holding.asOfDate, // Use the holding's actual asOfDate
				mdtReturnPercent: parseFloat(
					(2.95 + holdingVariation + Math.random() * 0.8 - 0.4).toFixed(2),
				),
				qtdReturnPercent: parseFloat(
					(8.73 + holdingVariation * 1.2 + Math.random() * 1.2 - 0.6).toFixed(2),
				),
				ytdReturnPercent: parseFloat(
					(holdingBaseReturn + Math.random() * holdingVolatility - holdingVolatility / 2).toFixed(
						2,
					),
				),
				benchmarkReturnPercent: parseFloat((2.65 + Math.random() * 0.4 - 0.2).toFixed(2)),
				benchmarkId: benchmarkEntities[(accountIndex + 1) % benchmarkEntities.length].id, // Rotate benchmarks by account
			};

			const performanceEntity = performanceReturnRepo.create(performanceData);
			await performanceReturnRepo.save(performanceEntity);

			console.log(
				`    Created performance return for holding: ${holding.id.substring(0, 8)}... (Account ${accountIndex + 1}, Holding ${holdingIndex + 1}) - AsOfDate: ${holding.asOfDate.toISOString().split("T")[0]}`,
			);
			holdingIndex++;
		}
	}

	// Create performance returns for each security
	console.log("Creating performance returns for securities...");
	for (let i = 0; i < securities.length; i++) {
		const security = securities[i];

		// Create varied performance characteristics for each security
		const securityBaseReturn = 6.8 + i * 1.8; // Vary by security
		const securityVolatility = 1.0 + i * 0.3; // Vary by security
		const securityType = i % 3; // Create 3 different security performance profiles

		const performanceData = [
			{
				entityType: "security",
				entityId: security.id,
				asOfDate: new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
				mdtReturnPercent: parseFloat(
					(2.95 + securityType * 0.8 + Math.random() * 0.7 - 0.35).toFixed(2),
				),
				qtdReturnPercent: parseFloat(
					(8.73 + securityType * 1.5 + Math.random() * 1.2 - 0.6).toFixed(2),
				),
				ytdReturnPercent: parseFloat(
					(
						securityBaseReturn +
						Math.random() * securityVolatility -
						securityVolatility / 2
					).toFixed(2),
				),
				benchmarkReturnPercent: parseFloat((2.65 + Math.random() * 0.4 - 0.2).toFixed(2)),
				benchmarkId: benchmarkEntities[(i + 2) % benchmarkEntities.length].id, // Rotate benchmarks by security
			},
			{
				entityType: "security",
				entityId: security.id,
				asOfDate: new Date(currentDate.getTime() - 60 * 24 * 60 * 60 * 1000), // 60 days ago
				mdtReturnPercent: parseFloat(
					(2.45 + securityType * 0.6 + Math.random() * 0.6 - 0.3).toFixed(2),
				),
				qtdReturnPercent: parseFloat(
					(6.89 + securityType * 1.2 + Math.random() * 1.0 - 0.5).toFixed(2),
				),
				ytdReturnPercent: parseFloat(
					(
						securityBaseReturn -
						2.0 +
						Math.random() * securityVolatility -
						securityVolatility / 2
					).toFixed(2),
				),
				benchmarkReturnPercent: parseFloat((2.18 + Math.random() * 0.35 - 0.175).toFixed(2)),
				benchmarkId: benchmarkEntities[(i + 2) % benchmarkEntities.length].id, // Rotate benchmarks by security
			},
			{
				entityType: "security",
				entityId: security.id,
				asOfDate: new Date(currentDate.getTime() - 90 * 24 * 60 * 60 * 1000), // 90 days ago
				mdtReturnPercent: parseFloat(
					(3.87 + securityType * 0.7 + Math.random() * 0.8 - 0.4).toFixed(2),
				),
				qtdReturnPercent: parseFloat(
					(5.23 + securityType * 1.0 + Math.random() * 0.9 - 0.45).toFixed(2),
				),
				ytdReturnPercent: parseFloat(
					(
						securityBaseReturn -
						3.5 +
						Math.random() * securityVolatility -
						securityVolatility / 2
					).toFixed(2),
				),
				benchmarkReturnPercent: parseFloat((3.42 + Math.random() * 0.5 - 0.25).toFixed(2)),
				benchmarkId: benchmarkEntities[(i + 2) % benchmarkEntities.length].id, // Rotate benchmarks by security
			},
			{
				entityType: "security",
				entityId: security.id,
				asOfDate: new Date(currentDate.getTime() - 120 * 24 * 60 * 60 * 1000), // 120 days ago
				mdtReturnPercent: parseFloat(
					(3.25 + securityType * 0.5 + Math.random() * 0.6 - 0.3).toFixed(2),
				),
				qtdReturnPercent: parseFloat(
					(4.78 + securityType * 0.8 + Math.random() * 0.7 - 0.35).toFixed(2),
				),
				ytdReturnPercent: parseFloat(
					(
						securityBaseReturn -
						4.8 +
						Math.random() * securityVolatility -
						securityVolatility / 2
					).toFixed(2),
				),
				benchmarkReturnPercent: parseFloat((2.85 + Math.random() * 0.4 - 0.2).toFixed(2)),
				benchmarkId: benchmarkEntities[(i + 2) % benchmarkEntities.length].id, // Rotate benchmarks by security
			},
		];

		for (const performance of performanceData) {
			const performanceEntity = performanceReturnRepo.create(performance);
			await performanceReturnRepo.save(performanceEntity);
		}

		console.log(
			`  Created ${performanceData.length} performance returns for security: ${security.ticker} (Security ${i + 1})`,
		);
	}

	await AppDataSource.destroy();

	console.log("Performance Return seed complete!");
}

seedPerformanceReturn().catch((err) => {
	console.error("Error in seedPerformanceReturn:", err);
	process.exit(1);
});
