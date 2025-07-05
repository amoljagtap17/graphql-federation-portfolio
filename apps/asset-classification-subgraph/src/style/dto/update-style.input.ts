import { CreateStyleInput } from './create-style.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStyleInput extends PartialType(CreateStyleInput) {
  @Field(() => Int)
  id: number;
}
