import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AssetClassService } from './asset-class.service';
import { AssetClass } from './entities/asset-class.entity';
import { CreateAssetClassInput } from './dto/create-asset-class.input';
import { UpdateAssetClassInput } from './dto/update-asset-class.input';

@Resolver(() => AssetClass)
export class AssetClassResolver {
  constructor(private readonly assetClassService: AssetClassService) {}

  @Mutation(() => AssetClass)
  createAssetClass(@Args('createAssetClassInput') createAssetClassInput: CreateAssetClassInput) {
    return this.assetClassService.create(createAssetClassInput);
  }

  @Query(() => [AssetClass], { name: 'assetClass' })
  findAll() {
    return this.assetClassService.findAll();
  }

  @Query(() => AssetClass, { name: 'assetClass' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.assetClassService.findOne(id);
  }

  @Mutation(() => AssetClass)
  updateAssetClass(@Args('updateAssetClassInput') updateAssetClassInput: UpdateAssetClassInput) {
    return this.assetClassService.update(updateAssetClassInput.id, updateAssetClassInput);
  }

  @Mutation(() => AssetClass)
  removeAssetClass(@Args('id', { type: () => Int }) id: number) {
    return this.assetClassService.remove(id);
  }
}
