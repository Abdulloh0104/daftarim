import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateWorkSpaceDto } from './dto/create-work-space.dto';
import { UpdateWorkSpaceDto } from './dto/update-work-space.dto';
import { InjectModel } from '@nestjs/sequelize';
import { WorkSpace } from './models/work-space.model';
import { FileService } from '../file/file.service';
import { UserService } from '../user/user.service';

@Injectable()
export class WorkSpaceService {
  constructor(
    @InjectModel(WorkSpace) private workSpaceModel: typeof WorkSpace,
    private readonly fileService: FileService,
    private readonly userService: UserService
  ) {}

  async create(createWorkSpaceDto: CreateWorkSpaceDto, icon: any) {
    const { created_by } = createWorkSpaceDto;
    const user = await this.userService.findOne(created_by);
    if (!user) {
      throw new BadRequestException("Bunday user mavjud emas");
    }
    const fileName = await this.fileService.saveFile(icon);
    return this.workSpaceModel.create({
      ...createWorkSpaceDto,
      icon: fileName,
    });
  }

  findAll() {
    return this.workSpaceModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.workSpaceModel.findByPk(id);
  }

  async update(id: number, updateWorkSpaceDto: UpdateWorkSpaceDto) {
    const updated = await this.workSpaceModel.update(updateWorkSpaceDto, {
      where: { id },
      returning: true,
    });
    return updated;
  }

  async remove(id: number) {
    const deleted = await this.workSpaceModel.destroy({ where: { id } });
    if (deleted > 0) {
      return { message: "WorkSpace deleted" };
    }
    return "WorkSpace not found";
  }
}
