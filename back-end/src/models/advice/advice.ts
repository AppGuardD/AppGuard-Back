import { Table, Column, Model, DataType, AllowNull } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "advices",
})
export class Advices extends Model {
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  comment!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  image!: string;

  @Column({
    type: DataType.NUMBER,
    validate: {
      min: 1,
      max: 5,
    },
    allowNull: false,
  })
  gravity!: number;
}
