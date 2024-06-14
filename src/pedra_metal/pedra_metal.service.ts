import { Injectable } from '@nestjs/common';
import { CreatePedraMetalDto } from './dto/create-pedra_metal.dto';
import { UpdatePedraMetalDto } from './dto/update-pedra_metal.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PedraMetalService {
  constructor (private readonly prisma: PrismaService){

  }

  create(data: CreatePedraMetalDto) {
    const usuarioCriado = this.prisma.pedra_Metal.create({data});
    return usuarioCriado;
  }

  findAll() {
    const usuarios = this.prisma.pedra_Metal.findMany()
    return usuarios
  }

  findOne(id: number) {
    const usuario = this.prisma.pedra_Metal.findUnique({ where: {id} })
    return usuario
  }

  update(id: number, updatePedraMetalDto: UpdatePedraMetalDto) {
    const usuario = this.prisma.pedra_Metal.update({
      where: {id},
      data: updatePedraMetalDto,
    })
    return usuario
  }

  async remove(id: number) {
    await this.prisma.pedra_Metal.delete({where:{id}})
    return "Pedra/Metal removido com sucesso!"
  }
}
