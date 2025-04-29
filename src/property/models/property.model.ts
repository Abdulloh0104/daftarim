import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import { Block } from "../../block/models/block.model";
import { BlockProperty } from "../../block-property/models/block-property.model";
import { ApiProperty } from "@nestjs/swagger";

interface IPropertyCreationAttr {
  name: string;
  description: string;
}

@Table({ tableName: "property", timestamps: false })
export class Property extends Model<Property, IPropertyCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({
    example: "BLOCK-property",
    description: "BLOCK-property",
  })
  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @ApiProperty({
    example: "BLOCK-property",
    description: "BLOCK-property",
  })
  @Column({
    type: DataType.STRING,
  })
  declare description: string;

  @BelongsToMany(() => Block, () => BlockProperty)
  blocks: Block[];
}
