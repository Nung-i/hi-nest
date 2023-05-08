import { Test, TestingModule } from '@nestjs/testing';
import { Boards2Service } from './boards2.service';

describe('Boards2Service', () => {
  let service: Boards2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Boards2Service],
    }).compile();

    service = module.get<Boards2Service>(Boards2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
