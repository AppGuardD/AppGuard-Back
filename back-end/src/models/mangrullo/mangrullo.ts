import { Table, Model, Column, DataType, BelongsToMany, HasMany } from "sequelize-typescript";

import { Activity } from "../activity/activity";
import { ActivityMangrullo } from "../activity/ActivityMangrullo";
import { ReviewMangrullo } from "../reviewMangrullo/reviewMangrullo";
import { Advice } from "../advice/advice";
import { Favorite } from "../favorite/favorite";
import { FavoriteMangrullo } from "../favorite/FavoriteMangrullo";

@Table({
  timestamps: false,
  tableName: "mangrullos",
})

export class Mangrullo extends Model {
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

  //Relacionado.
  //relacion mucho a mucho mangrullo activity
  @BelongsToMany(() => Activity, () => ActivityMangrullo)
  activity!: Activity[];

  //Relacionado
  //relacion mucho a mucho mangrullo con favorite.
  @BelongsToMany(() => Favorite, () => FavoriteMangrullo)
  favorite!: Favorite[];

  //Relacionado.
  //relacion un mangrullo que puede tener muchos reviewMangrullo.
  @HasMany(() => ReviewMangrullo)
  reviewMangrullo!: ReviewMangrullo[];
}
