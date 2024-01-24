import { Table, Model, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { Activity } from "../activity/activity";

@Table({
  timestamps: false,
  tableName: "mangrullos",
})
export class Mangrullo extends Model {

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    zone!: string //zona

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 3
        }
    })
    dangerousness!: number //peligrosidad

    @Column({
        type: DataType.ENUM("Activo", "No Activo"),
        allowNull: false,
        defaultValue: "Activo"
    })
    state!: string

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  image!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    })
    qualification!: number

    @BelongsToMany(() => Activity, () => ActivityMangrullo)
    activity!: Activity[];
}