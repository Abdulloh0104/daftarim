import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { WorkSpaceService } from './work-space.service';
import { CreateWorkSpaceDto } from './dto/create-work-space.dto';
import { UpdateWorkSpaceDto } from './dto/update-work-space.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller("work-space")
export class WorkSpaceController {
  constructor(private readonly workSpaceService: WorkSpaceService) {}

  @Post()
  @UseInterceptors(FileInterceptor("icon"))
  create(
    @Body() createWorkSpaceDto: CreateWorkSpaceDto,
    @UploadedFile() icon: any
  ) {
    return this.workSpaceService.create(createWorkSpaceDto, icon);
  }

  @Get()
  findAll() {
    return this.workSpaceService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.workSpaceService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateWorkSpaceDto: UpdateWorkSpaceDto
  ) {
    return this.workSpaceService.update(+id, updateWorkSpaceDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.workSpaceService.remove(+id);
  }
}
