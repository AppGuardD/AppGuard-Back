import {
  Table,
  Model,
  Column,
  DataType,
  BelongsToMany,
  HasMany,
} from "sequelize-typescript";
import { ActivityMangrullo } from "./ActivityMangrullo";
import { ReviewActivity } from "../reviewActivity/reviewActivity";
import { Ticket } from "../ticket/ticket";
import { Mangrullo } from "../mangrullo/mangrullo";
import { TicketActivity } from "../ticket/TicketActivity";
import { Car } from "../car/car";
import { CarActivity } from "../car/CarActivities";

@Table({
  timestamps: false,
  tableName: "activities",
})
export class Activity extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    //unique: true,
  })
  activityName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description!: string;

  @Column({
    type: DataType.TEXT,//activityName, image, idActivity, precio, cantidad comentado, idUser //
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
    defaultValue: 0,
  })
  price!: Number;

  @Column({
    type: DataType.ENUM("Pago", "Gratis"),
    allowNull: false,
    defaultValue: "Gratis",
  })
  state!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true
  })
  active!: boolean;

  @Column({
    type: DataType.ENUM("Deportivo", "Sanitario", "Cultural"),
    allowNull: false,
  })
  type!: string;

  //Relacionado
  //relacion mucho a mucho con mangrullo
  @BelongsToMany(() => Mangrullo, () => ActivityMangrullo)
  mangrullo!: Mangrullo[];

  //Relacionado.
  //relacion un activity que puede tener muchos reviewActivity.
  @HasMany(() => ReviewActivity)
  reviewActivity!: ReviewActivity[];

  //Relacionado
  //relacion activity con ticket mucho a mucho
  @BelongsToMany(() => Ticket, () => TicketActivity)
  ticket!: Ticket[];


  //Relacionado
  //relacion activity con car mucho a mucho
  @BelongsToMany(() => Car, () => CarActivity)
  car!: Car[];

}
