import { Module } from '@nestjs/common';
import { SubClassService } from './sub-class.service';
import { SubClassResolver } from './sub-class.resolver';

@Module({
  providers: [SubClassResolver, SubClassService],
})
export class SubClassModule {}
