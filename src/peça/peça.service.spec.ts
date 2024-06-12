import { Test, TestingModule } from '@nestjs/testing';
import { PeçaService } from './peça.service';

describe('PeçaService', () => {
  let service: PeçaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeçaService],
    }).compile();

    service = module.get<PeçaService>(PeçaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
