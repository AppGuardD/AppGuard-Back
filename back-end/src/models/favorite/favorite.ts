import { Table, Column, Model, DataType, AllowNull } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "favorites",
})
export class Favorite extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idActivity!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idUser!: number;
}
