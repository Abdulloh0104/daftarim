import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { TeamSpace } from "../../team_space/models/team_space.model";

interface IPermissionCreationAttr {
  name: string;
  description: string;
  label:string
}


@Table({ tableName: "permission", timestamps: false })
export class Permission extends Model<Permission, IPermissionCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({
    example: "Permission name",
    description: "Fully allowed",
  })
  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @ApiProperty({
    example: "information",
    description: "extra info",
  })
  @Column({
    type: DataType.TEXT,
  })
  declare description: string;

  @ApiProperty({
    example: "third",
    description: "level info",
  })
  @Column({
    type: DataType.STRING,
  })
  declare label: string;

  @HasMany(() => TeamSpace)
    teamspace: TeamSpace[];
}
