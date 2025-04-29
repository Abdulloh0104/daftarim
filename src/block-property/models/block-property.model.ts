import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Block } from "../../block/models/block.model";
import { Property } from "../../property/models/property.model";
import { ApiProperty } from "@nestjs/swagger";

interface IBlockPropertyCreationAttr {
  33
}

@Table({ tableName: "block-property" })
export class BlockProperty extends Model<
  BlockProperty,
  IBlockPropertyCreationAttr
> {
  @Column({ type: DataType.STRING })
  value: string;

  @ForeignKey(() => Block)
  @ApiProperty({
    example: "1",
    description: "block id",
  })
  @Column({ type: DataType.INTEGER })
  blockId: number;

  @ForeignKey(() => Property)
  @ApiProperty({
    example: "3",
    description: "property id",
  })
  @Column({ type: DataType.INTEGER })
  propertyId: number;

  @BelongsTo(() => Block)
  block: Block;

  @BelongsTo(() => Property)
  property: Property;
}
