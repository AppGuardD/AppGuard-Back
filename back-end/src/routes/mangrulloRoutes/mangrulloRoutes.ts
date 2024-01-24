import { Router } from "express";

import { searchMangrullos } from "../../controllers/mangrullo/getMangrullos/getMangrullosContll";
import { searchIdMangrullo } from "../../controllers/mangrullo/getIdMangrullo/getIdMangrulloContll";
import { createMangrullo } from "../../controllers/mangrullo/postMangrullo/postMangrulloContll";
import { modifyMangrullo } from "../../controllers/mangrullo/putMangrullo/putMangrulloContll";
import { deactivateMangrullo } from "../../controllers/mangrullo/deleteMangrullo/deleteMangrulloContll";


const mangrulloRoutes = Router();

mangrulloRoutes.get("/search", searchMangrullos);
mangrulloRoutes.get("/search/:id", searchIdMangrullo);
mangrulloRoutes.post("/create", createMangrullo);
mangrulloRoutes.put("/modify/:id", modifyMangrullo);
mangrulloRoutes.put("/deactivate/:id", deactivateMangrullo);



export default mangrulloRoutes;