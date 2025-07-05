import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StyleService } from './style.service';
import { Style } from './entities/style.entity';
import { CreateStyleInput } from './dto/create-style.input';
import { UpdateStyleInput } from './dto/update-style.input';

@Resolver(() => Style)
export class StyleResolver {
  constructor(private readonly styleService: StyleService) {}

  @Mutation(() => Style)
  createStyle(@Args('createStyleInput') createStyleInput: CreateStyleInput) {
    return this.styleService.create(createStyleInput);
  }

  @Query(() => [Style], { name: 'style' })
  findAll() {
    return this.styleService.findAll();
  }

  @Query(() => Style, { name: 'style' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.styleService.findOne(id);
  }

  @Mutation(() => Style)
  updateStyle(@Args('updateStyleInput') updateStyleInput: UpdateStyleInput) {
    return this.styleService.update(updateStyleInput.id, updateStyleInput);
  }

  @Mutation(() => Style)
  removeStyle(@Args('id', { type: () => Int }) id: number) {
    return this.styleService.remove(id);
  }
}
