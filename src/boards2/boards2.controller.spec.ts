import { Test, TestingModule } from '@nestjs/testing';
import { Boards2Controller } from './boards2.controller';
import { Boards2Service } from './boards2.service';

describe('Boards2Controller', () => {
  let controller: Boards2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Boards2Controller],
      providers: [Boards2Service],
    }).compile();

    controller = module.get<Boards2Controller>(Boards2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
