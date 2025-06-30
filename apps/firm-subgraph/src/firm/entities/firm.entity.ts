import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Firm {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
