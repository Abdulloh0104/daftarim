import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlockPropertyService } from './block-property.service';
import { CreateBlockPropertyDto } from './dto/create-block-property.dto';
import { UpdateBlockPropertyDto } from './dto/update-block-property.dto';

@Controller('block-property')
export class BlockPropertyController {
  constructor(private readonly blockPropertyService: BlockPropertyService) {}

  @Post()
  create(@Body() createBlockPropertyDto: CreateBlockPropertyDto) {
    return this.blockPropertyService.create(createBlockPropertyDto);
  }

  @Get()
  findAll() {
    return this.blockPropertyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blockPropertyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlockPropertyDto: UpdateBlockPropertyDto) {
    return this.blockPropertyService.update(+id, updateBlockPropertyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blockPropertyService.remove(+id);
  }
}
