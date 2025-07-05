import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Benchmark {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
