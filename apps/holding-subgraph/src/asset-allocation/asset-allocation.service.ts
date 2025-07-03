import { Injectable } from '@nestjs/common';
import { CreateAssetAllocationInput } from './dto/create-asset-allocation.input';
import { UpdateAssetAllocationInput } from './dto/update-asset-allocation.input';

@Injectable()
export class AssetAllocationService {
  create(createAssetAllocationInput: CreateAssetAllocationInput) {
    return 'This action adds a new assetAllocation';
  }

  findAll() {
    return `This action returns all assetAllocation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assetAllocation`;
  }

  update(id: number, updateAssetAllocationInput: UpdateAssetAllocationInput) {
    return `This action updates a #${id} assetAllocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} assetAllocation`;
  }
}
