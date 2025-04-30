import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../../user/models/user.model";

interface IWorkSpaceCreationAttr {
  name: string;
  icon: string;
  created_by: number;
  category: string;
  management: string;
}

@Table({ tableName: "workspace", timestamps: false })
export class WorkSpace extends Model<WorkSpace, IWorkSpaceCreationAttr> {
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
    example: "Kategoriya nomi",
    description: "category info",
  })
  @Column({
    type: DataType.ENUM,
    values: ["work", "personal life", "education"],
  })
  declare category: string;

  @ApiProperty({
    example: "management nomi",
    description: "management info",
  })
  @Column({
    type: DataType.ENUM,
    values: ["with team", "own"],
  })
  declare management: string;

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
