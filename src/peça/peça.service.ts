import { Injectable } from '@nestjs/common';
import { CreatePeçaDto } from './dto/create-peça.dto';
import { UpdatePeçaDto } from './dto/update-peça.dto';

@Injectable()
export class PeçaService {
  create(createPeçaDto: CreatePeçaDto) {
    return 'This action adds a new peça';
  }

  findAll() {
    return `This action returns all peça`;
  }

  findOne(id: number) {
    return `This action returns a #${id} peça`;
  }

  update(id: number, updatePeçaDto: UpdatePeçaDto) {
    return `This action updates a #${id} peça`;
  }

  remove(id: number) {
    return `This action removes a #${id} peça`;
  }
}
