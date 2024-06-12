import { PartialType } from '@nestjs/mapped-types';
import { CreatePeçaDto } from './create-peça.dto';

export class UpdatePeçaDto extends PartialType(CreatePeçaDto) {}
