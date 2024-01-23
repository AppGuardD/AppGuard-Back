import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "permissions"
})

export class Permission extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description!: string
}