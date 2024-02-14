import { RequestHandler } from "express";
import { readJsonFile } from "../../helper/preload/preload";
import path from "path";
import { User } from "../../models/user/user";
import { Mangrullo } from "../../models/mangrullo/mangrullo";
import { Activity } from "../../models/activity/activity";
import { Advice } from "../../models/advice/advice";
import { hashPassword } from "../../helper/encrypt/encrypt";

export const preload: RequestHandler = async (_req, res) => {
  try {
    const preloadData = await readJsonFile(
      path.join(__dirname, "../../../preloadDatas/preloadDatas.json"),
    );
    const datosdb = await User.findAll();

    if (datosdb.length === 0) {
      for (const user of preloadData.users) {
        const passwordHash = await hashPassword(user.password);
        user.password = passwordHash;
        await User.create(user);
      }

      await Advice.bulkCreate(preloadData.advice);

      await Mangrullo.bulkCreate(preloadData.mangrullos);

      for (const activity of preloadData.activity) {
        const newActivity = await Activity.create(activity);
        newActivity.$add("Mangrullo", activity.mangrullos);
      }

      return res.status(201).json(preloadData);
    } else {
      return res.status(201).json({ message: "Datos ya cargados" });
    }
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({
      message: "Algo salió mal, verifica la función",
      error: error.message,
    });
  }
};
