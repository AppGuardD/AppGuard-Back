import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "rols"
})

export class Rol extends Model {
    @Column({
        type: DataType.ENUM('Cliente', 'Admin'),
        allowNull: false,
    })
    roleName!: string
}



