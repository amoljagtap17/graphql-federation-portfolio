import { CreateFirmInput } from './create-firm.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFirmInput extends PartialType(CreateFirmInput) {
  @Field(() => Int)
  id: number;
}
