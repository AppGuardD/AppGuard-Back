import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
  HasOne,
} from "sequelize-typescript";
import { User } from "../user/user";
import { Activity } from "../activity/activity";
import { CarActivity } from "./CarActivities";
import { Ticket } from "../ticket/ticket";
import { PaymentBill } from "../paymentBill/paymentBill";

@Table({
  timestamps: false,
  tableName: "Cars",
})
export class Car extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  activityName!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price!: Number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image!: string;

  //Relacionado.
  //Relacion car con activity.
  @BelongsToMany(() => Activity, () => CarActivity)
  activity!: Activity[];

  //Relacionado.
  //Relacion car con user.
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId!: number;
  //un car pertenece a un solo user.
  @BelongsTo(() => User)
  user!: User[];

  //Relacionado.
  //Relacion car con ticket.
  /*  @ForeignKey(() => Ticket)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ticketId!: number;
  //un car pertenece a un solo user.
  @BelongsTo(() => Ticket)
  ticket!: Ticket[]; */

  // Relacionado.
  // Relación un carts que puede tener un solo PaymentBill.
  @HasOne(() => PaymentBill)
  paymentBill!: PaymentBill;
}
//activityName, price, image, activityId, userId.
//rutas= deletetodo, delete/:id, post, get.
