import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "../user/user";
// import { Car } from "../car/car";


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


    // //Relacion paymentBill con car.
    // @ForeignKey(() => Car)
    // @Column({
    //     type: DataType.INTEGER,
    //     allowNull: false
    // })
    // carId!: number
    // //un paymentBill pertenece a un solo car.
    // @BelongsTo(() => Car)
    // car!: Car[];
}

//date, totalPrice, state, userId, carId
//rutas= post, get.
