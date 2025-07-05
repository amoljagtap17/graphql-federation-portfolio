import { Injectable } from '@nestjs/common';
import { CreatePerformanceReturnInput } from './dto/create-performance-return.input';
import { UpdatePerformanceReturnInput } from './dto/update-performance-return.input';

@Injectable()
export class PerformanceReturnService {
  create(createPerformanceReturnInput: CreatePerformanceReturnInput) {
    return 'This action adds a new performanceReturn';
  }

  findAll() {
    return `This action returns all performanceReturn`;
  }

  findOne(id: number) {
    return `This action returns a #${id} performanceReturn`;
  }

  update(id: number, updatePerformanceReturnInput: UpdatePerformanceReturnInput) {
    return `This action updates a #${id} performanceReturn`;
  }

  remove(id: number) {
    return `This action removes a #${id} performanceReturn`;
  }
}
