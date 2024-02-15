import { Router } from "express";
import { addItem } from "../../controllers/carrito/addItem/addItem";
import { createCarrito } from "../../controllers/carrito/createCarrito/createCarrito";
import { deleteCarrito } from "../../controllers/carrito/deleteCarrito/deleteCarrito";
import { deleteItem } from "../../controllers/carrito/deleteItem/deleteItem";
import { removeItem } from "../../controllers/carrito/removeItem/removeItem";
import { getCarrito } from "../../controllers/carrito/getCarrito/getCarrito";
import { updateCarrito } from "../../controllers/carrito/updateCarrito/updateCarrito";

import { adminMiddleware } from "../../middlewares/adminMiddlewares/adminMiddleware";
import { userMiddleware } from "../../middlewares/userMiddlewares/userMiddleware";
import { deleteAll } from "../../controllers/carrito/deleteAll/deleteAll";

const carRoutes = Router();
//-----------con webtokens-------------

carRoutes.get("/getCarrito/:userId", userMiddleware, getCarrito); //user
carRoutes.post("/addItem", userMiddleware, addItem); //usuario
carRoutes.post("/createCarrito", userMiddleware, createCarrito); //usuario
carRoutes.delete("/deleteItem/", userMiddleware, deleteItem); //usuario
carRoutes.delete("/deleteAll", userMiddleware, deleteAll); //usuario
carRoutes.put("/removeItem/", userMiddleware, removeItem); //usurio
carRoutes.delete("/deleteCarrito/:carritoId", adminMiddleware, deleteCarrito); //admin
carRoutes.put("/updateCarrito/:carritoId", adminMiddleware, updateCarrito); //admin

//----------Desarollo------------------
/* carRoutes.post("/addItem", addItem); //usuario
carRoutes.post("/createCarrito", createCarrito); //usuario
carRoutes.delete("/deleteCarrito/:carritoId", deleteCarrito);//admin
carRoutes.delete("/deleteItem/", deleteItem);//usuario
carRoutes.put("/removeItem/", removeItem);//usurio
carRoutes.get("/getCarrito/:userId", getCarrito);//admin por página
carRoutes.put("/updateCarrito/:carritoId", updateCarrito);//admin
 */

export default carRoutes;
