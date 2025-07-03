import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHoldingInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
