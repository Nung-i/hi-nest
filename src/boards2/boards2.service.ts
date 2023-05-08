import { Injectable } from '@nestjs/common';
import { CreateBoards2Dto } from './dto/create-boards2.dto';
import { UpdateBoards2Dto } from './dto/update-boards2.dto';

@Injectable()
export class Boards2Service {
  create(createBoards2Dto: CreateBoards2Dto) {
    return 'This action adds a new boards2';
  }

  findAll() {
    return `This action returns all boards2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} boards2`;
  }

  update(id: number, updateBoards2Dto: UpdateBoards2Dto) {
    return `This action updates a #${id} boards2`;
  }

  remove(id: number) {
    return `This action removes a #${id} boards2`;
  }
}
