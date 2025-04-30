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

interface IGroupCreationAttr {
  name: string;
  icon: string;
  description: string;
  created_by: number;
}

@Table({ tableName: "group", timestamps: false })
export class Group extends Model<Group, IGroupCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({
    example: "N18",
    description: "H. M. team",
  })
  @Column({
    type: DataType.STRING(100),
  })
  declare name: string;

  @ApiProperty({
    example: "Apple logo",
    description: "Team logo",
  })
  @Column({
    type: DataType.STRING,
  })
  declare icon: string;

  @ApiProperty({
    example: "O'qing bolalar",
    description: "extra info",
  })
  @Column({
    type: DataType.TEXT,
  })
  declare description: string;

  @ApiProperty({
    example: "4",
    description: "User id raqami",
  })
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    onDelete: "SET NULL",
  })
  declare created_by: number;

  @BelongsTo(() => User, {
    foreignKey: "created_by",
  })
  creator: User;
}
