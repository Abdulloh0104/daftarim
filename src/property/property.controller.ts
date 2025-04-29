import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Property } from './models/property.model';
import { Type } from 'class-transformer';
import { Types } from '../types/models/type.model';

@Controller("property")
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @ApiOperation({ summary: "CREATE" })
  @ApiResponse({
    status: 200,
    description: "Activation",
    type: Property,
  })
  @Post()
  create(@Body() createPropertyDto: CreatePropertyDto) {
    return this.propertyService.create(createPropertyDto);
  }

  @ApiOperation({ summary: "CREATE" })
  @ApiResponse({
    status: 200,
    description: "Activation",
    type: Property,
  })
  @ApiOperation({ summary: "GET ALL" })
  @ApiResponse({
    status: 200,
    description: "List of Properties",
    type: [Property],
  })
  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @ApiOperation({ summary: "GET One By Id" })
  @ApiResponse({
    status: 200,
    description: "Property",
    type: Property,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.propertyService.findOne(+id);
  }

  @ApiOperation({ summary: "UPDATE" })
  @ApiResponse({
    status: 200,
    description: "Update user",
    type: Types,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updatePropertyDto: UpdatePropertyDto
  ) {
    return this.propertyService.update(+id, updatePropertyDto);
  }

  @ApiOperation({ summary: "DELETE" })
  @ApiResponse({
    status: 200,
    description: "Property",
    type: "Deleted",
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.propertyService.remove(+id);
  }
}
