import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAssetClassInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
