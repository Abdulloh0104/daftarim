import { Module } from "@nestjs/common";
import { GroupService } from "./group.service";
import { GroupController } from "./group.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Group } from "./models/group.model";
import { FileModule } from "../file/file.module";
import { UserModule } from "../user/user.module";

@Module({
  imports: [SequelizeModule.forFeature([Group]), FileModule,
UserModule],
  controllers: [GroupController],
  providers: [GroupService],
  exports:[GroupService]
})
export class GroupModule {}
