import { Router } from "express";
import { getMangrullos } from "../../controllers/mangrullo/getMangrullos/getMangrullos";
import { getIdMangrullo } from "../../controllers/mangrullo/getIdMangrullo/getIdMangrullo";
import { putMangrullo } from "../../controllers/mangrullo/putMangrullo/putMangrullo";
import { postMangrullos } from "../../controllers/mangrullo/postMangrullo/postMangrullo";
import { disableMangrullo } from "../../controllers/mangrullo/disableMangrullo/disableMangrullo";
import { adminMiddleware } from "../../middlewares/adminMiddlewares/adminMiddleware";
import { upload } from "../../helper/multer/multerConfig";
import { nameMangrullo } from "../../controllers/mangrullo/nameMangrullo/nameMangrullo";

const mangrulloRoutes = Router();
//-----------con webtokens-------------
/*mangrulloRoutes.get("/name/:name", nameMangrullo);
mangrulloRoutes.get("/search", getMangrullos);
mangrulloRoutes.get("/search/:id", getIdMangrullo);
mangrulloRoutes.post("/create", adminMiddleware, postMangrullos);
mangrulloRoutes.put("/update/:id", adminMiddleware, putMangrullo);
mangrulloRoutes.put("/deactivate/:id", adminMiddleware, disableMangrullo); */
//----------Desarollo------------------
mangrulloRoutes.get("/name/:name", nameMangrullo);
mangrulloRoutes.get("/search", getMangrullos);
mangrulloRoutes.get("/search/:id", getIdMangrullo);
mangrulloRoutes.post("/create", upload.single("image"), postMangrullos);
mangrulloRoutes.put("/update/:id", upload.single("image"), putMangrullo);
mangrulloRoutes.put("/disable/:id", disableMangrullo);

export default mangrulloRoutes;
