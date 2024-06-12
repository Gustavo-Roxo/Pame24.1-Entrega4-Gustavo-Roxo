import { PartialType } from '@nestjs/mapped-types';
import { CreatePedraMetalDto } from './create-pedra_metal.dto';

export class UpdatePedraMetalDto extends PartialType(CreatePedraMetalDto) {}
