import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBenchmarkInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
