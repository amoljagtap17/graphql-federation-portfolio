import { Module } from '@nestjs/common';
import { AssetAllocationService } from './asset-allocation.service';
import { AssetAllocationResolver } from './asset-allocation.resolver';

@Module({
  providers: [AssetAllocationResolver, AssetAllocationService],
})
export class AssetAllocationModule {}
