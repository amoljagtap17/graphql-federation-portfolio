// scripts/seedHolding.ts

import {
	Account,
	AppDataSource,
	AssetAllocation,
	AssetClass,
	BroadAssetClass,
	Holding,
	Security,
	Style,
	SubClass,
} from "./data-source";

async function seedHolding() {
	await AppDataSource.initialize();

	// 1. Truncate tables (in right order, with CASCADE)
	await AppDataSource.query(
		"TRUNCATE TABLE holdings, securities, asset_allocations RESTART IDENTITY CASCADE;",
	);

	// 2. Get existing accounts (we need accountIds for holdings)
	const accountRepo = AppDataSource.getRepository(Account);
	const accounts = await accountRepo.find();

	if (accounts.length === 0) {
		console.log("No accounts found! Please run seed:client first.");
		await AppDataSource.destroy();
		return;
	}

	// 3. Get existing asset classification data
	const bacRepo = AppDataSource.getRepository(BroadAssetClass);
	const acRepo = AppDataSource.getRepository(AssetClass);
	const scRepo = AppDataSource.getRepository(SubClass);
	const styleRepo = AppDataSource.getRepository(Style);

	const broadAssetClasses = await bacRepo.find();
	const assetClasses = await acRepo.find();
	const subClasses = await scRepo.find();
	const styles = await styleRepo.find();

	if (
		broadAssetClasses.length === 0 ||
		assetClasses.length === 0 ||
		subClasses.length === 0 ||
		styles.length === 0
	) {
		console.log("Asset classification data not found! Please run seed:asset-classification first.");
		await AppDataSource.destroy();
		return;
	}

	// 4. Create Asset Allocations
	const assetAllocationData = [
		{
			broadAssetClassId:
				broadAssetClasses.find((bac) => bac.code === "equity")?.id || broadAssetClasses[0].id,
			assetClassId:
				assetClasses.find((ac) => ac.code === "large_cap_equity")?.id || assetClasses[0].id,
			subClassId: subClasses.find((sc) => sc.code === "us_large_cap")?.id || subClasses[0].id,
			styleId: styles.find((s) => s.code === "growth")?.id || styles[0].id,
		},
		{
			broadAssetClassId:
				broadAssetClasses.find((bac) => bac.code === "fixed_income")?.id || broadAssetClasses[0].id,
			assetClassId:
				assetClasses.find((ac) => ac.code === "government_bonds")?.id || assetClasses[0].id,
			subClassId: subClasses.find((sc) => sc.code === "us_treasury")?.id || subClasses[0].id,
			styleId: styles.find((s) => s.code === "intermediate_duration")?.id || styles[0].id,
		},
		{
			broadAssetClassId:
				broadAssetClasses.find((bac) => bac.code === "equity")?.id || broadAssetClasses[0].id,
			assetClassId:
				assetClasses.find((ac) => ac.code === "international_equity")?.id || assetClasses[0].id,
			subClassId:
				subClasses.find((sc) => sc.code === "developed_markets_equity")?.id || subClasses[0].id,
			styleId: styles.find((s) => s.code === "value")?.id || styles[0].id,
		},
		{
			broadAssetClassId:
				broadAssetClasses.find((bac) => bac.code === "non_traditional")?.id ||
				broadAssetClasses[0].id,
			assetClassId: assetClasses.find((ac) => ac.code === "real_estate")?.id || assetClasses[0].id,
			subClassId: subClasses.find((sc) => sc.code === "us_reit")?.id || subClasses[0].id,
			styleId: styles.find((s) => s.code === "us")?.id || styles[0].id,
		},
		{
			broadAssetClassId:
				broadAssetClasses.find((bac) => bac.code === "cash")?.id || broadAssetClasses[0].id,
			assetClassId: assetClasses.find((ac) => ac.code === "money_market")?.id || assetClasses[0].id,
			subClassId: subClasses.find((sc) => sc.code === "us_money_market")?.id || subClasses[0].id,
			styleId: styles.find((s) => s.code === "us")?.id || styles[0].id,
		},
		{
			broadAssetClassId:
				broadAssetClasses.find((bac) => bac.code === "equity")?.id || broadAssetClasses[0].id,
			assetClassId:
				assetClasses.find((ac) => ac.code === "large_cap_equity")?.id || assetClasses[0].id,
			subClassId: subClasses.find((sc) => sc.code === "us_large_cap")?.id || subClasses[0].id,
			styleId: styles.find((s) => s.code === "technology")?.id || styles[0].id,
		},
	];

	const assetAllocationRepo = AppDataSource.getRepository(AssetAllocation);
	const assetAllocationEntities: AssetAllocation[] = [];

	for (const allocation of assetAllocationData) {
		const assetAllocationEntity = assetAllocationRepo.create(allocation);
		assetAllocationEntities.push(await assetAllocationRepo.save(assetAllocationEntity));
	}

	console.log(`Created ${assetAllocationEntities.length} asset allocations`);

	// 5. Create Securities
	const securityData = [
		{
			name: "Apple Inc.",
			ticker: "AAPL",
			securityType: "Stock",
			isin: "US0378331005",
			cusip: "037833100",
			assetAllocationId: assetAllocationEntities[0].id, // Large cap growth
		},
		{
			name: "Microsoft Corporation",
			ticker: "MSFT",
			securityType: "Stock",
			isin: "US5949181045",
			cusip: "594918104",
			assetAllocationId: assetAllocationEntities[5].id, // Technology
		},
		{
			name: "US Treasury 10-Year Note",
			ticker: "UST10Y",
			securityType: "Bond",
			isin: "US912828XN66",
			cusip: "912828XN6",
			assetAllocationId: assetAllocationEntities[1].id, // Government bonds
		},
		{
			name: "Vanguard FTSE Developed Markets ETF",
			ticker: "VEA",
			securityType: "ETF",
			isin: "US9229083632",
			cusip: "922908363",
			assetAllocationId: assetAllocationEntities[2].id, // International equity
		},
		{
			name: "Vanguard Real Estate ETF",
			ticker: "VNQ",
			securityType: "ETF",
			isin: "US9229085538",
			cusip: "922908553",
			assetAllocationId: assetAllocationEntities[3].id, // Real estate
		},
		{
			name: "Vanguard Prime Money Market Fund",
			ticker: "VMMXX",
			securityType: "Money Market",
			isin: "US9229087757",
			cusip: "922908775",
			assetAllocationId: assetAllocationEntities[4].id, // Money market
		},
	];

	const securityRepo = AppDataSource.getRepository(Security);
	const securityEntities: Security[] = [];

	for (const security of securityData) {
		const securityEntity = securityRepo.create(security);
		securityEntities.push(await securityRepo.save(securityEntity));
	}

	console.log(`Created ${securityEntities.length} securities`);

	// 6. Create Holdings (3 for each account)
	const holdingRepo = AppDataSource.getRepository(Holding);
	const asOfDate = new Date();

	for (const account of accounts) {
		console.log(`Creating holdings for account: ${account.accountNumber}`);

		// Create 3 holdings per account
		const holdingsForAccount = [
			{
				accountId: account.id,
				securityId: securityEntities[0].id, // Apple
				quantity: 100,
				price: 150.0,
				marketValue: 15000.0,
				asOfDate: asOfDate,
			},
			{
				accountId: account.id,
				securityId: securityEntities[1].id, // Microsoft
				quantity: 50,
				price: 300.0,
				marketValue: 15000.0,
				asOfDate: asOfDate,
			},
			{
				accountId: account.id,
				securityId: securityEntities[2].id, // US Treasury
				quantity: 10,
				price: 1000.0,
				marketValue: 10000.0,
				asOfDate: asOfDate,
			},
		];

		for (const holding of holdingsForAccount) {
			const holdingEntity = holdingRepo.create(holding);
			await holdingRepo.save(holdingEntity);
			console.log(
				`  Created holding: ${securityEntities.find((s) => s.id === holding.securityId)?.ticker} - ${holding.quantity} shares`,
			);
		}
	}

	await AppDataSource.destroy();

	console.log("Holding seed complete!");
}

seedHolding().catch((err) => {
	console.error("Error in seedHolding:", err);
	process.exit(1);
});
