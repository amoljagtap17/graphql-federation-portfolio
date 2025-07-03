import { Module } from '@nestjs/common';
import { SecurityService } from './security.service';
import { SecurityResolver } from './security.resolver';

@Module({
  providers: [SecurityResolver, SecurityService],
})
export class SecurityModule {}
