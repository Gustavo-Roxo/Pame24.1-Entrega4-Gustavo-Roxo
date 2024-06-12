import { Module } from '@nestjs/common';
import { PeçaService } from './peça.service';
import { PeçaController } from './peça.controller';

@Module({
  controllers: [PeçaController],
  providers: [PeçaService],
})
export class PeçaModule {}
