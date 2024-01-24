import { Table, Model, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { Activity } from "../activity/activity";
import { ActivityMangrullo } from "../activity/ActivityMangrullo";

@Table({
  timestamps: false,
  tableName: "mangrullos",
})
export class Mangrullo extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
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

  @BelongsToMany(() => Activity, () => ActivityMangrullo)
  activity!: Activity[];
}
