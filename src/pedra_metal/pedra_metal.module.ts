import { Module } from '@nestjs/common';
import { PedraMetalService } from './pedra_metal.service';
import { PedraMetalController } from './pedra_metal.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PedraMetalController],
  providers: [PedraMetalService, PrismaService],
})
export class PedraMetalModule {}
