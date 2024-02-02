import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "sessions"
})

export class Session extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    sid!: string

    @Column({
        type: DataType.JSON,
        allowNull: true
    })
    sess!: object

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    expire!: Date
}

