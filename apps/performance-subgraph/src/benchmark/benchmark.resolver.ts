import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BenchmarkService } from './benchmark.service';
import { Benchmark } from './entities/benchmark.entity';
import { CreateBenchmarkInput } from './dto/create-benchmark.input';
import { UpdateBenchmarkInput } from './dto/update-benchmark.input';

@Resolver(() => Benchmark)
export class BenchmarkResolver {
  constructor(private readonly benchmarkService: BenchmarkService) {}

  @Mutation(() => Benchmark)
  createBenchmark(@Args('createBenchmarkInput') createBenchmarkInput: CreateBenchmarkInput) {
    return this.benchmarkService.create(createBenchmarkInput);
  }

  @Query(() => [Benchmark], { name: 'benchmark' })
  findAll() {
    return this.benchmarkService.findAll();
  }

  @Query(() => Benchmark, { name: 'benchmark' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.benchmarkService.findOne(id);
  }

  @Mutation(() => Benchmark)
  updateBenchmark(@Args('updateBenchmarkInput') updateBenchmarkInput: UpdateBenchmarkInput) {
    return this.benchmarkService.update(updateBenchmarkInput.id, updateBenchmarkInput);
  }

  @Mutation(() => Benchmark)
  removeBenchmark(@Args('id', { type: () => Int }) id: number) {
    return this.benchmarkService.remove(id);
  }
}
