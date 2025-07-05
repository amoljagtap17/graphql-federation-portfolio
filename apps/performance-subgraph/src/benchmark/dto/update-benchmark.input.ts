import { CreateBenchmarkInput } from './create-benchmark.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBenchmarkInput extends PartialType(CreateBenchmarkInput) {
  @Field(() => Int)
  id: number;
}
