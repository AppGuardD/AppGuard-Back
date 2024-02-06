import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "../user/user";

@Table({
    timestamps: false,
    tableName: "Cars",
})

export class Car extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    idActivity!: Number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    activityName!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    price!: Number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    image!: string;


    //Relacion car con user
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    userId!: number
    //un car pertenece a un solo user.
    @BelongsTo(() => User)
    user!: User[];
}
//idActivity, activityName, price, image, userId.
//rutas= deletetodo, delete/:id, post, get.