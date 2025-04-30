import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateGroupDto } from "./dto/create-group.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Group } from "./models/group.model";
import { FileService } from "../file/file.service";
import { UserService } from "../user/user.service";

@Injectable()
export class GroupService {
  constructor(
    @InjectModel(Group) private groupModel: typeof Group,
    private readonly fileService: FileService,
    private readonly userService:UserService
  ) {}
  async create(createGroupDto: CreateGroupDto, icon: any) {
    const { created_by } = createGroupDto;
    const user = await this.userService.findOne(created_by)
    if (!user) {
      throw new BadRequestException("Bunday user mavjud emas");
    }
    const fileName = await this.fileService.saveFile(icon);
    return this.groupModel.create({...createGroupDto,icon:fileName});
  }

  findAll() {
    return this.groupModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.groupModel.findByPk(id);
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    const updated = await this.groupModel.update(updateGroupDto, {
      where: { id },
      returning: true,
    });
    return updated;
  }

  async remove(id: number) {
    const deleted = await this.groupModel.destroy({ where: { id } });
    if (deleted > 0) {
      return { message: "Group deleted" };
    }
    return "Group not found";
  }
}
