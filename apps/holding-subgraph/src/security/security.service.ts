import { Injectable } from '@nestjs/common';
import { CreateSecurityInput } from './dto/create-security.input';
import { UpdateSecurityInput } from './dto/update-security.input';

@Injectable()
export class SecurityService {
  create(createSecurityInput: CreateSecurityInput) {
    return 'This action adds a new security';
  }

  findAll() {
    return `This action returns all security`;
  }

  findOne(id: number) {
    return `This action returns a #${id} security`;
  }

  update(id: number, updateSecurityInput: UpdateSecurityInput) {
    return `This action updates a #${id} security`;
  }

  remove(id: number) {
    return `This action removes a #${id} security`;
  }
}
