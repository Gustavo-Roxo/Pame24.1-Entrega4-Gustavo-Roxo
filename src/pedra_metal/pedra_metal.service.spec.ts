import { Test, TestingModule } from '@nestjs/testing';
import { PedraMetalService } from './pedra_metal.service';

describe('PedraMetalService', () => {
  let service: PedraMetalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PedraMetalService],
    }).compile();

    service = module.get<PedraMetalService>(PedraMetalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
