import { Router } from "express";

import { searchAdvice } from "../../controllers/advice/getAdvice/getAdvice";
import { searchIdAdvice } from "../../controllers/advice/getIdAdvice/getIdAdvice";
import { createAdvice } from "../../controllers/advice/postAdvice/postAdvice";
import { updateAdvice } from "../../controllers/advice/putAdvice/putAdvice";
import { deleteAdvice } from "../../controllers/advice/deletAdvice/deletAdvice";
import { adminMiddleware } from "../../middlewares/adminMiddlewares/adminMiddleware";
import { upload } from "../../helper/multer/multerConfig";
import { getAllAdvices } from "../../controllers/advice/getAllAdvices/getAllAdvices";

const advicesRoutes = Router();
//-----------con webtokens-------------
advicesRoutes.get("/search", searchAdvice);
advicesRoutes.get("/searchAll", getAllAdvices);
advicesRoutes.get("/search/:id", searchIdAdvice);
advicesRoutes.post(
  "/create",
  adminMiddleware,
  upload.single("img"),
  createAdvice,
);
advicesRoutes.delete("/delet/:id", adminMiddleware, deleteAdvice);
advicesRoutes.put(
  "/update/:id",
  adminMiddleware,
  upload.single("img"),
  updateAdvice,
);
//----------Desarollo------------------
/* advicesRoutes.get("/search", searchAdvice);
advicesRoutes.get("/search/:id", searchIdAdvice);
advicesRoutes.post("/create", upload.single("img"), createAdvice);
advicesRoutes.delete("/delet/:id", deleteAdvice);
advicesRoutes.put("/update/:id", upload.single("img"), updateAdvice); */

export default advicesRoutes;
