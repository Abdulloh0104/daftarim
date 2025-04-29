import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlockPropertyService } from './block-property.service';
import { CreateBlockPropertyDto } from './dto/create-block-property.dto';
import { UpdateBlockPropertyDto } from './dto/update-block-property.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BlockProperty } from './models/block-property.model';

@Controller("block-property")
export class BlockPropertyController {
  constructor(private readonly blockPropertyService: BlockPropertyService) {}

  @ApiOperation({ summary: "CREATE" })
  @ApiResponse({
    status: 200,
    description: "Activation",
    type: BlockProperty,
  })
  @Post()
  create(@Body() createBlockPropertyDto: CreateBlockPropertyDto) {
    return this.blockPropertyService.create(createBlockPropertyDto);
  }

  @ApiOperation({ summary: "GET ALL" })
  @ApiResponse({
    status: 200,
    description: "List of BlockProperty",
    type: [BlockProperty],
  })
  @Get()
  findAll() {
    return this.blockPropertyService.findAll();
  }

  @ApiOperation({ summary: "GET One By Id" })
  @ApiResponse({
    status: 200,
    description: "BlockProperty",
    type: BlockProperty,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.blockPropertyService.findOne(+id);
  }

  @ApiOperation({ summary: "UPDATE" })
  @ApiResponse({
    status: 200,
    description: "Update BlockProperty",
    type: BlockProperty,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateBlockPropertyDto: UpdateBlockPropertyDto
  ) {
    return this.blockPropertyService.update(+id, updateBlockPropertyDto);
  }

  @ApiOperation({ summary: "DELETE" })
  @ApiResponse({
    status: 200,
    description: "Delete BlockProperty",
    type: "Deleted",
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.blockPropertyService.remove(+id);
  }
}
