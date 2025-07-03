import { CreateSecurityInput } from './create-security.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSecurityInput extends PartialType(CreateSecurityInput) {
  @Field(() => Int)
  id: number;
}
