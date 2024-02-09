import { Table, Column, Model, DataType, BelongsToMany } from "sequelize-typescript";
import { Mangrullo } from "../mangrullo/mangrullo";
import { FavoriteMangrullo } from "./FavoriteMangrullo";

@Table({
  timestamps: false,
  tableName: "favorites",
})
export class Favorite extends Model {

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  zone!: string; //zona

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      min: {
        args: [1],
        msg: "El valor no puede ser menor que 1",
      },
      max: {
        args: [3],
        msg: "El valor no puede ser mayor que 3",
      },
    },
  })
  dangerousness!: number; //peligrosidad

  @Column({
    type: DataType.ENUM("Activo", "No Activo"),
    allowNull: false,
    defaultValue: "Activo",
  })
  state!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  image!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      min: {
        args: [1],
        msg: "El valor no puede ser menor que 1",
      },
      max: {
        args: [5],
        msg: "El valor no puede ser mayor que 5",
      },
    },
  })
  qualification!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId!: number;

  //Relacionado.
  //relacion mucho a mucho con mangrullo
  @BelongsToMany(() => Mangrullo, () => FavoriteMangrullo)
  mangrullo!: Mangrullo[];
}
