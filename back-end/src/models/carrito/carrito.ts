import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import { User } from "../user/user";
import { detalle_carrito } from "./detalle_carrito";

@Table({
  timestamps: false,
  tableName: "Carrito",
})
export class Carrito extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fecha!: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  total!: number;

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

  // Relacionado.
  // Relación un usuario que puede tener un solo carro.
  @HasMany(() => detalle_carrito)
  detalle_carrito!: detalle_carrito;
}

