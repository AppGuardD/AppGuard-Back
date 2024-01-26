import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Mangrullo } from "../mangrullo/mangrullo";

@Table({
  timestamps: false,
  tableName: "ReviewMangrullos",
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
    type: DataType.INTEGER,
    allowNull: false,
  })
  idMangrullo!: number;

  @Column({
    type: DataType.ENUM("Activo", "No Activo"),
    allowNull: false,
  })
  state!: string;

  //Relacion reviewMangrullo y Mangrullo
  @ForeignKey(() => Mangrullo)
  mangrulloId!: number
  //un reviewMangrullo pertenece a un solo mangrullo.
  @BelongsTo(() => Mangrullo)
  mangrullo!: Mangrullo[];
}
