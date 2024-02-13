import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Activity } from "../activity/activity";
import { Carrito } from "./carrito";

@Table({
  timestamps: false,
  tableName: "detalle_carrito",
})
export class detalle_carrito extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  cantidad!: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  subtotal!: number;

  @ForeignKey(() => Activity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ActivityId!: number;

  @BelongsTo(() => Activity)
  Activity!: Activity[];

  @ForeignKey(() => Carrito)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  carritoId!: number;

  @BelongsTo(() => Carrito)
  carrito!: Carrito[];
}

