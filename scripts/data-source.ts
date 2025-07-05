import { DataSource } from "typeorm";
import { AssetClass } from "../apps/asset-classification-subgraph/src/asset-class/entities/asset-class.entity";
import { BroadAssetClass } from "../apps/asset-classification-subgraph/src/broad-asset-class/entities/broad-asset-class.entity";
import { Style } from "../apps/asset-classification-subgraph/src/style/entities/style.entity";
import { SubClass } from "../apps/asset-classification-subgraph/src/sub-class/entities/sub-class.entity";

export const AppDataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "superadminuser",
	password: "superadminpassword",
	database: "porfolio_wealth",
	entities: [BroadAssetClass, AssetClass, SubClass, Style],
});

export { AssetClass, BroadAssetClass, Style, SubClass };
