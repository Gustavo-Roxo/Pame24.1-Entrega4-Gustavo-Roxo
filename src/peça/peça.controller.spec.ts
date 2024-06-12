import { Test, TestingModule } from '@nestjs/testing';
import { PeçaController } from './peça.controller';
import { PeçaService } from './peça.service';

describe('PeçaController', () => {
  let controller: PeçaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeçaController],
      providers: [PeçaService],
    }).compile();

    controller = module.get<PeçaController>(PeçaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
