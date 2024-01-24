import { Table, Model, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { ActivityMangrullo } from "./ActivityMangrullo";

@Table({
  timestamps: false,
  tableName: "activities",
})
export class Activity extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  ActivityName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  })
  qualification!: Number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price!: Number;

  @Column({
    type: DataType.ENUM("Pago", "Gratis"),
    allowNull: false,
  })
  state!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  Active!: boolean;

  @Column({
    type: DataType.ENUM("Deportivo", "Sanitario", "Cultural"),
    allowNull: false,
  })
  type!: string;

  @BelongsToMany(() => Activity, () => ActivityMangrullo)
  activity!: Activity[];
}
