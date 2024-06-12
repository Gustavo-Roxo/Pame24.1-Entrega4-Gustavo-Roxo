import { Test, TestingModule } from '@nestjs/testing';
import { PedraMetalController } from './pedra_metal.controller';
import { PedraMetalService } from './pedra_metal.service';

describe('PedraMetalController', () => {
  let controller: PedraMetalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PedraMetalController],
      providers: [PedraMetalService],
    }).compile();

    controller = module.get<PedraMetalController>(PedraMetalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
