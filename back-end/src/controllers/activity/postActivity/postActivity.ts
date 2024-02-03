import { Request, Response } from "express";
import { Activity } from "../../../models/activity/activity";
import { Mangrullo } from "../../../models/mangrullo/mangrullo";
import { createImage } from "../../../cloudinary/getStarted";

export const postActivity = async (req: Request, res: Response) => {
  try {
    const { activityName, description, qualification, type, state, price, mangrullos } = req.body;

    // Validación de mangrullos no puede estar vacío
    if (!mangrullos || mangrullos.length === 0) {
      return res.status(400).send({
        success: false,
        message: "La propiedad 'mangrullos' no puede estar vacía",
      });
    }

    // Validaciones de campos obligatorios
    if (!activityName || !description || !qualification || !type || !state) {
      return res.status(400).send({
        success: false,
        message: "Todos los campos son requeridos",
      });
    }

    // Validación de existencia de imagen
    if (!req.file?.path && !req.body.image) {
      return res.status(400).send({
        success: false,
        message: "La imagen o la URL es requerida",
      });
    }

    // Verificar si la actividad ya existe
    const existingActivity = await Activity.findOne({
      where: {
        activityName: activityName
      },
    });

    if (existingActivity) {
      return res.status(201).send({
        success: false,
        message: "La actividad ya existe en la base de datos",
      });
    }

    // Crear imagen
    const image = await createImage(req.file?.path ? req.file.path : req.body.image);

    if (image?.error) {
      return res.status(400).send({
        success: false,
        message: "La imagen no se puede crear. Revisa la extensión de la imagen.",
        error: image.error,
      });
    }

    let arrayMangrullos: Mangrullo[] = [];
    for (const mangrulloId of mangrullos) {
      const mangrullo = await Mangrullo.findOne({
        where: {
          id: mangrulloId
        }
      });

      if (!mangrullo) {
        return res.status(302).send({ message: "El mangrullo no existe en la base de datos" });
      } else {
        arrayMangrullos.push(mangrullo);
      }
    }

    // Crear actividad
    const createdActivity = await Activity.create({
      activityName,
      description,
      qualification,
      type,
      active: true,
      state,
      image,
      price
    });

    // Asociar mangrullos a la actividad
    await createdActivity.$add('Mangrullo', arrayMangrullos);

    res.status(201).send({
      success: true,
      message: "Los datos han sido creados correctamente",
      Activity: createdActivity,
    });
  } catch (error: any) {
    res.status(500).send({ success: false, message: error.message });
  }
};
