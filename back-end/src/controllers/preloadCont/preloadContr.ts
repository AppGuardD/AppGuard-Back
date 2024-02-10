import { RequestHandler } from "express";
import { readJsonFile } from "../../helper/preload/preload";
import path from "path";
import { User } from "../../models/user/user";
import { Mangrullo } from "../../models/mangrullo/mangrullo";
import { Activity } from "../../models/activity/activity";
import { Advice } from "../../models/advice/advice";
import { hashPassword } from "../../helper/encrypt/encrypt";
import { createImage } from "../../cloudinary/getStarted";
//import { connection } from "../../database/database";

export const preload: RequestHandler = async (_req, res) => {
    try {

        const preloadData = await readJsonFile(path.join(__dirname, "../../../preloadDatas/preloadDatas.json"));
        const datosdb = await User.findAll();
        //console.log(datosdb);
        if (datosdb.length === 0) {
            //await User.bulkCreate(preloadData.users);

            for (const user of preloadData.users) {
                const passwordHash = await hashPassword(user.password);
                user.password = passwordHash
                await User.create(user);
            }


            //await Mangrullo.bulkCreate(preloadData.mangrullos);
            for (const mangrullo of preloadData.mangrullos) {
                const img: string = await createImage(mangrullo.image ? mangrullo.image : mangrullo.req.file?.path);
                mangrullo.image = img;
                await Mangrullo.create(mangrullo);
            }


            //await Activity.bulkCreate(preloadData.activity);
            for (const activity of preloadData.activity) {
                const imgUrl = await createImage(activity.image ? activity.image : activity.req.file?.path);
                activity.image = imgUrl;
                const newActivity = await Activity.create(activity);
                newActivity.$add('Mangrullo', activity.mangrullos);
            }

            //await Advice.bulkCreate(preloadData.advice);
            for (const advi of preloadData.advice) {
                const adviConsImg: string = await createImage(advi.image ? advi.image : advi.req.file?.path);
                advi.image = adviConsImg;
                await Advice.create(advi);
            }


            return res.status(201).json(preloadData);
        } else {
            return res.status(201).json({ message: "Datos ya cargados" });
        }
    } catch (error: any) {
        return res.status(500).json({
            message: "Algo salió mal, verifica la función",
            error: error.message,
        });
    }
};
