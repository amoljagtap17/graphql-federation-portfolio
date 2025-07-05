import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Style {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
