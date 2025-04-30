import { Module } from "@nestjs/common";
import { PropertyModule } from "./property/property.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config";
import { Property } from "./property/models/property.model";
import { BlockModule } from "./block/block.module";
import { Block } from "./block/models/block.model";
import { TypesModule } from "./types/types.module";
import { Types } from "./types/models/type.model";
import { BlockPropertyModule } from "./block-property/block-property.module";
import { BlockProperty } from "./block-property/models/block-property.model";
import { UserModule } from "./user/user.module";
import { User } from "./user/models/user.model";
import { AdminModule } from "./admin/admin.module";
import { AuthModule } from "./auth/auth.module";
import { Admin } from "./admin/models/admin.model";
import { RoleModule } from "./role/role.module";
import { Role } from "./role/models/role.model";
import { FileModule } from "./file/file.module";
import { CommentModule } from "./comment/comment.module";
import { Comment } from "./comment/models/comment.model";
import { DevicesModule } from "./devices/devices.module";
import { Device } from "./devices/models/device.model";
import { GroupModule } from "./group/group.module";
import { Group } from "./group/models/group.model";
import { WorkSpaceModule } from "./work-space/work-space.module";
import { WorkSpace } from "./work-space/models/work-space.model";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [
        Property,
        Block,
        Types,
        BlockProperty,
        User,
        Admin,
        Role,
        Comment,
        Device,
        Group,
        WorkSpace,
      ],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),
    PropertyModule,
    BlockModule,
    TypesModule,
    BlockPropertyModule,
    UserModule,
    AdminModule,
    AuthModule,
    RoleModule,
    FileModule,
    CommentModule,
    DevicesModule,
    GroupModule,
    WorkSpaceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
