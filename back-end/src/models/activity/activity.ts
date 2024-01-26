import { Table, Model, Column, DataType, BelongsToMany, HasMany } from "sequelize-typescript";
import { ActivityMangrullo } from "./ActivityMangrullo";
import { ReviewActivity } from "../reviewActivity/reviewActivity";
import { Advice } from "../advice/advice";
import { Ticket } from "../ticket/ticket";

@Table({
  timestamps: false,
  tableName: "activities",
})
export class Activity extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  activityName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description!: string;

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
  qualification!: Number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price!: Number;

  @Column({
    type: DataType.ENUM("Pago", "Gratis"),
    allowNull: false,
  })
  state!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  active!: boolean;

  @Column({
    type: DataType.ENUM("Deportivo", "Sanitario", "Cultural"),
    allowNull: false,
  })
  type!: string;

  //relacion mucho a mucho con mangrullo
  @BelongsToMany(() => Activity, () => ActivityMangrullo)
  activity!: Activity[];


  //relacion un activity que puede tener muchos reviewActivity.
  @HasMany(() => ReviewActivity)
  reviewActivity!: ReviewActivity[];


  //relacion un activity que puede tener muchos advice.
  @HasMany(() => Advice)
  advice!: Advice[];


  //relacion un activity que puede tener muchos ticket.
  @HasMany(() => Ticket)
  ticket!: Ticket[];
}
