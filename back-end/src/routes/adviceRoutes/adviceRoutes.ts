import { Router } from "express";

import { searchAdvice } from "../../controllers/advice/getAdvice/getAdvice";
import { searchIdAdvice } from "../../controllers/advice/getIdAdvice/getIdAdvice";
import { createAdvice } from "../../controllers/advice/postAdvice/postAdvice";
import { updateAdvice } from "../../controllers/advice/putAdvice/putAdvice";
import { deleteAdvice} from "../../controllers/advice/deletAdvice/deletAdvice"


const advicesRoutes = Router();

advicesRoutes.get("/search", searchAdvice);   
advicesRoutes.get("/search/:id", searchIdAdvice); 
advicesRoutes.post("/create", createAdvice); 
advicesRoutes.delete("/delet/:id", deleteAdvice); 
advicesRoutes.put("/update/:id", updateAdvice);


export default advicesRoutes;