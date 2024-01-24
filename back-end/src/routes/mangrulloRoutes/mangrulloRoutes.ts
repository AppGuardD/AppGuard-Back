import { Router } from "express";
import { getMangrullos } from "../../controllers/mangrullo/getMangrullos/getMangrullos";
import { getIdMangrullo } from "../../controllers/mangrullo/getIdMangrullo/getIdMangrullo";
import { putMangrullo } from "../../controllers/mangrullo/putMangrullo/putMangrullo";
import { postMangrullos } from "../../controllers/mangrullo/postMangrullo/postMangrullo";
import { disableMangrullo } from "../../controllers/mangrullo/disableMangrullo/disableMangrullo";

const mangrulloRoutes = Router();

mangrulloRoutes.get("/search", getMangrullos);
mangrulloRoutes.get("/search/:id", getIdMangrullo);
mangrulloRoutes.post("/create", postMangrullos);
mangrulloRoutes.put("/modify/:id", putMangrullo);
mangrulloRoutes.put("/deactivate/:id", disableMangrullo);

export default mangrulloRoutes;

