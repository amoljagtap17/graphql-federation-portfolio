import { CreateAssetClassInput } from './create-asset-class.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAssetClassInput extends PartialType(CreateAssetClassInput) {
  @Field(() => Int)
  id: number;
}
