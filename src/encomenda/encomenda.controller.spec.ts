import { Test, TestingModule } from '@nestjs/testing';
import { EncomendaController } from './encomenda.controller';
import { EncomendaService } from './encomenda.service';

describe('EncomendaController', () => {
  let controller: EncomendaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EncomendaController],
      providers: [EncomendaService],
    }).compile();

    controller = module.get<EncomendaController>(EncomendaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
