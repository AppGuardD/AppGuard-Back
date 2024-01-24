import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "users"
})

export class User extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    UserName!: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    email!: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password!: string

    @Column({
        type: DataType.ENUM('DNI', 'PP'),
        allowNull: false,
    })
    typeIdentification!: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    numberIdentification!: string

    @Column({
        type: DataType.ENUM('Cliente', 'Admin'),
        allowNull: false,
    })
    rol!: string
}

