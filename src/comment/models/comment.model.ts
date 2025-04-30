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
import { Block } from "../../block/models/block.model";

interface ICommentCreationAttr {
  content: string;
  userId: number;
  blockId: number;
}

@Table({ tableName: "comment", timestamps: false })
export class Comment extends Model<Comment, ICommentCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({
    example: "Hi",
    description: "Contentmatni",
  })
  @Column({
    type: DataType.STRING(100),
  })
  declare content: string;

  @ApiProperty({
    example: "false",
    description: "Tahrirlanganmi",
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare is_edited: boolean;

  @ApiProperty({
    example: "2",
    description: "Foydalanuvchi id raqami",
  })
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    onDelete: "SET NULL",
  })
  declare userId: number;

  @BelongsTo(() => User)
  role: User;

  @ApiProperty({
    example: "4",
    description: "Block id raqami",
  })
  @ForeignKey(() => Block)
  @Column({
    type: DataType.INTEGER,
    onDelete: "SET NULL",
  })
  declare blockId: number;

  @BelongsTo(() => Block)
  block: Block;
}
