import { Injectable } from '@nestjs/common';
import { CreateAssetClassInput } from './dto/create-asset-class.input';
import { UpdateAssetClassInput } from './dto/update-asset-class.input';

@Injectable()
export class AssetClassService {
  create(createAssetClassInput: CreateAssetClassInput) {
    return 'This action adds a new assetClass';
  }

  findAll() {
    return `This action returns all assetClass`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assetClass`;
  }

  update(id: number, updateAssetClassInput: UpdateAssetClassInput) {
    return `This action updates a #${id} assetClass`;
  }

  remove(id: number) {
    return `This action removes a #${id} assetClass`;
  }
}
