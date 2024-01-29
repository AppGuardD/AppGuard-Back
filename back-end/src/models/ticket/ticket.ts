import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Activity } from "../activity/activity";
import { User } from "../user/user";

@Table({
    timestamps: false,
    tableName: "tickes",
})

export class Ticket extends Model {
    @Column({
        type: DataType.DATEONLY,
        allowNull: false,
    })
    date!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    price!: number;

    @Column({
        type: DataType.ENUM("Pago", "No Pago"),
        allowNull: false,
        defaultValue: "No Pago"
    })
    state!: string;

    //Relacionado.
    //Relacion ticket y Activity
    @ForeignKey(() => Activity)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    activityId!: number
    //un ticket pertenece a un solo activity.
    @BelongsTo(() => Activity)
    activity!: Activity[];


    //Relacion ticket y User
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    userId!: number
    //un ticket pertenece a un solo user.
    @BelongsTo(() => User)
    user!: User[];
}
