import { Table, Column, Model, DataType, ForeignKey, BelongsTo, BelongsToMany } from "sequelize-typescript";
import { Activity } from "../activity/activity";
import { User } from "../user/user";
import { TicketActivity } from "./TicketActivity";

@Table({
    timestamps: false,
    tableName: "tickets",
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

    //Relacionado
    //relacion ticket con activity mucho a mucho
    @BelongsToMany(() => Activity, () => TicketActivity)
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
