import { Test, TestingModule } from '@nestjs/testing';
import { EncomendaService } from './encomenda.service';

describe('EncomendaService', () => {
  let service: EncomendaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EncomendaService],
    }).compile();

    service = module.get<EncomendaService>(EncomendaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
