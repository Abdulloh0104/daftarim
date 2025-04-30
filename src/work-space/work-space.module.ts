import { Module } from '@nestjs/common';
import { WorkSpaceService } from './work-space.service';
import { WorkSpaceController } from './work-space.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { WorkSpace } from './models/work-space.model';
import { UserModule } from '../user/user.module';
import { FileModule } from '../file/file.module';

@Module({
  imports:[SequelizeModule.forFeature([WorkSpace]),FileModule,UserModule],
  controllers: [WorkSpaceController],
  providers: [WorkSpaceService],
})
export class WorkSpaceModule {}
