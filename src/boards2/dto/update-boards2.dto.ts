import { PartialType } from '@nestjs/mapped-types';
import { CreateBoards2Dto } from './create-boards2.dto';

export class UpdateBoards2Dto extends PartialType(CreateBoards2Dto) {}
