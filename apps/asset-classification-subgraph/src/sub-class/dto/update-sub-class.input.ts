import { CreateSubClassInput } from './create-sub-class.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSubClassInput extends PartialType(CreateSubClassInput) {
  @Field(() => Int)
  id: number;
}
