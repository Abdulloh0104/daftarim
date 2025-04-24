import { PartialType } from '@nestjs/mapped-types';
import { CreateBlockPropertyDto } from './create-block-property.dto';

export class UpdateBlockPropertyDto extends PartialType(CreateBlockPropertyDto) {}
