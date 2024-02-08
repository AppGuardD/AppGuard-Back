import { Router } from "express";
import { preload } from "../../controllers/preloadCont/preloadContr";

const preloadRoutes = Router();
//-----------con webtokens-------------
//preloadRoutes.get("/preload", preload);

//----------Desarollo------------------

preloadRoutes.get("/preload", preload);


export default preloadRoutes;
