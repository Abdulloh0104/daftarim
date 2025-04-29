import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlockService } from './block.service';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Block } from './models/block.model';

@Controller("block")
export class BlockController {
  constructor(private readonly blockService: BlockService) {}

  @ApiOperation({ summary: "CREATE" })
  @ApiResponse({
    status: 200,
    description: "Activation",
    type: Block,
  })
  @Post()
  create(@Body() createBlockDto: CreateBlockDto) {
    return this.blockService.create(createBlockDto);
  }

  @ApiOperation({ summary: "GET ALL" })
  @ApiResponse({
    status: 200,
    description: "List of Blocks",
    type: [Block],
  })
  @Get()
  findAll() {
    return this.blockService.findAll();
  }

  @ApiOperation({ summary: "GET One By Id" })
  @ApiResponse({
    status: 200,
    description: "Block",
    type: Block,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.blockService.findOne(+id);
  }

  @ApiOperation({ summary: "UPDATE" })
  @ApiResponse({
    status: 200,
    description: "Update ",
    type: Block,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateBlockDto: UpdateBlockDto) {
    return this.blockService.update(+id, updateBlockDto);
  }

  @ApiOperation({ summary: "DELETE" })
  @ApiResponse({
    status: 200,
    description: "Delete Block",
    type: "Deleted",
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.blockService.remove(+id);
  }
}
