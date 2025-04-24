import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import { Block } from "../../block/models/block.model";
import { BlockProperty } from "../../block-property/models/block-property.model";

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

  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
  })
  declare description: string;

  @BelongsToMany(() => Block, () => BlockProperty)
    blocks: Block[];
}
