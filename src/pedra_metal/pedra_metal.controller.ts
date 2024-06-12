import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedraMetalService } from './pedra_metal.service';
import { CreatePedraMetalDto } from './dto/create-pedra_metal.dto';
import { UpdatePedraMetalDto } from './dto/update-pedra_metal.dto';

@Controller('pedra-metal')
export class PedraMetalController {
  constructor(private readonly pedraMetalService: PedraMetalService) {}

  @Post()
  create(@Body() createPedraMetalDto: CreatePedraMetalDto) {
    return this.pedraMetalService.create(createPedraMetalDto);
  }

  @Get()
  findAll() {
    return this.pedraMetalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedraMetalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePedraMetalDto: UpdatePedraMetalDto) {
    return this.pedraMetalService.update(+id, updatePedraMetalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedraMetalService.remove(+id);
  }
}
