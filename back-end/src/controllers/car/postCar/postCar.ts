import { RequestHandler } from "express";
import { Car } from "../../../models/car/car";
import { Activity } from "../../../models/activity/activity";
import { User } from "../../../models/user/user";
import { createImage } from "../../../cloudinary/getStarted";
import { Ticket } from "../../../models/ticket/ticket";

//Ruta para crear Car.
export const postCar: RequestHandler = async (req, res) => {
    try {
        const { activityName, price, activities, userId, ticketId } = req.body;

        // Verificar que los campos no estén vacíos.
        if (!activityName || !price || !userId || !ticketId) {
            return res.status(302).json({ message: "Todos los campos son requeridos" });
        }

        // Validación de cars no puede estar vacío
        if (!activities || activities.length === 0) {
            return res.status(302).json({
                message: "La propiedad activities no puede faltar ni estar vacía",
            });
        }

        //Recorer el arreglo de activities y buscar en la base de datos la actividad.
        let arrayActivities: Activity[] = [];
        for (const activityId of activities) {
            const activity = await Activity.findOne({
                where: {
                    id: activityId
                }
            });

            if (!activity) {
                return res
                    .status(302)
                    .json({ message: "La activity no existe en la base de datos" });
            } else {
                arrayActivities.push(activity);
            }
        }

        //Buscar en la base de datos si existe el usuario.        
        const user = await User.findByPk(userId);
        if (!user) {
            return res
                .status(302)
                .json({ message: "El usuario no existe en la base de datos" });
        }


        //Buscar en la base de datos si existe el ticket.        
        const ticket = await Ticket.findByPk(ticketId);
        if (!ticket) {
            return res
                .status(302)
                .json({ message: "El Ticket no existe en la base de datos" });
        }

        // Validación de existencia de imagen
        if (!req.file?.path && !req.body.image) {
            return res.status(302).send({
                success: false,
                message: "La imagen o la URL es requerida",
            });
        }

        // Crear imagen
        const image = await createImage(req.file?.path ? req.file.path : req.body.image);
        if (image?.error) {
            return res
                .status(302)
                .json({
                    message: "La imagen no se puede crear. Revisa la extensión de la imagen.",
                    error: image.error
                });
        }

        //car esta definido como un objeto de car.
        const car: Car | null = await Car.create({
            activityName: activityName,
            price: price,
            image: image,
            userId: userId,
            ticketId: ticketId
        });

        // Asociar carrito a la actividad
        await car.$add('Activity', arrayActivities);
        return res
            .status(201)
            .json({ message: "Carrito creado con exito", Car: car });
    } catch (error: any) {
        return res
            .status(500)
            .json({ message: "Algo salió mal, verifica la función", error: error.message });
    }
};




















