import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateGroupMemberDto } from "./dto/create-group_member.dto";
import { UpdateGroupMemberDto } from "./dto/update-group_member.dto";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "../user/models/user.model";
import { GroupService } from "../group/group.service";
import { GroupMember } from "./models/group_member.model";
import { UserService } from "../user/user.service";

@Injectable()
export class GroupMembersService {
  constructor(
    @InjectModel(GroupMember) private readonly groupMemberModel: typeof GroupMember,
    private readonly groupService: GroupService,
    private readonly userService: UserService
  ) {}
  async create(createGroupMemberDto: CreateGroupMemberDto) {
    const group = await this.groupService.findOne(
      Number(createGroupMemberDto.groupId)
    );
    const user = await this.userService.findOne(
      Number(createGroupMemberDto.userId)
    );
    if (!group) {
      throw new NotFoundException("Bunday group topilmadi");
    }
    if (!user) {
      throw new NotFoundException("Bunday user topilmadi");
    }
    const newGM = await this.groupMemberModel.create(createGroupMemberDto)
    return newGM;
  }

  findAll() {
    return this.groupMemberModel.findAll({include:{all:true}})
  }

  findOne(id: number) {
    return this.groupMemberModel.findByPk(id)
  }

  update(id: number, updateGroupMemberDto: UpdateGroupMemberDto) {
    return this.groupMemberModel.update(updateGroupMemberDto,{where:{id},returning:true})
  }

 async remove(id: number) {
    const newGM = await this.groupMemberModel.destroy({ where: { id } });
    if (newGM > 0) {
      return { message: "groupMember seccessfully deleted" };
    }
    return { message: "groupMember not found" };
  }
}
