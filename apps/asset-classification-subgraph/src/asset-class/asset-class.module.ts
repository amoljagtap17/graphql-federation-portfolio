import { Module } from '@nestjs/common';
import { AssetClassService } from './asset-class.service';
import { AssetClassResolver } from './asset-class.resolver';

@Module({
  providers: [AssetClassResolver, AssetClassService],
})
export class AssetClassModule {}
