import { Table, Model, ForeignKey } from "sequelize-typescript";
import { Mangrullo } from "../mangrullo/mangrullo";
import { Favorite } from "./favorite";

@Table({
    timestamps: false,
    tableName: "FavoriteMangrullos",
})

export class FavoriteMangrullo extends Model {

    @ForeignKey(() => Mangrullo)
    mangrulloId!: number;

    @ForeignKey(() => Favorite)
    favoriteId!: number;
}