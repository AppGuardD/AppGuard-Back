import { Table, Column, Model, DataType, AllowNull } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "favorites",
})
export class Favorite extends Model {
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  idFavorite!: number;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  idActivity!: number;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  idUser!: number;
}
