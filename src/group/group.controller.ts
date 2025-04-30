import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { GroupService } from "./group.service";
import { CreateGroupDto } from "./dto/create-group.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("group")
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  @UseInterceptors(FileInterceptor("icon"))
  create(@Body() createGroupDto: CreateGroupDto,
  @UploadedFile() icon: any) {
    return this.groupService.create(createGroupDto,icon);
  }

  @Get()
  findAll() {
    return this.groupService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.groupService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupService.update(+id, updateGroupDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.groupService.remove(+id);
  }
}
