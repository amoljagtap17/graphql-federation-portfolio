import { AppDataSource, AssetClass, BroadAssetClass, Style, SubClass } from "./data-source";

async function seedAssetClassification() {
	await AppDataSource.initialize();

	// 1. Truncate tables (in right order, with CASCADE)
	await AppDataSource.query(
		"TRUNCATE TABLE style, sub_class, asset_class, broad_asset_class RESTART IDENTITY CASCADE;",
	);

	// 2. BAC data
	const bacData = [
		{ code: "cash", label: "Cash", description: "Cash and cash equivalents" },
		{
			code: "fixed_income",
			label: "Fixed Income",
			description: "Fixed income securities and bonds",
		},
		{ code: "non_traditional", label: "Non Traditional", description: "Non traditional assets" },
		{ code: "other", label: "Other", description: "Other asset classes" },
		{ code: "equity", label: "Equity", description: "Equity and related investments" },
	];

	// Insert BACs and build a code->entity map
	const bacRepo = AppDataSource.getRepository(BroadAssetClass);
	const bacEntities = await bacRepo.save(bacData);
	const bacMap = new Map<string, BroadAssetClass>();

	bacEntities.forEach((bac) => bacMap.set(bac.code, bac));

	// 3. Asset Classes
	const acData = [
		// Cash
		{ code: "cash", label: "Cash", broadAssetClassCode: "cash", description: "Cash assets" },
		{
			code: "money_market",
			label: "Money Market",
			broadAssetClassCode: "cash",
			description: "Money market funds and instruments",
		},

		// Fixed Income
		{
			code: "government_bonds",
			label: "Government Bonds",
			broadAssetClassCode: "fixed_income",
			description: "Government issued bonds",
		},
		{
			code: "corporate_bonds",
			label: "Corporate Bonds",
			broadAssetClassCode: "fixed_income",
			description: "Corporate issued bonds",
		},
		{
			code: "municipal_bonds",
			label: "Municipal Bonds",
			broadAssetClassCode: "fixed_income",
			description: "Municipal bonds",
		},
		{
			code: "high_yield_bonds",
			label: "High Yield Bonds",
			broadAssetClassCode: "fixed_income",
			description: "High yield corporate bonds",
		},
		{
			code: "international_bonds",
			label: "International Bonds",
			broadAssetClassCode: "fixed_income",
			description: "International fixed income securities",
		},

		// Equity
		{
			code: "large_cap_equity",
			label: "Large Cap Equity",
			broadAssetClassCode: "equity",
			description: "Large capitalization equity securities",
		},
		{
			code: "mid_cap_equity",
			label: "Mid Cap Equity",
			broadAssetClassCode: "equity",
			description: "Mid capitalization equity securities",
		},
		{
			code: "small_cap_equity",
			label: "Small Cap Equity",
			broadAssetClassCode: "equity",
			description: "Small capitalization equity securities",
		},
		{
			code: "international_equity",
			label: "International Equity",
			broadAssetClassCode: "equity",
			description: "International equity securities",
		},
		{
			code: "emerging_markets",
			label: "Emerging Markets",
			broadAssetClassCode: "equity",
			description: "Emerging market equity securities",
		},

		// Non Traditional
		{
			code: "real_estate",
			label: "Real Estate",
			broadAssetClassCode: "non_traditional",
			description: "Real estate investments",
		},
		{
			code: "commodities",
			label: "Commodities",
			broadAssetClassCode: "non_traditional",
			description: "Commodity investments",
		},
		{
			code: "hedge_funds",
			label: "Hedge Funds",
			broadAssetClassCode: "non_traditional",
			description: "Hedge fund investments",
		},
		{
			code: "private_equity",
			label: "Private Equity",
			broadAssetClassCode: "non_traditional",
			description: "Private equity investments",
		},

		// Other
		{
			code: "derivatives",
			label: "Derivatives",
			broadAssetClassCode: "other",
			description: "Derivative instruments",
		},
		{
			code: "structured_products",
			label: "Structured Products",
			broadAssetClassCode: "other",
			description: "Structured financial products",
		},
	];

	const acRepo = AppDataSource.getRepository(AssetClass);
	const acEntities: AssetClass[] = [];

	for (const ac of acData) {
		const assetClass = acRepo.create({
			code: ac.code,
			label: ac.label,
			broadAssetClassId: bacMap.get(ac.broadAssetClassCode)!.id,
			description: ac.description,
		});

		acEntities.push(await acRepo.save(assetClass));
	}

	const acMap = new Map<string, AssetClass>();

	acEntities.forEach((ac) => acMap.set(ac.code, ac));

	// 4. Sub Classes
	const scData = [
		// Cash sub classes
		{
			code: "us_cash",
			label: "US Cash",
			assetClassCode: "cash",
			description: "US cash instruments",
		},
		{
			code: "international_cash",
			label: "International Cash",
			assetClassCode: "cash",
			description: "International cash instruments",
		},
		{
			code: "us_money_market",
			label: "US Money Market",
			assetClassCode: "money_market",
			description: "US money market funds",
		},
		{
			code: "international_money_market",
			label: "International Money Market",
			assetClassCode: "money_market",
			description: "International money market funds",
		},

		// Government Bonds sub classes
		{
			code: "us_treasury",
			label: "US Treasury",
			assetClassCode: "government_bonds",
			description: "US Treasury securities",
		},
		{
			code: "us_agency",
			label: "US Agency",
			assetClassCode: "government_bonds",
			description: "US Agency bonds",
		},
		{
			code: "international_government",
			label: "International Government",
			assetClassCode: "government_bonds",
			description: "International government bonds",
		},

		// Corporate Bonds sub classes
		{
			code: "us_investment_grade",
			label: "US Investment Grade",
			assetClassCode: "corporate_bonds",
			description: "US investment grade corporate bonds",
		},
		{
			code: "international_investment_grade",
			label: "International Investment Grade",
			assetClassCode: "corporate_bonds",
			description: "International investment grade corporate bonds",
		},

		// Municipal Bonds sub classes
		{
			code: "general_obligation",
			label: "General Obligation",
			assetClassCode: "municipal_bonds",
			description: "General obligation municipal bonds",
		},
		{
			code: "revenue_bonds",
			label: "Revenue Bonds",
			assetClassCode: "municipal_bonds",
			description: "Revenue municipal bonds",
		},

		// High Yield Bonds sub classes
		{
			code: "us_high_yield",
			label: "US High Yield",
			assetClassCode: "high_yield_bonds",
			description: "US high yield bonds",
		},
		{
			code: "international_high_yield",
			label: "International High Yield",
			assetClassCode: "high_yield_bonds",
			description: "International high yield bonds",
		},

		// International Bonds sub classes
		{
			code: "developed_markets_bonds",
			label: "Developed Markets Bonds",
			assetClassCode: "international_bonds",
			description: "Developed market bonds",
		},
		{
			code: "emerging_markets_bonds",
			label: "Emerging Markets Bonds",
			assetClassCode: "international_bonds",
			description: "Emerging market bonds",
		},

		// Large Cap Equity sub classes
		{
			code: "us_large_cap",
			label: "US Large Cap",
			assetClassCode: "large_cap_equity",
			description: "US large cap equity",
		},
		{
			code: "international_large_cap",
			label: "International Large Cap",
			assetClassCode: "large_cap_equity",
			description: "International large cap equity",
		},

		// Mid Cap Equity sub classes
		{
			code: "us_mid_cap",
			label: "US Mid Cap",
			assetClassCode: "mid_cap_equity",
			description: "US mid cap equity",
		},
		{
			code: "international_mid_cap",
			label: "International Mid Cap",
			assetClassCode: "mid_cap_equity",
			description: "International mid cap equity",
		},

		// Small Cap Equity sub classes
		{
			code: "us_small_cap",
			label: "US Small Cap",
			assetClassCode: "small_cap_equity",
			description: "US small cap equity",
		},
		{
			code: "international_small_cap",
			label: "International Small Cap",
			assetClassCode: "small_cap_equity",
			description: "International small cap equity",
		},

		// International Equity sub classes
		{
			code: "developed_markets_equity",
			label: "Developed Markets Equity",
			assetClassCode: "international_equity",
			description: "Developed market equity",
		},
		{
			code: "europe_equity",
			label: "Europe Equity",
			assetClassCode: "international_equity",
			description: "European equity",
		},
		{
			code: "asia_pacific_equity",
			label: "Asia Pacific Equity",
			assetClassCode: "international_equity",
			description: "Asia Pacific equity",
		},

		// Emerging Markets sub classes
		{
			code: "emerging_asia",
			label: "Emerging Asia",
			assetClassCode: "emerging_markets",
			description: "Emerging Asian markets",
		},
		{
			code: "emerging_latin_america",
			label: "Emerging Latin America",
			assetClassCode: "emerging_markets",
			description: "Emerging Latin American markets",
		},
		{
			code: "emerging_europe_africa",
			label: "Emerging Europe & Africa",
			assetClassCode: "emerging_markets",
			description: "Emerging European and African markets",
		},

		// Real Estate sub classes
		{
			code: "us_reit",
			label: "US REIT",
			assetClassCode: "real_estate",
			description: "US Real Estate Investment Trusts",
		},
		{
			code: "international_reit",
			label: "International REIT",
			assetClassCode: "real_estate",
			description: "International Real Estate Investment Trusts",
		},
		{
			code: "direct_real_estate",
			label: "Direct Real Estate",
			assetClassCode: "real_estate",
			description: "Direct real estate investments",
		},

		// Commodities sub classes
		{
			code: "energy",
			label: "Energy",
			assetClassCode: "commodities",
			description: "Energy commodities",
		},
		{
			code: "precious_metals",
			label: "Precious Metals",
			assetClassCode: "commodities",
			description: "Precious metals",
		},
		{
			code: "industrial_metals",
			label: "Industrial Metals",
			assetClassCode: "commodities",
			description: "Industrial metals",
		},
		{
			code: "agriculture",
			label: "Agriculture",
			assetClassCode: "commodities",
			description: "Agricultural commodities",
		},

		// Hedge Funds sub classes
		{
			code: "equity_hedge",
			label: "Equity Hedge",
			assetClassCode: "hedge_funds",
			description: "Equity hedge strategies",
		},
		{
			code: "macro_hedge",
			label: "Macro Hedge",
			assetClassCode: "hedge_funds",
			description: "Macro hedge strategies",
		},
		{
			code: "relative_value",
			label: "Relative Value",
			assetClassCode: "hedge_funds",
			description: "Relative value strategies",
		},
		{
			code: "event_driven",
			label: "Event Driven",
			assetClassCode: "hedge_funds",
			description: "Event driven strategies",
		},

		// Private Equity sub classes
		{
			code: "buyout",
			label: "Buyout",
			assetClassCode: "private_equity",
			description: "Buyout funds",
		},
		{
			code: "growth_equity",
			label: "Growth Equity",
			assetClassCode: "private_equity",
			description: "Growth equity funds",
		},
		{
			code: "venture_capital",
			label: "Venture Capital",
			assetClassCode: "private_equity",
			description: "Venture capital funds",
		},

		// Derivatives sub classes
		{
			code: "equity_derivatives",
			label: "Equity Derivatives",
			assetClassCode: "derivatives",
			description: "Equity derivative instruments",
		},
		{
			code: "fixed_income_derivatives",
			label: "Fixed Income Derivatives",
			assetClassCode: "derivatives",
			description: "Fixed income derivative instruments",
		},
		{
			code: "currency_derivatives",
			label: "Currency Derivatives",
			assetClassCode: "derivatives",
			description: "Currency derivative instruments",
		},

		// Structured Products sub classes
		{
			code: "structured_notes",
			label: "Structured Notes",
			assetClassCode: "structured_products",
			description: "Structured notes",
		},
		{
			code: "market_linked_cds",
			label: "Market Linked CDs",
			assetClassCode: "structured_products",
			description: "Market linked certificates of deposit",
		},
	];

	const scRepo = AppDataSource.getRepository(SubClass);

	for (const sc of scData) {
		await scRepo.save(
			scRepo.create({
				code: sc.code,
				label: sc.label,
				assetClassId: acMap.get(sc.assetClassCode)!.id,
				description: sc.description,
			}),
		);
	}

	// 5. Styles
	const styleData = [
		// Geographic styles
		{ code: "us", label: "US", description: "US domiciled investments" },
		{ code: "international", label: "International", description: "International investments" },
		{
			code: "global",
			label: "Global",
			description: "Global investments including US and international",
		},
		{ code: "europe", label: "Europe", description: "European investments" },
		{ code: "asia_pacific", label: "Asia Pacific", description: "Asia Pacific investments" },
		{
			code: "emerging_markets",
			label: "Emerging Markets",
			description: "Emerging market investments",
		},
		{ code: "japan", label: "Japan", description: "Japanese investments" },
		{ code: "china", label: "China", description: "Chinese investments" },

		// Investment styles
		{ code: "value", label: "Value", description: "Value investment style" },
		{ code: "growth", label: "Growth", description: "Growth investment style" },
		{ code: "blend", label: "Blend", description: "Blend of value and growth styles" },
		{ code: "core", label: "Core", description: "Core investment style" },
		{
			code: "aggressive_growth",
			label: "Aggressive Growth",
			description: "Aggressive growth investment style",
		},

		// Market cap styles
		{ code: "large_cap", label: "Large Cap", description: "Large capitalization focus" },
		{ code: "mid_cap", label: "Mid Cap", description: "Mid capitalization focus" },
		{ code: "small_cap", label: "Small Cap", description: "Small capitalization focus" },
		{ code: "micro_cap", label: "Micro Cap", description: "Micro capitalization focus" },
		{ code: "multi_cap", label: "Multi Cap", description: "Multiple capitalization focus" },

		// Sector styles
		{ code: "technology", label: "Technology", description: "Technology sector focus" },
		{ code: "healthcare", label: "Healthcare", description: "Healthcare sector focus" },
		{ code: "financial", label: "Financial", description: "Financial sector focus" },
		{ code: "energy", label: "Energy", description: "Energy sector focus" },
		{ code: "consumer", label: "Consumer", description: "Consumer sector focus" },
		{ code: "industrials", label: "Industrials", description: "Industrials sector focus" },
		{ code: "materials", label: "Materials", description: "Materials sector focus" },
		{ code: "utilities", label: "Utilities", description: "Utilities sector focus" },
		{
			code: "telecommunications",
			label: "Telecommunications",
			description: "Telecommunications sector focus",
		},
		{ code: "real_estate", label: "Real Estate", description: "Real estate sector focus" },

		// Duration styles (for fixed income)
		{ code: "short_duration", label: "Short Duration", description: "Short duration fixed income" },
		{
			code: "intermediate_duration",
			label: "Intermediate Duration",
			description: "Intermediate duration fixed income",
		},
		{ code: "long_duration", label: "Long Duration", description: "Long duration fixed income" },

		// Credit quality styles
		{
			code: "investment_grade",
			label: "Investment Grade",
			description: "Investment grade credit quality",
		},
		{ code: "high_yield", label: "High Yield", description: "High yield credit quality" },
		{ code: "bank_loans", label: "Bank Loans", description: "Bank loan investments" },

		// ESG styles
		{ code: "esg", label: "ESG", description: "Environmental, Social, and Governance focused" },
		{ code: "sustainable", label: "Sustainable", description: "Sustainable investing approach" },
		{ code: "impact", label: "Impact", description: "Impact investing approach" },

		// Alternative styles
		{ code: "long_short", label: "Long/Short", description: "Long/short investment strategy" },
		{ code: "market_neutral", label: "Market Neutral", description: "Market neutral strategy" },
		{ code: "arbitrage", label: "Arbitrage", description: "Arbitrage strategy" },
		{ code: "distressed", label: "Distressed", description: "Distressed securities strategy" },

		// Currency styles
		{
			code: "currency_hedged",
			label: "Currency Hedged",
			description: "Currency hedged investments",
		},
		{
			code: "currency_unhedged",
			label: "Currency Unhedged",
			description: "Currency unhedged investments",
		},

		// Active vs Passive
		{ code: "active", label: "Active", description: "Actively managed investments" },
		{ code: "passive", label: "Passive", description: "Passively managed investments" },
		{ code: "index", label: "Index", description: "Index-based investments" },
		{ code: "enhanced_index", label: "Enhanced Index", description: "Enhanced index strategies" },
	];

	const styleRepo = AppDataSource.getRepository(Style);

	for (const style of styleData) {
		await styleRepo.save(styleRepo.create(style));
	}

	await AppDataSource.destroy();

	console.log("Asset classification seed complete!");
}

seedAssetClassification().catch((err) => {
	console.error("Error in seedAssetClassification:", err);
	process.exit(1);
});
