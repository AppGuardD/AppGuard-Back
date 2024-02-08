import { Activity } from "../../../models/activity/activity";
import { User } from "../../../models/user/user";

export const createTickets = async (items: any) => {
  try {
    /*  const { userId, price, activities } = items;
    
        // Validación de activities no puede estar vacío
        if (!activities || activities.length === 0) {
          return res.status(302).send({
            success: false,
            message: "La propiedad 'activities' no puede estar vacía",
          });
        }
    
        let arrayActivities: Activity[] = [];
    
        for (const activityId of activities) {
    
          const activity = await Activity.findOne({
            where: {
              id: activityId
            }
          });
    
          if (!activity) {
            return res.status(302).send({ message: "La actividad no existe en la base de datos" });
          } else {
            arrayActivities.push(activity);
          }
        }
    
    
        if (!userId) {
          return res
            .status(400)
            .json({ message: "Todos los campos son obligatorios" });
        }
    
        const user: User | null = await User.findByPk(userId);
    
        if (!user) {
          return res
            .status(302)
            .json({ message: "Usuario no encontrado en la base de datos" });
        }
    
        const ticket: Ticket = await Ticket.create({
          userId: userId,
          price: price,
          date: new Date().toISOString(),
          state: "No Pago",
        });
    
        // Asociar actividad con ticket.
        await ticket.$add('Activity', arrayActivities);
    
        return res.status(201).json({ message: "Ticket creado exitosamente", ticket }); */
  } catch (error: any) {
    /* return res.status(500).json({
      message: "Algo salió mal, verifica la función",
      error: error.message,
    }); */
  }
};
