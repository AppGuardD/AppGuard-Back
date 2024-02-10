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

@Table({
  timestamps: false,
  tableName: "Oders",
})
export class Order extends Model {
  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  date!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  totalValue!: Number;
  //  transaction_details.
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.ENUM("approved", "pending", "rejected", "cancelled"),
    allowNull: false,
  })
  status!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  merchantId!: string;
  //Relacion ticket y User
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId!: number;
  //una orden pertenece a un solo user.
  @BelongsTo(() => User)
  user!: User[];
}
