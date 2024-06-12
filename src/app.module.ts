import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { RegistroModule } from './registro/registro.module';
import { PeçaModule } from './peça/peça.module';
import { EncomendaModule } from './encomenda/encomenda.module';
import { MetalModule } from './pedra/metal/metal.module';
import { PedraMetalModule } from './pedra_metal/pedra_metal.module';

@Module({
  imports: [FuncionarioModule, RegistroModule, PeçaModule, EncomendaModule, MetalModule, PedraMetalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
