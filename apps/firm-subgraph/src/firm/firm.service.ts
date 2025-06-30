import { Injectable } from '@nestjs/common';
import { CreateFirmInput } from './dto/create-firm.input';
import { UpdateFirmInput } from './dto/update-firm.input';

@Injectable()
export class FirmService {
  create(createFirmInput: CreateFirmInput) {
    return 'This action adds a new firm';
  }

  findAll() {
    return `This action returns all firm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} firm`;
  }

  update(id: number, updateFirmInput: UpdateFirmInput) {
    return `This action updates a #${id} firm`;
  }

  remove(id: number) {
    return `This action removes a #${id} firm`;
  }
}
