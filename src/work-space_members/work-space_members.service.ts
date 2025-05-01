import { Injectable } from "@nestjs/common";
import { CreateWorkSpaceMemberDto } from "./dto/create-work-space_member.dto";
import { UpdateWorkSpaceMemberDto } from "./dto/update-work-space_member.dto";
import { InjectModel } from "@nestjs/sequelize";
import { WorkSpaceMember } from "./models/work-space_member.model";
import { GroupService } from "../group/group.service";

@Injectable()
export class WorkSpaceMembersService {
  constructor(
    @InjectModel(WorkSpaceMember) private WSMModel: typeof WorkSpaceMember
  ) {}

  create(createWorkSpaceMemberDto: CreateWorkSpaceMemberDto) {
    return this.WSMModel.create(createWorkSpaceMemberDto);
  }

  findAll() {
    return this.WSMModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.WSMModel.findByPk(id);
  }

  update(id: number, updateWorkSpaceMemberDto: UpdateWorkSpaceMemberDto) {
    return this.WSMModel.update(updateWorkSpaceMemberDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    const deleted = await this.WSMModel.destroy({ where: { id } });
    if (deleted > 0) {
      return { message: "WSMember deleted" };
    }
    return "WSMember not found";
  }
}
