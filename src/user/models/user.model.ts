import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Block } from "../../block/models/block.model";
import { ApiProperty } from "@nestjs/swagger";
import { Comment } from "../../comment/models/comment.model";
import { Device } from "../../devices/models/device.model";
import { Group } from "../../group/models/group.model";
import { WorkSpace } from "../../work-space/models/work-space.model";

interface IUserCreationAttr {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  photo: string;
  refresh_token: string;
  activation_link: string;
}

@Table({ tableName: "user", timestamps: false })
export class User extends Model<User, IUserCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "Foydalanuvchi unical id raqami",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({
    example: "user1",
    description: "Foydalanuvchi ismi",
  })
  @Column({
    type: DataType.STRING(100),
  })
  declare first_name: string;

  @ApiProperty({
    example: "user1",
    description: "Foydalanuvchi familiyasi",
  })
  @Column({
    type: DataType.STRING(100),
  })
  declare last_name: string;

  @ApiProperty({
    example: "user1@mail.uz",
    description: "Foydalanuvchi emaili",
  })
  @Column({
    type: DataType.STRING(100),
    unique: true,
  })
  declare email: string;

  @ApiProperty({
    example: "qwerty",
    description: "Foydalanuvchi paroli",
  })
  @Column({
    type: DataType.STRING,
  })
  declare password: string;

  @ApiProperty({
    example: "false",
    description: "Foydalanuvchi photosi",
  })
  @Column({
    type: DataType.STRING(100),
  })
  declare photo: string;

  @Column({
    type: DataType.STRING(100),
  })
  declare refresh_token: string;

  @Column({
    type: DataType.STRING(100),
  })
  declare activation_link: string;

  @ApiProperty({
    example: "false",
    description: "Foydalanuvchi faolligiligi",
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @HasMany(() => Block)
  blocks: Block[];

  @HasMany(() => Comment)
  comment: Comment[];

  @HasMany(() => Device)
  device: Device[];

  @HasMany(() => Group)
  group: Group[];

  @HasMany(() => WorkSpace)
  workspace: WorkSpace[];
}
