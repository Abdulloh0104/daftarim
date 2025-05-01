import { Module } from '@nestjs/common';
import { WorkSpaceMembersService } from './work-space_members.service';
import { WorkSpaceMembersController } from './work-space_members.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { WorkSpaceMember } from './models/work-space_member.model';

@Module({
  imports:[SequelizeModule.forFeature([WorkSpaceMember])],
  controllers: [WorkSpaceMembersController],
  providers: [WorkSpaceMembersService],
})
export class WorkSpaceMembersModule {}
