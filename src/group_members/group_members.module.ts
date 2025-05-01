import { Module } from '@nestjs/common';
import { GroupMembersService } from './group_members.service';
import { GroupMembersController } from './group_members.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { GroupMember } from './models/group_member.model';
import { UserModule } from '../user/user.module';
import { GroupModule } from '../group/group.module';

@Module({
  imports:[SequelizeModule.forFeature([GroupMember]),UserModule,GroupModule],
  controllers: [GroupMembersController],
  providers: [GroupMembersService],
})
export class GroupMembersModule {}
