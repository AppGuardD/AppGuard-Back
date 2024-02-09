import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "../user/user";


@Table({
    timestamps: false,
    tableName: "Donations",
})

export class Donation extends Model {
    @Column({
        type: DataType.DATEONLY,
        allowNull: false,
    })
    date!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    value!: number;

    //Relacionado.
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

//value, userId.
//rutas= post, get.