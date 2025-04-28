import { Injectable } from "@nestjs/common";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Role } from "./models/role.model";

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role) private readonly roleModel: typeof Role) {}

  create(createRoleDto: CreateRoleDto) {
    return this.roleModel.create({
      ...createRoleDto,
      value: createRoleDto.value.toUpperCase(),
    });
  }

  findAll() {
    return this.roleModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.roleModel.findByPk(id);
  }

  findByValue(value: string) {
    return this.roleModel.findOne({ where: { value: value.toUpperCase() } });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto): Promise<Role | null> {
    const updatedRole = await this.roleModel.update(updateRoleDto, {
      where: { id },
      returning: true,
    });
    return updatedRole[1][0];
  }

  async remove(id: number) {
    const deletedRole = await this.roleModel.destroy({ where: { id } });
    if (deletedRole > 0) {
      return { message: "Role o'chirildi" };
    }
    return "Bunday role mavjud emas";
  }
}
