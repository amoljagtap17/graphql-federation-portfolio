import { DataSource } from "typeorm";
import { AssetClass } from "../apps/asset-classification-subgraph/src/asset-class/entities/asset-class.entity";
import { BroadAssetClass } from "../apps/asset-classification-subgraph/src/broad-asset-class/entities/broad-asset-class.entity";
import { Style } from "../apps/asset-classification-subgraph/src/style/entities/style.entity";
import { SubClass } from "../apps/asset-classification-subgraph/src/sub-class/entities/sub-class.entity";
import { Account } from "../apps/client-subgraph/src/account/entities/account.entity";
import { Client } from "../apps/client-subgraph/src/client/entities/client.entity";
import { Firm } from "../apps/firm-subgraph/src/firm/entities/firm.entity";
import { User } from "../apps/firm-subgraph/src/user/entities/user.entity";

export const AppDataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "superadminuser",
	password: "superadminpassword",
	database: "porfolio_wealth",
	entities: [Firm, User, Client, Account, BroadAssetClass, AssetClass, SubClass, Style],
});

export { Account, AssetClass, BroadAssetClass, Client, Firm, Style, SubClass, User };
