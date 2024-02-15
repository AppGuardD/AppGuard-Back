import { RequestHandler } from "express";
import { Mangrullo } from "../../../models/mangrullo/mangrullo";

export const putMangrullo: RequestHandler = async (req, res) => {
  try {
    let id: number = parseInt(req.params.id);

    let updateData = req.body;

    console.log(updateData);

    let requestData: Mangrullo | null = await Mangrullo.findOne({
      where: { id },
    });

    if (!requestData) {
      return res
        .status(201)
        .send({ success: false, message: "El elemento no existe " });
    }

    await Mangrullo.update({ ...updateData }, { where: { id } });

    return res.status(201).json({ message: "Mangrullo Modificado" });
  } catch (error: any) {
    return res.status(500).json(error);
  }
};
