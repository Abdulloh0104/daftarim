import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Admin } from "../../admin/models/admin.model";
import { ApiProperty } from "@nestjs/swagger";

interface IRoleCreationAttr {
  value: string;
  description: string;
}

@Table({ tableName: "role", timestamps: false })
export class Role extends Model<Role, IRoleCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({
    example: "user",
    description: "Ro'li",
  })
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
  })
  value: string;

  @ApiProperty({
    example: "user",
    description: "ro'l haqida",
  })
  @Column({
    type: DataType.STRING(100),
  })
  description: string;

  @HasMany(() => Admin)
  admins: Admin[];
}
