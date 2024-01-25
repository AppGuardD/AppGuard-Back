import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "reviewactivitys",
})
export class Reviewactivitys extends Model {
  @Column({
    type: DataType.INTEGER,
    validate: {
      min: 1,
      max: 5,
    },
    allowNull: false,
  })
  qualification!: number;

  @Column({
    type: DataType.INTEGER,
  })
  idUsuario!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idActivity!: number;

  @Column({ type: DataType.STRING, allowNull: true })
  comment!: string;
}
