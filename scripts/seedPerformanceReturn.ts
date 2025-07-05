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
	for (const account of accounts) {
		const performanceData = [
			{
				entityType: "account",
				entityId: account.id,
				asOfDate: new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
				mdtReturnPercent: 2.35,
				qtdReturnPercent: 7.82,
				ytdReturnPercent: 12.45,
				benchmarkReturnPercent: 2.1,
				benchmarkId: benchmarkEntities[0].id, // S&P 500
			},
			{
				entityType: "account",
				entityId: account.id,
				asOfDate: new Date(currentDate.getTime() - 60 * 24 * 60 * 60 * 1000), // 60 days ago
				mdtReturnPercent: 1.85,
				qtdReturnPercent: 5.67,
				ytdReturnPercent: 10.23,
				benchmarkReturnPercent: 1.92,
				benchmarkId: benchmarkEntities[0].id, // S&P 500
			},
			{
				entityType: "account",
				entityId: account.id,
				asOfDate: new Date(currentDate.getTime() - 90 * 24 * 60 * 60 * 1000), // 90 days ago
				mdtReturnPercent: 3.42,
				qtdReturnPercent: 4.18,
				ytdReturnPercent: 8.76,
				benchmarkReturnPercent: 3.15,
				benchmarkId: benchmarkEntities[0].id, // S&P 500
			},
		];

		for (const performance of performanceData) {
			const performanceEntity = performanceReturnRepo.create(performance);
			await performanceReturnRepo.save(performanceEntity);
		}

		console.log(`  Created 3 performance returns for account: ${account.accountNumber}`);
	}

	// Create performance returns for each holding
	console.log("Creating performance returns for holdings...");
	for (const holding of holdings) {
		const performanceData = [
			{
				entityType: "holding",
				entityId: holding.id,
				asOfDate: new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
				mdtReturnPercent: 3.15,
				qtdReturnPercent: 9.25,
				ytdReturnPercent: 15.67,
				benchmarkReturnPercent: 2.85,
				benchmarkId: benchmarkEntities[1].id, // NASDAQ
			},
			{
				entityType: "holding",
				entityId: holding.id,
				asOfDate: new Date(currentDate.getTime() - 60 * 24 * 60 * 60 * 1000), // 60 days ago
				mdtReturnPercent: 2.78,
				qtdReturnPercent: 7.42,
				ytdReturnPercent: 13.89,
				benchmarkReturnPercent: 2.45,
				benchmarkId: benchmarkEntities[1].id, // NASDAQ
			},
			{
				entityType: "holding",
				entityId: holding.id,
				asOfDate: new Date(currentDate.getTime() - 90 * 24 * 60 * 60 * 1000), // 90 days ago
				mdtReturnPercent: 4.23,
				qtdReturnPercent: 5.67,
				ytdReturnPercent: 11.34,
				benchmarkReturnPercent: 3.89,
				benchmarkId: benchmarkEntities[1].id, // NASDAQ
			},
		];

		for (const performance of performanceData) {
			const performanceEntity = performanceReturnRepo.create(performance);
			await performanceReturnRepo.save(performanceEntity);
		}

		console.log(`  Created 3 performance returns for holding: ${holding.id.substring(0, 8)}...`);
	}

	// Create performance returns for each security
	console.log("Creating performance returns for securities...");
	for (const security of securities) {
		const performanceData = [
			{
				entityType: "security",
				entityId: security.id,
				asOfDate: new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
				mdtReturnPercent: 2.95,
				qtdReturnPercent: 8.73,
				ytdReturnPercent: 14.25,
				benchmarkReturnPercent: 2.65,
				benchmarkId: benchmarkEntities[2].id, // Russell 2000
			},
			{
				entityType: "security",
				entityId: security.id,
				asOfDate: new Date(currentDate.getTime() - 60 * 24 * 60 * 60 * 1000), // 60 days ago
				mdtReturnPercent: 2.45,
				qtdReturnPercent: 6.89,
				ytdReturnPercent: 12.47,
				benchmarkReturnPercent: 2.18,
				benchmarkId: benchmarkEntities[2].id, // Russell 2000
			},
			{
				entityType: "security",
				entityId: security.id,
				asOfDate: new Date(currentDate.getTime() - 90 * 24 * 60 * 60 * 1000), // 90 days ago
				mdtReturnPercent: 3.87,
				qtdReturnPercent: 5.23,
				ytdReturnPercent: 10.15,
				benchmarkReturnPercent: 3.42,
				benchmarkId: benchmarkEntities[2].id, // Russell 2000
			},
		];

		for (const performance of performanceData) {
			const performanceEntity = performanceReturnRepo.create(performance);
			await performanceReturnRepo.save(performanceEntity);
		}

		console.log(`  Created 3 performance returns for security: ${security.ticker}`);
	}

	await AppDataSource.destroy();

	console.log("Performance Return seed complete!");
}

seedPerformanceReturn().catch((err) => {
	console.error("Error in seedPerformanceReturn:", err);
	process.exit(1);
});
