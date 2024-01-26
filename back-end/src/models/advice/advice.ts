import { Table, Column, Model, DataType, AllowNull, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Mangrullo } from "../mangrullo/mangrullo";
import { Activity } from "../activity/activity";

@Table({
  timestamps: false,
  tableName: "advices",
})
export class Advice extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

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
    type: DataType.INTEGER,
    validate: {
      min: 1,
      max: 5,
    },
    allowNull: false,
  })
  gravity!: number;

  //Relacion advice y Mangrullo
  @ForeignKey(() => Mangrullo)
  mangrulloId!: number
  //un advice pertenece a un solo mangrullo.
  @BelongsTo(() => Mangrullo)
  mangrullo!: Mangrullo[];


  //Relacion advice y Activity
  @ForeignKey(() => Activity)
  activityId!: number
  //un advice pertenece a un solo activity.
  @BelongsTo(() => Activity)
  activity!: Activity[];
}
