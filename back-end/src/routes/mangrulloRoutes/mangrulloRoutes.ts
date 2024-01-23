import { Router } from "express";

import { searchMangrullos } from "../../controllers/mangrullo/getMangrullos/getMangrullosContll";
import { searchIdMangrullo } from "../../controllers/mangrullo/getIdMangrullo/getIdMangrulloContll";


const mangrulloRoutes = Router();

mangrulloRoutes.get("/search", searchMangrullos);
mangrulloRoutes.get("/search/:id", searchIdMangrullo);
// mangrulloRoutes.get("/search", searchMangrullos);
// mangrulloRoutes.get("/search", searchMangrullos);
// mangrulloRoutes.get("/search", searchMangrullos);



export default mangrulloRoutes;