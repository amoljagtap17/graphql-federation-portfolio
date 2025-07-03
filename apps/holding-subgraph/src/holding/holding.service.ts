import { Injectable } from '@nestjs/common';
import { CreateHoldingInput } from './dto/create-holding.input';
import { UpdateHoldingInput } from './dto/update-holding.input';

@Injectable()
export class HoldingService {
  create(createHoldingInput: CreateHoldingInput) {
    return 'This action adds a new holding';
  }

  findAll() {
    return `This action returns all holding`;
  }

  findOne(id: number) {
    return `This action returns a #${id} holding`;
  }

  update(id: number, updateHoldingInput: UpdateHoldingInput) {
    return `This action updates a #${id} holding`;
  }

  remove(id: number) {
    return `This action removes a #${id} holding`;
  }
}
