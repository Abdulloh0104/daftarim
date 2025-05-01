import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../../user/models/user.model";
import { WorkSpace } from "../../work-space/models/work-space.model";


interface IWorkSpaceMemberCreationAttr {
    userId: number;
    workspaceId: number;
}


@Table({ tableName: "workspace_member", timestamps: false })
export class WorkSpaceMember extends Model<
  WorkSpaceMember,
  IWorkSpaceMemberCreationAttr
> {
  @ApiProperty({
    example: "false",
    description: "is user or admin",
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare is_admin: boolean;

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
}
