import {
  Table,
  Column,
  Model,
  DataType,
  AllowNull,
  BelongsToMany,
} from "sequelize-typescript";
import { ActivityFavorite } from "../activity/ActivityFavorite";
import { Activity } from "../activity/activity";
import { Mangrullo } from "../mangrullo/mangrullo";
import { MangrulloFavorite } from "../mangrullo/MangrulloFavorite";

@Table({
  timestamps: false,
  tableName: "favorites",
})
export class Favorite extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idActivity!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idUser!: number;

  //relacion mucho a mucho con favorite
  @BelongsToMany(() => Activity, () => ActivityFavorite)
  activity!: Activity[];

  //relacion mucho a mucho con favorite
  @BelongsToMany(() => Mangrullo, () => MangrulloFavorite)
  mangrullo!: Mangrullo[];
}
