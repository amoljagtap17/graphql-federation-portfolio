import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSubClassInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
