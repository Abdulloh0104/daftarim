import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "../../user/models/user.model";

interface IDeviceCreationAttr {
  name: string;
  last_active: Date;
  location: string;
  information: string;
  userId: number;
}

@Table({ tableName: "device", timestamps: false })
export class Device extends Model<Device, IDeviceCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({
    example: "Laptop",
    description: "NoteBook",
  })
  @Column({
    type: DataType.STRING(100),
  })
  declare name: string;

  @ApiProperty({
    example: "2025-04-30",
    description: "Oxirgi ishlatilingan sanasi",
  })
  @Column({
    type: DataType.DATEONLY,
  })
  declare last_active: Date;

  @ApiProperty({
    example: "Qurilma manzili",
    description: "Oxirgi ishlatilingan joyi",
  })
  @Column({
    type: DataType.STRING,
  })
  declare location: string;

  @ApiProperty({
    example: "User info",
    description: "User info",
  })
  @Column({
    type: DataType.STRING,
  })
  declare information: string;

  @ApiProperty({
    example: "4",
    description: "User id raqami",
  })
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    onDelete: "SET NULL",
  })
  declare userId: number;

  @BelongsTo(() => User)
  user: User;
}
