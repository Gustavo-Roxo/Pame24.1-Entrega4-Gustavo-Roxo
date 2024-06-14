import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { RegistroModule } from './registro/registro.module';
import { PeçaModule } from './peça/peça.module';
import { EncomendaModule } from './encomenda/encomenda.module';
import { PedraMetalModule } from './pedra_metal/pedra_metal.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [FuncionarioModule, RegistroModule, PeçaModule, EncomendaModule,PedraMetalModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
