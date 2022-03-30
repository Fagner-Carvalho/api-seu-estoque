import { Router } from "express";

import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserController } from "@modules/accounts/useCases/updateUser/UpdateUserController";
import { ListUsersController } from "@modules/accounts/useCases/listUsers/ListUsersController";
import { ShowUsersController } from "@modules/accounts/useCases/showUser/ShowUsersController";
import { DeleteUsersController } from "@modules/accounts/useCases/deleteUser/DeleteUsersController";


const usersRoutes = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const listUsersController = new ListUsersController();
const showUsersController = new ShowUsersController();
const deleteUsersController = new DeleteUsersController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", listUsersController.handle);
usersRoutes.get("/:id", showUsersController.handle);
usersRoutes.put("/:id", updateUserController.handle);
usersRoutes.delete("/:id", deleteUsersController.handle);

export { usersRoutes };
