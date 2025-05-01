import { Module } from '@nestjs/common';
import { TeamSpaceService } from './team_space.service';
import { TeamSpaceController } from './team_space.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TeamSpace } from './models/team_space.model';

@Module({
  imports:[SequelizeModule.forFeature([TeamSpace])],
  controllers: [TeamSpaceController],
  providers: [TeamSpaceService],
})
export class TeamSpaceModule {}
