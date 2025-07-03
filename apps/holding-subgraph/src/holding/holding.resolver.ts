import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HoldingService } from './holding.service';
import { Holding } from './entities/holding.entity';
import { CreateHoldingInput } from './dto/create-holding.input';
import { UpdateHoldingInput } from './dto/update-holding.input';

@Resolver(() => Holding)
export class HoldingResolver {
  constructor(private readonly holdingService: HoldingService) {}

  @Mutation(() => Holding)
  createHolding(@Args('createHoldingInput') createHoldingInput: CreateHoldingInput) {
    return this.holdingService.create(createHoldingInput);
  }

  @Query(() => [Holding], { name: 'holding' })
  findAll() {
    return this.holdingService.findAll();
  }

  @Query(() => Holding, { name: 'holding' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.holdingService.findOne(id);
  }

  @Mutation(() => Holding)
  updateHolding(@Args('updateHoldingInput') updateHoldingInput: UpdateHoldingInput) {
    return this.holdingService.update(updateHoldingInput.id, updateHoldingInput);
  }

  @Mutation(() => Holding)
  removeHolding(@Args('id', { type: () => Int }) id: number) {
    return this.holdingService.remove(id);
  }
}
