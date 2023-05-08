import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Boards2Service } from './boards2.service';
import { CreateBoards2Dto } from './dto/create-boards2.dto';
import { UpdateBoards2Dto } from './dto/update-boards2.dto';

@Controller('boards2')
export class Boards2Controller {
  constructor(private readonly boards2Service: Boards2Service) {}

  @Post()
  create(@Body() createBoards2Dto: CreateBoards2Dto) {
    return this.boards2Service.create(createBoards2Dto);
  }

  @Get()
  findAll() {
    return this.boards2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boards2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBoards2Dto: UpdateBoards2Dto) {
    return this.boards2Service.update(+id, updateBoards2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boards2Service.remove(+id);
  }
}
