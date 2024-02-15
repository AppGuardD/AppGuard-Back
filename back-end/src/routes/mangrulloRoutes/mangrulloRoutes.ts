import { Router } from "express";
import { getMangrullos } from "../../controllers/mangrullo/getMangrullos/getMangrullos";
import { getIdMangrullo } from "../../controllers/mangrullo/getIdMangrullo/getIdMangrullo";
import { putMangrullo } from "../../controllers/mangrullo/putMangrullo/putMangrullo";
import { postMangrullos } from "../../controllers/mangrullo/postMangrullo/postMangrullo";
import { disableMangrullo } from "../../controllers/mangrullo/disableMangrullo/disableMangrullo";
import { adminMiddleware } from "../../middlewares/adminMiddlewares/adminMiddleware";
import { adminMangrullo } from "../../controllers/mangrullo/adminMangrullo/adminMangrullo";
import { getAllMangrullos } from "../../controllers/mangrullo/getAllMangrullos/getAllMangrullos";

const mangrulloRoutes = Router();
//-----------con webtokens-------------
mangrulloRoutes.get("/admin", adminMiddleware, adminMangrullo);
mangrulloRoutes.get("/search", getMangrullos);
mangrulloRoutes.get("/searchAll", getAllMangrullos);
mangrulloRoutes.get("/search/:id", getIdMangrullo);
mangrulloRoutes.post("/create", adminMiddleware, postMangrullos);
mangrulloRoutes.put("/update/:id", adminMiddleware, putMangrullo);
mangrulloRoutes.put("/disable/:id", adminMiddleware, disableMangrullo);
//----------Desarollo------------------
/* 
mangrulloRoutes.get("/admin", adminMangrullo);
mangrulloRoutes.get("/search", getMangrullos);
mangrulloRoutes.get("/search/:id", getIdMangrullo);
mangrulloRoutes.post("/create", upload.single("image"), postMangrullos);
mangrulloRoutes.put("/update/:id", upload.single("image"), putMangrullo);
mangrulloRoutes.put("/disable/:id", disableMangrullo);
 */

export default mangrulloRoutes;
