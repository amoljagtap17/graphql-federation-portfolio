import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SubClassService } from './sub-class.service';
import { SubClass } from './entities/sub-class.entity';
import { CreateSubClassInput } from './dto/create-sub-class.input';
import { UpdateSubClassInput } from './dto/update-sub-class.input';

@Resolver(() => SubClass)
export class SubClassResolver {
  constructor(private readonly subClassService: SubClassService) {}

  @Mutation(() => SubClass)
  createSubClass(@Args('createSubClassInput') createSubClassInput: CreateSubClassInput) {
    return this.subClassService.create(createSubClassInput);
  }

  @Query(() => [SubClass], { name: 'subClass' })
  findAll() {
    return this.subClassService.findAll();
  }

  @Query(() => SubClass, { name: 'subClass' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.subClassService.findOne(id);
  }

  @Mutation(() => SubClass)
  updateSubClass(@Args('updateSubClassInput') updateSubClassInput: UpdateSubClassInput) {
    return this.subClassService.update(updateSubClassInput.id, updateSubClassInput);
  }

  @Mutation(() => SubClass)
  removeSubClass(@Args('id', { type: () => Int }) id: number) {
    return this.subClassService.remove(id);
  }
}
