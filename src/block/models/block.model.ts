import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Property } from "../../property/models/property.model";
import { BlockProperty } from "../../block-property/models/block-property.model";
import { Types } from "../../types/models/type.model";
import { User } from "../../user/models/user.model";
import { ApiProperty } from "@nestjs/swagger";
import { Comment } from "../../comment/models/comment.model";

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

  @ApiProperty({
    example: 1,
    description: "user id",
  })
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

  @ApiProperty({
    example: 1,
    description: "type id",
  })
  @ForeignKey(() => Types)
  @Column({
    type: DataType.INTEGER,
    onDelete: "SET NULL",
  })
  typeId: number;

  @BelongsTo(() => Types)
  type: Types

  @ApiProperty({
    example: 1,
    description: "Block id",
  })
  @ForeignKey(() => Block)
  @Column({
    type: DataType.INTEGER,
    onDelete: "SET NULL",
  })
  parentId: number;

  @BelongsTo(() => Block)
  parent_category: Block;

  @ApiProperty({
    example: 1,
    description: "order id",
  })
  @Column({
    type: DataType.INTEGER,
  })
  order_index: number;

   @HasMany(() => Comment)
    admins: Comment[];
}
