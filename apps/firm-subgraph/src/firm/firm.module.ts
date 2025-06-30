import { Module } from '@nestjs/common';
import { FirmService } from './firm.service';
import { FirmResolver } from './firm.resolver';

@Module({
  providers: [FirmResolver, FirmService],
})
export class FirmModule {}
