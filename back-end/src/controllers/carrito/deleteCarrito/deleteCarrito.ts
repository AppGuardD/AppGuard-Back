// deleteCarritoController.ts
import { Request, Response } from "express";
import { Carrito } from "../../../models/carrito/carrito";

export const deleteCarrito = async (req: Request, res: Response) => {
  const { carritoId } = req.params;
  try {
    const deletedCount = await Carrito.destroy({ where: { id: carritoId } });
    if (deletedCount === 0) {
      return res.status(404).json({ message: "Carrito no encontrado" });
    }
    res.status(200).json({ message: "Carrito eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el carrito", error });
  }
};
