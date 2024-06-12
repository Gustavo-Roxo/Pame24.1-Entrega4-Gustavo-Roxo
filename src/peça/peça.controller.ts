import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeçaService } from './peça.service';
import { CreatePeçaDto } from './dto/create-peça.dto';
import { UpdatePeçaDto } from './dto/update-peça.dto';

@Controller('peça')
export class PeçaController {
  constructor(private readonly peçaService: PeçaService) {}

  @Post()
  create(@Body() createPeçaDto: CreatePeçaDto) {
    return this.peçaService.create(createPeçaDto);
  }

  @Get()
  findAll() {
    return this.peçaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peçaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePeçaDto: UpdatePeçaDto) {
    return this.peçaService.update(+id, updatePeçaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peçaService.remove(+id);
  }
}
