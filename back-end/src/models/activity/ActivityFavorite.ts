import { Table, Model, ForeignKey } from "sequelize-typescript";
import { Activity } from "./activity";
import { Favorite } from "../favorite/favorite";

@Table({
  timestamps: false,
  tableName: "ActivityMangrullos",
})
export class ActivityFavorite extends Model {
  @ForeignKey(() => Activity)
  activityId!: number;

  // Clave foránea para la relación con el modelo Planeta
  @ForeignKey(() => Favorite)
  favoriteId!: number;
}
