import { Router } from "express";
import { getUsers } from "../../controllers/user/getUsers/getUser";
import { getIdUser } from "../../controllers/user/getIdUser/getIdUser";
import { postUser } from "../../controllers/user/postUser/postUser";
import { putUser } from "../../controllers/user/putUser/putUser";
import { disableUser } from "../../controllers/user/disableUser/disableUser";
import { adminMiddleware } from "../../middlewares/adminMiddlewares/adminMiddleware";
import { userMiddleware } from "../../middlewares/userMiddlewares/userMiddleware";
import { rolUser } from "../../controllers/user/rolUser/rolUser";

const userRoutes = Router();
//-----------con webtokens-------------
userRoutes.post("/create", postUser);
userRoutes.get("/search", adminMiddleware, getUsers);
userRoutes.get("/search/:id", userMiddleware, getIdUser);
userRoutes.put("/update/:id", userMiddleware, putUser);
userRoutes.put("/disable/:id", adminMiddleware, disableUser);
userRoutes.put("/rol/:id", adminMiddleware, rolUser);
//----------Desarollo------------------
/* userRoutes.get("/search", getUsers);
userRoutes.get("/search/:id", getIdUser);
userRoutes.post("/create", postUser);
userRoutes.put("/update/:id", putUser);
userRoutes.put("/disable/:id", disableUser);
 */

export default userRoutes;
