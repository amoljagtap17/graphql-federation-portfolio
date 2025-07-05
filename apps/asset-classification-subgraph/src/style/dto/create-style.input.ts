import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStyleInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
