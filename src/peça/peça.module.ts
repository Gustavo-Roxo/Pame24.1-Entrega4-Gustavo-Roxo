import { Module } from '@nestjs/common';
import { PeçaService } from './peça.service';
import { PeçaController } from './peça.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PeçaController],
  providers: [PeçaService, PrismaService],
})
export class PeçaModule {}
