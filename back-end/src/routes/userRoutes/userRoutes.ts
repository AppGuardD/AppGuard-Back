import { Router } from "express";
import { getUsers } from "../../controllers/user/getUsers/getUser";
import { getIdUser } from "../../controllers/user/getIdUser/getIdUser";
import { postUser } from "../../controllers/user/postUser/postUser";
import { putUser } from "../../controllers/user/putUser/putUser";
import { disableUser } from "../../controllers/user/disableUser/disableUser";

const userRoutes = Router();

userRoutes.get("/search", getUsers);
userRoutes.get("/search/:id", getIdUser);
userRoutes.post("/create", postUser);
userRoutes.put("/update/:id", putUser);
userRoutes.put("/disable/:id", disableUser);

export default userRoutes;