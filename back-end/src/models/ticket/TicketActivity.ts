import { Table, Model, ForeignKey } from "sequelize-typescript";
import { Ticket } from "./ticket";
import { Activity } from "../activity/activity";

@Table({
    timestamps: false,
    tableName: "TicketActivities",
})
export class TicketActivity extends Model {
    @ForeignKey(() => Ticket)
    ticketId!: number;

    // Clave foránea para la relación con el modelo Activity
    @ForeignKey(() => Activity)
    activityId!: number;
}
