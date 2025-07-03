import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Holding {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
