import { Table, Model, ForeignKey } from "sequelize-typescript";
import { Car } from "./car";
import { Activity } from "../activity/activity";

@Table({
  timestamps: false,
  tableName: "CarActivities",
})

export class CarActivity extends Model {
  @ForeignKey(() => Activity)
  activityId!: number;

  @ForeignKey(() => Car)
  carId!: number;
}