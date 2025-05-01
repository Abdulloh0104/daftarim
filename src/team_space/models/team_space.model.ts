import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { WorkSpace } from "../../work-space/models/work-space.model";
import { User } from "../../user/models/user.model";
import { Permission } from "../../permission/models/permission.model";

interface ITeamSpaceCreationAttr {
  name: string;
  description: string;
  icon: string;
  workspaceId: number;
  created_by: number;
  permissionId: number;
}

@Table({ tableName: "teamspace", timestamps: false })
export class TeamSpace extends Model<TeamSpace, ITeamSpaceCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({
    example: "team space name",
    description: "about name",
  })
  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @ApiProperty({
    example: "team space info",
    description: "extra info",
  })
  @Column({
    type: DataType.STRING,
  })
  declare description: string;

  @ApiProperty({
    example: "logo",
    description: "logo linki",
  })
  @Column({
    type: DataType.STRING,
  })
  declare icon: string;

  @ApiProperty({
    example: "2",
    description: "WorkSpace id raqami",
  })
  @ForeignKey(() => WorkSpace)
  @Column({
    type: DataType.INTEGER,
    onDelete: "SET NULL",
  })
  declare workspaceId: number;

  @BelongsTo(() => WorkSpace)
  workspace: WorkSpace;

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

  @ApiProperty({
    example: "5",
    description: "permission id raqami",
  })
  @ForeignKey(() => Permission)
  @Column({
    type: DataType.INTEGER,
    onDelete: "SET NULL",
  })
  declare permissionId: number;

  @BelongsTo(() => Permission, {
    foreignKey: "created_by",
  })
  permission: number;
}
