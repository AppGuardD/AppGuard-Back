import { Request, Response } from "express";
import { Activity } from "../../../models/activity/activity";
import { Mangrullo } from "../../../models/mangrullo/mangrullo";
import { createImage } from "../../../cloudinary/getStarted";//

export const postActivity = async (req: Request, res: Response) => {
  try {
    const { activityName, description, type, state, price, mangrullos }
      = req.body;


    // Validación de mangrullos no puede estar vacío
    if (!mangrullos || mangrullos.length === 0) {
      return res.status(400).send({
        success: false,
        message: "La propiedad 'mangrullos' no puede estar vacía",
      });
    }

    // Validaciones de campos obligatorios
    if (!activityName || !description || !type || !state) {
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
    let image;
    try {
      image = await createImage(req.file?.path ? req.file.path : req.body.image);
    } catch (imageError: any) {
      return res.status(400).send({
        success: false,
        message: "Error al crear la imagen.",
        error: imageError.message,
      });
    }



    // Verificar existencia de mangrullos
    const arrayMangrullos: Mangrullo[] = [];
    for (const mangrulloId of mangrullos) {
      try {
        const mangrullo = await Mangrullo.findOne({
          where: {
            id: mangrulloId
          }
        });

        if (!mangrullo) {
          return res.status(404).send({
            success: false,
            message: "El mangrullo con el ID proporcionado no existe en la base de datos"
          });
        } else {
          arrayMangrullos.push(mangrullo);
        }
      } catch (mangrulloError: any) {
        return res.status(500).send({
          success: false,
          message: "Error al buscar los mangrullos.",
          error: mangrulloError.message,
        });
      }
    }


    // Crear actividad
    let createdActivity;
    try {
      createdActivity = await Activity.create({
        activityName,
        description,
        type,
        active: true,
        state,
        image,
        price
      });
    } catch (activityError: any) {
      return res.status(500).send({
        success: false,
        message: "Error al crear la actividad.",
        error: activityError.message,
      });
    }

    // Asociar mangrullos a la actividad
    try {
      await createdActivity.$add('Mangrullo', arrayMangrullos);
    } catch (associationError: any) {
      return res.status(500).send({
        success: false,
        message: "Error al asociar los mangrullos a la actividad.",
        error: associationError.message,
      });
    }

    res.status(201).send({
      success: true,
      message: "Los datos han sido creados correctamente",
      Activity: createdActivity,
    });
  } catch (error: any) {
    console.error("Error en la creación de la actividad:", error);
    res.status(500).send({
      success: false,
      message: "Ha ocurrido un error al procesar la solicitud. Por favor, inténtelo de nuevo más tarde."
    });
  }
};
