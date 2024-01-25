import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "tickes",
})
export class Ticket extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    idUser!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    idActivity!: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    date!: Date;

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
}
