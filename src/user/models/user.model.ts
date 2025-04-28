import {Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Block } from "../../block/models/block.model";

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
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(100),
  })
  declare first_name: string;

  @Column({
    type: DataType.STRING(100),
  })
  declare last_name: string;

  @Column({
    type: DataType.STRING(100),
    unique: true,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
  })
  declare password: string;

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

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @HasMany(() => Block)
  bloocks: Block[];
}
