import { Items } from "mercadopago/dist/clients/commonTypes";
import { Activity } from "../../../models/activity/activity";

export const comprobationProducts = async (items: Items[]) => {
  try {
    for (const activityId of items) {
      const activity = await Activity.findOne({
        where: { activityName: activityId.title },
      });
      if (!activity) {
        return { success: false };
      }
    }
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};
