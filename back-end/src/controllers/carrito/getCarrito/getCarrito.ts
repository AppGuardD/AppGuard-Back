// getCarritoController.ts
import { Request, Response } from 'express';
import { Carrito } from '../../../models/carrito/carrito';
import { detalle_carrito } from '../../../models/carrito/detalle_carrito';
import { Activity } from '../../../models/activity/activity';

export const getCarrito = async (req: Request, res: Response) => {
    const { userId } = req.params;
    try {
        const carrito = await Carrito.findOne({
            where: { userId },
            include: [{
                model: detalle_carrito,
                include: [{
                    model: Activity
                }]
            }]
        });

        if (!carrito) {
            const NewCarrito = await Carrito.create({
                fecha: new Date().toISOString(),
                total:  0,
                userId
            });
            res.status(200).json(NewCarrito);
        }

        // Puedes incluir lógica adicional aquí si necesitas calcular totales, etc.

        res.status(200).json(carrito);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el carrito', error });
    }
};
