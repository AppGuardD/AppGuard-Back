// createCarritoController.ts
import { Request, Response } from 'express';
import { Carrito } from '../../../models/carrito/carrito';

export const createCarrito = async (req: Request, res: Response) => {
    const { userId } = req.body;
    try {
        // Verificar si el usuario ya tiene un carrito activo
        const existingCarrito = await Carrito.findOne({ where: { userId, estado: 'activo' } });
        if (existingCarrito) {
            return res.status(400).json({ message: 'Usuario ya tiene un carrito activo.' });
        }

        // Crear un nuevo carrito para el usuario
        const newCarrito = await Carrito.create({
            fecha: new Date().toISOString(),
            total:  0,
            userId,
        });

        res.status(201).json({ message: 'Carrito creado exitosamente', carrito: newCarrito });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el carrito', error });
    }
};
