import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "../user/user";


@Table({
    timestamps: false,
    tableName: "paymentBills",
})

export class PaymentBill extends Model {
    @Column({
        type: DataType.DATEONLY,
        allowNull: false,
    })
    date!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    totalValue!: number;

    @Column({
        type: DataType.ENUM("Pago Recibido", "Pago No Recibido"),
        allowNull: false,
        defaultValue: "Pago No Recibido"
    })
    state!: string;


    //Relacion paymentBill con user.
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    userId!: number
    //un paymentBill pertenece a un solo user.
    @BelongsTo(() => User)
    user!: User[];
}

//date, totalPrice, state, userId
//rutas= post, get.
