// updateCarritoController.ts
import { Request, Response } from 'express';
import { Carrito } from '../../../models/carrito/carrito';

export const updateCarrito = async (req: Request, res: Response) => {
    const { carritoId } = req.params;
    const updates = req.body;
    try {
        const affectedRows = await Carrito.update(updates, {
            where: { id: carritoId },
            returning: true // Retorna el objeto actualizado
        });

        if (affectedRows[0] ===   0) {
            return res.status(404).json({ message: 'Carrito no encontrado' });
        }

        const updatedCarrito = affectedRows[1][0];
        res.status(200).json({ carrito: updatedCarrito });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el carrito', error });
    }
};
