import { Router } from "express";
import { getCars } from "../../controllers/car/getCars/getCars";
import { postCar } from "../../controllers/car/postCar/postCar";
import { deleteCar } from "../../controllers/car/deleteCar/deleteCar";
import { allDeleteCars } from "../../controllers/car/allDeleteCars/allDeleteCars";

import { adminMiddleware } from "../../middlewares/adminMiddlewares/adminMiddleware";
import { userMiddleware } from "../../middlewares/userMiddlewares/userMiddleware";

const carRoutes = Router();
//-----------con webtokens-------------
// carRoutes.get("search", adminMiddleware, getCars);
// carRoutes.post("create", userMiddleware, postCar);
// carRoutes.delete("delete/:id", userMiddleware, deleteCar);
// carRoutes.delete("allDelete", userMiddleware, allDeleteCars);


//----------Desarollo------------------
carRoutes.get("/search", getCars);
carRoutes.post("/create", postCar);
carRoutes.delete("/delete/:id", deleteCar);
carRoutes.delete("/allDelete", allDeleteCars);


export default carRoutes;