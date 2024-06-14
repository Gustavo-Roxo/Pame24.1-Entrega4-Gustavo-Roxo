import { Injectable } from '@nestjs/common';
import { CreateRegistroDto } from './dto/create-registro.dto';
import { UpdateRegistroDto } from './dto/update-registro.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RegistroService {
  constructor (private readonly prisma: PrismaService){

  }

  create(data: CreateRegistroDto) {
    const usuarioCriado = this.prisma.registro.create({data});
    return usuarioCriado;
  }

  findAll() {
    const usuarios = this.prisma.registro.findMany()
    return usuarios
  }

  findOne(id: number) {
    const usuario = this.prisma.registro.findUnique({ where: {id} })
    return usuario
  }

  update(id: number, updateRegistroDto: UpdateRegistroDto) {
    const usuario = this.prisma.registro.update({
      where: {id},
      data: updateRegistroDto,
    })
    return usuario
  }

  async remove(id: number) {
    await this.prisma.registro.delete({where:{id}})
    return "Registro removido com sucesso!"
  }
}
