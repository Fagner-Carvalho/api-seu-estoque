import { Router } from "express";

import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserController } from "@modules/accounts/useCases/updateUser/UpdateUserController";
import { ListUsersController } from "@modules/accounts/useCases/listUsers/ListUsersController";
import { ShowtUsersController } from "@modules/accounts/useCases/showUser/ShowUsersController";


const usersRoutes = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const listUsersController = new ListUsersController();
const showUsersController = new ShowtUsersController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", listUsersController.handle);
usersRoutes.get("/:id", showUsersController.handle);
usersRoutes.put("/:id", updateUserController.handle);

export { usersRoutes };
