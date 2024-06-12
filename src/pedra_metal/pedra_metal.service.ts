import { Injectable } from '@nestjs/common';
import { CreatePedraMetalDto } from './dto/create-pedra_metal.dto';
import { UpdatePedraMetalDto } from './dto/update-pedra_metal.dto';

@Injectable()
export class PedraMetalService {
  create(createPedraMetalDto: CreatePedraMetalDto) {
    return 'This action adds a new pedraMetal';
  }

  findAll() {
    return `This action returns all pedraMetal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pedraMetal`;
  }

  update(id: number, updatePedraMetalDto: UpdatePedraMetalDto) {
    return `This action updates a #${id} pedraMetal`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedraMetal`;
  }
}
