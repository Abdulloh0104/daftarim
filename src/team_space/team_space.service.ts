import { Injectable } from '@nestjs/common';
import { CreateTeamSpaceDto } from './dto/create-team_space.dto';
import { UpdateTeamSpaceDto } from './dto/update-team_space.dto';
import { InjectModel } from '@nestjs/sequelize';
import { TeamSpace } from './models/team_space.model';

@Injectable()
export class TeamSpaceService {
  constructor(
    @InjectModel(TeamSpace) private teamSpaceModel: typeof TeamSpace
  ) {}

  create(createTeamSpaceDto: CreateTeamSpaceDto) {
    return this.teamSpaceModel.create(createTeamSpaceDto);
  }

  findAll() {
    return this.teamSpaceModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.teamSpaceModel.findByPk(id);
  }

  async update(id: number, updateTeamSpaceDto: UpdateTeamSpaceDto) {
    const updated = await this.teamSpaceModel.update(updateTeamSpaceDto, {
      where: { id },
      returning: true,
    });
    return updated[1][0];
  }

  async remove(id: number) {
    const one = await this.teamSpaceModel.destroy({ where: { id } });
    if (one > 0) {
      return { message: `${id}-permission saccessfully deleted` };
    }
    return { message: `Permission was not found` };
  }
}
