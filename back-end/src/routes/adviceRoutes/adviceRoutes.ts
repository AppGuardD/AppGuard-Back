import { Router } from "express";

import { searchAdvice } from "../../controllers/advice/getAdvice/getAdvice";
import { searchIdAdvice } from "../../controllers/advice/getIdAdvice/getIdAdvice";
import { createAdvice } from "../../controllers/advice/postAdvice/postAdvice";
import { updateAdvice } from "../../controllers/advice/putAdvice/putAdvice";
import { deleteAdvice } from "../../controllers/advice/deletAdvice/deletAdvice";
import { adminMiddleware } from "../../middlewares/adminMiddlewares/adminMiddleware";

const advicesRoutes = Router();
//-----------con webtokens-------------
/* advicesRoutes.get("/search", searchAdvice);
advicesRoutes.get("/search/:id", searchIdAdvice);
advicesRoutes.post("/create", adminMiddleware, createAdvice);
advicesRoutes.delete("/delet/:id", adminMiddleware, deleteAdvice);
advicesRoutes.put("/update/:id", adminMiddleware, updateAdvice); */
//----------Desarollo------------------
advicesRoutes.get("/search", searchAdvice);
advicesRoutes.get("/search/:id", searchIdAdvice);
advicesRoutes.post("/create", createAdvice);
advicesRoutes.delete("/delet/:id", deleteAdvice);
advicesRoutes.put("/update/:id", updateAdvice);

export default advicesRoutes;
