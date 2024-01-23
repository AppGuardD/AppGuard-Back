import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "reviewsmangrullos",
})
export class reviewsMangrullos extends Model {
  @Column({
    type: DataType.NUMBER,
    validate: {
      min: 1,
      max: 5,
    },
    allowNull: false,
  })
  qualification!: number;

  @Column({
    type: DataType.NUMBER,
  })
  idUsuario!: number;

  @Column({ type: DataType.STRING, allowNull: false })
  comment!: string;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  idMangrullo!: number;
}
