import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Activity } from "../activity/activity";
import { User } from "../user/user";

@Table({
  timestamps: false,
  tableName: "reviewactivities",
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
    type: DataType.STRING,
    allowNull: true
  })
  comment!: string;

  //Relacionado.
  //Relacion reviewActivity y Activity
  @ForeignKey(() => Activity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  activityId!: number
  //un reviewActivity pertenece a un solo activity.
  @BelongsTo(() => Activity)
  activity!: Activity[];


  //Relacionado.
  //Relacion reviewActivity y User
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  userId!: number
  //un reviewActivity pertenece a un solo user.
  @BelongsTo(() => User)
  user!: User[];
}
