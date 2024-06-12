import { Module } from '@nestjs/common';
import { PedraMetalService } from './pedra_metal.service';
import { PedraMetalController } from './pedra_metal.controller';

@Module({
  controllers: [PedraMetalController],
  providers: [PedraMetalService],
})
export class PedraMetalModule {}
