import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSecurityInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
