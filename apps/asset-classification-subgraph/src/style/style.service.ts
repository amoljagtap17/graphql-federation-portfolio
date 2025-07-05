import { Injectable } from '@nestjs/common';
import { CreateStyleInput } from './dto/create-style.input';
import { UpdateStyleInput } from './dto/update-style.input';

@Injectable()
export class StyleService {
  create(createStyleInput: CreateStyleInput) {
    return 'This action adds a new style';
  }

  findAll() {
    return `This action returns all style`;
  }

  findOne(id: number) {
    return `This action returns a #${id} style`;
  }

  update(id: number, updateStyleInput: UpdateStyleInput) {
    return `This action updates a #${id} style`;
  }

  remove(id: number) {
    return `This action removes a #${id} style`;
  }
}
