import { Injectable } from '@nestjs/common';
import { CreatePeçaDto } from './dto/create-peça.dto';
import { UpdatePeçaDto } from './dto/update-peça.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PeçaService {
  constructor (private readonly prisma:PrismaService){

  }

  create(data: CreatePeçaDto) {
    const usuarioCriado = this.prisma.peca.create({data});
    return usuarioCriado;
  }

  findAll() {
    const usuarios = this.prisma.peca.findMany()
    return usuarios
  }

  findOne(id: number) {
    const usuario = this.prisma.peca.findUnique({ where: {id} })
    return usuario
  }

  update(id: number, updatePeçaDto: UpdatePeçaDto) {
    const usuario = this.prisma.peca.update({
      where: {id},
      data: updatePeçaDto,
    })
    return usuario
  }

  async remove(id: number) {
    await this.prisma.peca.delete({where:{id}})
    return "Peça removida com sucesso!"
  }
}
