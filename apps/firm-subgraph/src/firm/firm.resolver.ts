import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FirmService } from './firm.service';
import { Firm } from './entities/firm.entity';
import { CreateFirmInput } from './dto/create-firm.input';
import { UpdateFirmInput } from './dto/update-firm.input';

@Resolver(() => Firm)
export class FirmResolver {
  constructor(private readonly firmService: FirmService) {}

  @Mutation(() => Firm)
  createFirm(@Args('createFirmInput') createFirmInput: CreateFirmInput) {
    return this.firmService.create(createFirmInput);
  }

  @Query(() => [Firm], { name: 'firm' })
  findAll() {
    return this.firmService.findAll();
  }

  @Query(() => Firm, { name: 'firm' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.firmService.findOne(id);
  }

  @Mutation(() => Firm)
  updateFirm(@Args('updateFirmInput') updateFirmInput: UpdateFirmInput) {
    return this.firmService.update(updateFirmInput.id, updateFirmInput);
  }

  @Mutation(() => Firm)
  removeFirm(@Args('id', { type: () => Int }) id: number) {
    return this.firmService.remove(id);
  }
}
