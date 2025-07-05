import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PerformanceReturnService } from './performance-return.service';
import { PerformanceReturn } from './entities/performance-return.entity';
import { CreatePerformanceReturnInput } from './dto/create-performance-return.input';
import { UpdatePerformanceReturnInput } from './dto/update-performance-return.input';

@Resolver(() => PerformanceReturn)
export class PerformanceReturnResolver {
  constructor(private readonly performanceReturnService: PerformanceReturnService) {}

  @Mutation(() => PerformanceReturn)
  createPerformanceReturn(@Args('createPerformanceReturnInput') createPerformanceReturnInput: CreatePerformanceReturnInput) {
    return this.performanceReturnService.create(createPerformanceReturnInput);
  }

  @Query(() => [PerformanceReturn], { name: 'performanceReturn' })
  findAll() {
    return this.performanceReturnService.findAll();
  }

  @Query(() => PerformanceReturn, { name: 'performanceReturn' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.performanceReturnService.findOne(id);
  }

  @Mutation(() => PerformanceReturn)
  updatePerformanceReturn(@Args('updatePerformanceReturnInput') updatePerformanceReturnInput: UpdatePerformanceReturnInput) {
    return this.performanceReturnService.update(updatePerformanceReturnInput.id, updatePerformanceReturnInput);
  }

  @Mutation(() => PerformanceReturn)
  removePerformanceReturn(@Args('id', { type: () => Int }) id: number) {
    return this.performanceReturnService.remove(id);
  }
}
