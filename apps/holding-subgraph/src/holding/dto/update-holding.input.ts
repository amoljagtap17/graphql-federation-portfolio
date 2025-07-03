import { CreateHoldingInput } from './create-holding.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHoldingInput extends PartialType(CreateHoldingInput) {
  @Field(() => Int)
  id: number;
}
