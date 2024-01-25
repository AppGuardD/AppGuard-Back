import {RequestHandler} from "express";
import { Advice } from "../../../models/advice/advice";


export const deleteAdvice: RequestHandler = async (req, res) => {

    const adviceId =  req.params.id;

    try {
        const advice = await Advice.findByPk(adviceId);

        //verificacion
        if(!advice){
            return res.status(404).json({ message: "Consejo no encontrado"})
        }

        //delet 
        await advice.destroy();
    
    return res.status(204).end(); // contenido eliminado

    } catch (error:any) {
        return res.status(500).json({message: "Algo salió mal, no se pudo eliminar el consejo", error: error.message})
    }
}