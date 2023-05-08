import { Module } from '@nestjs/common';
import { Boards2Service } from './boards2.service';
import { Boards2Controller } from './boards2.controller';

@Module({
  controllers: [Boards2Controller],
  providers: [Boards2Service]
})
export class Boards2Module {}
