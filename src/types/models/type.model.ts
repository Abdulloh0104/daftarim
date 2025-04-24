import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

interface ITypeCreationAttr {
  name: string;
  description: string;
}

@Table({ tableName: "type", timestamps: false })
export class Type extends Model<Type, ITypeCreationAttr> {
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
}
