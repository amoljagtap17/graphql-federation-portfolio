import { Injectable } from '@nestjs/common';
import { CreateSubClassInput } from './dto/create-sub-class.input';
import { UpdateSubClassInput } from './dto/update-sub-class.input';

@Injectable()
export class SubClassService {
  create(createSubClassInput: CreateSubClassInput) {
    return 'This action adds a new subClass';
  }

  findAll() {
    return `This action returns all subClass`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subClass`;
  }

  update(id: number, updateSubClassInput: UpdateSubClassInput) {
    return `This action updates a #${id} subClass`;
  }

  remove(id: number) {
    return `This action removes a #${id} subClass`;
  }
}
