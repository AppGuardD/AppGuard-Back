import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Mangrullo } from "../mangrullo/mangrullo";
import { User } from "../user/user";

@Table({
  timestamps: false,
  tableName: "reviewMangrullos",
})

export class ReviewMangrullo extends Model {

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
    type: DataType.STRING,
    allowNull: false
  })
  comment!: string;

  @Column({
    type: DataType.INTEGER,
  })
  idUsuario!: number;

  @Column({
    type: DataType.ENUM("Activo", "No Activo"),
    allowNull: false,
  })
  state!: string;

  //Relacionado.
  //Relacion reviewMangrullo y Mangrullo
  @ForeignKey(() => Mangrullo)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  mangrulloId!: number;
  //un reviewMangrullo pertenece a un solo mangrullo.
  @BelongsTo(() => Mangrullo)
  mangrullo!: Mangrullo[];


  //Relacionado.
  //Relacion reviewMangrullo y User
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  userId!: number
  //un reviewMangrullo pertenece a un solo user.
  @BelongsTo(() => User)
  user!: User[];
}
