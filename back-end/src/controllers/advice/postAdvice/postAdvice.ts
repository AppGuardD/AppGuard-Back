import { RequestHandler } from "express";
import { Advice } from "../../../models/advice/advice";
import { createImage } from "../../../cloudinary/getStarted";

export const createAdvice: RequestHandler = async (req, res) => {
    try {
        const { title, comment, image, gravity } = req.body;

        //verifica campos obligatorios
        if (!title || !comment || !image || !gravity) {
            return res.status(200).json({ message: "Todos los campos son obligatorios" });
        }

        const adviceDb: Advice | null = await Advice.findOne({
            where: {
                title: title
            }
        });

        if (adviceDb) {
            return res.status(400).json({ message: "El titulo del consejo ya existe en la base de datos" })
        }

        // subida a cloudinary
        const imageUpload: any = await createImage(image);

        const advice: Advice = await Advice.create({
            title: title,
            comment: comment,
            image: imageUpload, // asigno URL de cloudinary
            gravity: gravity
        });
        return res.status(201).json(advice);
    } catch (error: any) {
        return res.status(500).json({ message: "Algo salió mal al crear el consejo", error: error.message })
    }
}