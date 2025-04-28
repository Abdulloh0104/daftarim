import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Property } from "../../property/models/property.model";
import { BlockProperty } from "../../block-property/models/block-property.model";
import { Type } from "../../types/models/type.model";
import { User } from "../../user/models/user.model";

interface IBlockCreationAttr {
  typeId: number;
  created_by: number;
  parentId: number;
  order_index: number;
}

@Table({ tableName: "block", timestamps: false })
export class Block extends Model<Block, IBlockCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    onDelete: "SET NULL",
  })
  created_by: number;

  @BelongsTo(() => User, { foreignKey: "created_by" })
  user: User;

  @BelongsToMany(() => Property, () => BlockProperty)
  properties: Property[];

  @ForeignKey(() => Type)
  @Column({
    type: DataType.INTEGER,
    onDelete: "SET NULL",
  })
  typeId: number;

  @BelongsTo(() => Type)
  type: Type;

  @ForeignKey(() => Block)
  @Column({
    type: DataType.INTEGER,
    onDelete: "SET NULL",
  })
  parentId: number;

  @BelongsTo(() => Block)
  parent_category: Block;

  @Column({
    type: DataType.INTEGER,
  })
  order_index: number;
}
