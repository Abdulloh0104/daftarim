import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkSpaceMembersService } from './work-space_members.service';
import { CreateWorkSpaceMemberDto } from './dto/create-work-space_member.dto';
import { UpdateWorkSpaceMemberDto } from './dto/update-work-space_member.dto';

@Controller('work-space-members')
export class WorkSpaceMembersController {
  constructor(private readonly workSpaceMembersService: WorkSpaceMembersService) {}

  @Post()
  create(@Body() createWorkSpaceMemberDto: CreateWorkSpaceMemberDto) {
    return this.workSpaceMembersService.create(createWorkSpaceMemberDto);
  }

  @Get()
  findAll() {
    return this.workSpaceMembersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workSpaceMembersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkSpaceMemberDto: UpdateWorkSpaceMemberDto) {
    return this.workSpaceMembersService.update(+id, updateWorkSpaceMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workSpaceMembersService.remove(+id);
  }
}
