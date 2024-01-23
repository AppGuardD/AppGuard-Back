import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "activities"
})

export class Activity extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    userName!: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description!: string

    @Column({
        type: DataType.NUMBER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    })
    qualification!: number

    @Column({
        type: DataType.NUMBER,
        allowNull: false,
    })
    price!: number

    @Column({
        type: DataType.ENUM("Pago", "Gratis"),
        allowNull: false,
    })
    state!: string

    @Column({
        type: DataType.ENUM("Deportivo", "Sanitario", "Cultural"),
        allowNull: false,
    })
    type!: string
}

