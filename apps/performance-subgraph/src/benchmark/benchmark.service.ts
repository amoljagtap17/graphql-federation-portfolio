import { Injectable } from '@nestjs/common';
import { CreateBenchmarkInput } from './dto/create-benchmark.input';
import { UpdateBenchmarkInput } from './dto/update-benchmark.input';

@Injectable()
export class BenchmarkService {
  create(createBenchmarkInput: CreateBenchmarkInput) {
    return 'This action adds a new benchmark';
  }

  findAll() {
    return `This action returns all benchmark`;
  }

  findOne(id: number) {
    return `This action returns a #${id} benchmark`;
  }

  update(id: number, updateBenchmarkInput: UpdateBenchmarkInput) {
    return `This action updates a #${id} benchmark`;
  }

  remove(id: number) {
    return `This action removes a #${id} benchmark`;
  }
}
