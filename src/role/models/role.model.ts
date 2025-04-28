import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Admin } from "../../admin/models/admin.model";

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

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
  })
  value: string;

  @Column({
    type: DataType.STRING(100),
  })
  description: string;

  @HasMany(() => Admin)
  admins: Admin[];
}
