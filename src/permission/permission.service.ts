import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Permission } from './models/permission.model';

@Injectable()
export class PermissionService {
  constructor(
    @InjectModel(Permission) private permissionModel: typeof Permission
  ) {}

  create(createPermissionDto: CreatePermissionDto) {
    return this.permissionModel.create(createPermissionDto);
  }

  findAll() {
    return this.permissionModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.permissionModel.findByPk(id);
  }

  async update(id: number, updatePermissionDto: UpdatePermissionDto) {
    const updated = await this.permissionModel.update(updatePermissionDto, {
      where: { id },
      returning: true,
    });
    return updated[1][0];
  }

  async remove(id: number) {
    const one = await this.permissionModel.destroy({ where: { id } });
    if (one > 0) {
      return { message: `${id}-permission saccessfully deleted` };
    }
    return { message: `Permission was not found` };
  }
}
