import { Injectable } from '@nestjs/common';
import { CreateEncomendaDto } from './dto/create-encomenda.dto';
import { UpdateEncomendaDto } from './dto/update-encomenda.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EncomendaService {
  constructor (private readonly prisma:PrismaService){

  }

  create(data: CreateEncomendaDto) {
    const usuarioCriado = this.prisma.encomenda.create({data});
    return usuarioCriado;
  }

  findAll() {
    const usuarios = this.prisma.encomenda.findMany()
    return usuarios
  }

  findOne(id: number) {
    const usuario = this.prisma.encomenda.findUnique({ where: {id} })
    return usuario
  }

  update(id: number, updateEncomendaD: UpdateEncomendaDto) {
    const usuario = this.prisma.encomenda.update({
      where: {id},
      data: updateEncomendaD,
    })
    return usuario
  }

  async remove(id: number) {
    await this.prisma.encomenda.delete({where:{id}})
    return "Encomenda removida com sucesso!"
  }
}
