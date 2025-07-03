import { CreateAssetAllocationInput } from './create-asset-allocation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAssetAllocationInput extends PartialType(CreateAssetAllocationInput) {
  @Field(() => Int)
  id: number;
}
