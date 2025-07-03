import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SecurityService } from './security.service';
import { Security } from './entities/security.entity';
import { CreateSecurityInput } from './dto/create-security.input';
import { UpdateSecurityInput } from './dto/update-security.input';

@Resolver(() => Security)
export class SecurityResolver {
  constructor(private readonly securityService: SecurityService) {}

  @Mutation(() => Security)
  createSecurity(@Args('createSecurityInput') createSecurityInput: CreateSecurityInput) {
    return this.securityService.create(createSecurityInput);
  }

  @Query(() => [Security], { name: 'security' })
  findAll() {
    return this.securityService.findAll();
  }

  @Query(() => Security, { name: 'security' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.securityService.findOne(id);
  }

  @Mutation(() => Security)
  updateSecurity(@Args('updateSecurityInput') updateSecurityInput: UpdateSecurityInput) {
    return this.securityService.update(updateSecurityInput.id, updateSecurityInput);
  }

  @Mutation(() => Security)
  removeSecurity(@Args('id', { type: () => Int }) id: number) {
    return this.securityService.remove(id);
  }
}
