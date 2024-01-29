import {
  Table,
  Model,
  ForeignKey,
} from "sequelize-typescript";
import { Activity } from "./activity";
import { Mangrullo } from "../mangrullo/mangrullo";

@Table({
  timestamps: false,
  tableName: "ActivityMangrullos",
})
export class ActivityMangrullo extends Model {
  @ForeignKey(() => Activity)
  activityId!: number;

  // Clave foránea para la relación con el modelo Planeta
  @ForeignKey(() => Mangrullo)
  mangrulloId!: number;
}
