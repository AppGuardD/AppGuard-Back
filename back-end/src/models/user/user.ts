import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { Ticket } from "../ticket/ticket";
import { ReviewActivity } from "../reviewActivity/reviewActivity";
import { ReviewMangrullo } from "../reviewMangrullo/reviewMangrullo";

@Table({
  timestamps: false,
  tableName: "users"
})

export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  userName!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: "El formato del correo electrónico no es válido"
      }
    }
  })
  email!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  password!: string

  @Column({
    type: DataType.ENUM('DNI', 'PP'),
    allowNull: false,
  })
  typeIdentification!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  numberIdentification!: string

  @Column({
    type: DataType.ENUM('Cliente', 'Admin'),
    allowNull: false,
    defaultValue: "Cliente"
  })
  rol!: string

  @Column({
    type: DataType.ENUM('Activo', 'No Activo'),
    allowNull: false,
    defaultValue: "Activo",
  })
  state!: string

  //Relacionado.
  //relacion un user que puede tener muchos ticket.
  @HasMany(() => Ticket)
  ticket!: Ticket[];

  //Relacionado.
  //relacion un user que puede tener muchos reviewActivity.
  @HasMany(() => ReviewActivity)
  reviewActivity!: ReviewActivity[];


  //Relacionado.
  //relacion un user que puede tener muchos reviewMangrullo.
  @HasMany(() => ReviewMangrullo)
  reviewMangrullo!: ReviewMangrullo[];
}

