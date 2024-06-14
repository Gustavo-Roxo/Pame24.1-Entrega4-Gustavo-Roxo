import { Injectable } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FuncionarioService { 
  constructor (private readonly prisma:PrismaService){

  }

  create(data: CreateFuncionarioDto) {
    const usuarioCriado = this.prisma.funcionario.create({data});
    return usuarioCriado;
  }

  findAll() {
    const usuarios = this.prisma.funcionario.findMany()
    return usuarios
  }

  findOne(id: number) {
    const usuario = this.prisma.funcionario.findUnique({ where: {id} })
    return usuario
  }

  update(id: number, updateFuncionarioD: UpdateFuncionarioDto) {
    const usuario = this.prisma.funcionario.update({
      where: {id},
      data: updateFuncionarioD,
    })
    return usuario
  }

  async remove(id: number) {
    await this.prisma.funcionario.delete({where:{id}})
    return "Funcionário removido com sucesso!"
  }
}