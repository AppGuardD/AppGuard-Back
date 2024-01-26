import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Activity } from "../activity/activity";

@Table({
  timestamps: false,
  tableName: "reviewactivitys",
})

export class ReviewActivity extends Model {

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
    type: DataType.ENUM("Activo", "No Activo"),
    allowNull: false,
  })
  state!: string;

  @Column({
    type: DataType.INTEGER,
  })
  idUsuario!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idActivity!: number;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  comment!: string;

  //Relacion reviewActivity y Activity
  @ForeignKey(() => Activity)
  activityId!: number
  //un reviewActivity pertenece a un solo activity.
  @BelongsTo(() => Activity)
  activity!: Activity[];
}
