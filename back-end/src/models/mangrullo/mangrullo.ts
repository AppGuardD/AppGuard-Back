import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "mangrullos"
})

export class Mangrullo extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    zone!: string //zona

    @Column({
        type: DataType.NUMBER,
        allowNull: false,
        validate: {
            min: 1,
            max: 3
        }
    })
    dangerousness!: number //peligrosidad

    @Column({
        type: DataType.ENUM("Activo", "No Activo"),
        allowNull: false
    })
    state!: string

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    image!: string

    @Column({
        type: DataType.NUMBER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    })
    qualification!: number
}

