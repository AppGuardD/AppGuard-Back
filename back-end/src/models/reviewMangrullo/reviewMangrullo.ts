import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "reviewsmangrullos",
})
export class ReviewsMangrullos extends Model {
  @Column({
    type: DataType.INTEGER,
    validate: {
      min: 1,
      max: 5,
    },
    allowNull: false,
  })
  qualification!: number;

  @Column({
    type: DataType.INTEGER,
  })
  idUsuario!: number;

  @Column({ type: DataType.STRING, allowNull: false })
  comment!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idMangrullo!: number;
}
