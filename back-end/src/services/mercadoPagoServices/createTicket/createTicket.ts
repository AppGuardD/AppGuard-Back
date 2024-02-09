import { Activity } from "../../../models/activity/activity";
import { Ticket } from "../../../models/ticket/ticket";
import { User } from "../../../models/user/user";

export type ticketResponse = { success: boolean } | { success: boolean; message: any };
export const createTickets = async (Items: any) => {
  try {
    const { userId, activities } = Items;
    const returnOperationFaild = { success: false };
    // Validación de activities no puede estar vacío
    if (activities.length <= 0) {
      console.log("no hay items");
      return returnOperationFaild;
    }

    for (const activityId of activities) {
      for (let index = 0; index < activityId.quantity; index++) {
        const activity = await Activity.findOne({
          where: {
            activityName: activityId["title"],
          },
        });

        if (!activity) {
          console.log("la actividad no existe");
          return returnOperationFaild;
        }

        if (!userId) {
          console.log("el id del usuario es necesario");
          return returnOperationFaild;
        }

        const user: User | null = await User.findByPk(userId);

        if (!user) {
          console.log("no existe ese usuario");
          return returnOperationFaild;
        }

        const ticket: Ticket = await Ticket.create({
          userId: userId,
          date: new Date().toISOString(),
          state: "Pago",
        });

        // Asociar actividad con ticket.
        await ticket.$add("Activity", activity);
      }
    }
    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};
