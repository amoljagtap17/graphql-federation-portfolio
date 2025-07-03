import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AssetAllocationService } from './asset-allocation.service';
import { AssetAllocation } from './entities/asset-allocation.entity';
import { CreateAssetAllocationInput } from './dto/create-asset-allocation.input';
import { UpdateAssetAllocationInput } from './dto/update-asset-allocation.input';

@Resolver(() => AssetAllocation)
export class AssetAllocationResolver {
  constructor(private readonly assetAllocationService: AssetAllocationService) {}

  @Mutation(() => AssetAllocation)
  createAssetAllocation(@Args('createAssetAllocationInput') createAssetAllocationInput: CreateAssetAllocationInput) {
    return this.assetAllocationService.create(createAssetAllocationInput);
  }

  @Query(() => [AssetAllocation], { name: 'assetAllocation' })
  findAll() {
    return this.assetAllocationService.findAll();
  }

  @Query(() => AssetAllocation, { name: 'assetAllocation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.assetAllocationService.findOne(id);
  }

  @Mutation(() => AssetAllocation)
  updateAssetAllocation(@Args('updateAssetAllocationInput') updateAssetAllocationInput: UpdateAssetAllocationInput) {
    return this.assetAllocationService.update(updateAssetAllocationInput.id, updateAssetAllocationInput);
  }

  @Mutation(() => AssetAllocation)
  removeAssetAllocation(@Args('id', { type: () => Int }) id: number) {
    return this.assetAllocationService.remove(id);
  }
}
