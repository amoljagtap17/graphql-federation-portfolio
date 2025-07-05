import { CreatePerformanceReturnInput } from './create-performance-return.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePerformanceReturnInput extends PartialType(CreatePerformanceReturnInput) {
  @Field(() => Int)
  id: number;
}
