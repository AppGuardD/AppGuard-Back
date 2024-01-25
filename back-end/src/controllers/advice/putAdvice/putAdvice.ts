import { RequestHandler } from "express";
import { Advice } from "../../../models/advice/advice";

export const updateAdvice: RequestHandler = async (req, res) => {
    try {

    const adviceId = req.params.id;
    const {title, comment, image, gravity} = req.body;

    if (!title || !comment || !image || !gravity){
        return res.status(200).json({ message: "Todos los campos son obligatorios"})
    }

    const adviceToUpdate = await Advice.findByPk(adviceId);

    if (!adviceToUpdate){
        return res.status(404).json({ message: "Consejo no encontradp"})
    } 

    // actualizar los campos 

    adviceToUpdate.title= title;
    adviceToUpdate.comment= comment;
    adviceToUpdate.image= image;
    adviceToUpdate.gravity= gravity;

    // guardo los campos
    
    await adviceToUpdate.save();

    return res.status(200).json(adviceToUpdate);

    } catch (error:any) {    

        return res.status(500).json({ message: "Algo salió mal al actualizar el consejo", error: error.message });
    }
    
}