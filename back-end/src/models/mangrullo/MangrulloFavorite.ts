import { Table, Model, ForeignKey } from "sequelize-typescript";
import { Favorite } from "../favorite/favorite";
import { Mangrullo } from "./mangrullo";

@Table({
  timestamps: false,
  tableName: "ActivityFavorites",
})
export class MangrulloFavorite extends Model {
  @ForeignKey(() => Mangrullo)
  mangrulloId!: number;

  // Clave foránea para la relación con el modelo Planeta
  @ForeignKey(() => Favorite)
  favoriteId!: number;
}
