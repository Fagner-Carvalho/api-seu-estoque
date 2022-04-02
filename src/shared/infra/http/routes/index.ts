import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { usersRoutes } from "./users.routes";
import { itemsRoutes } from "./items.routes";

const router = Router();

router.use(authenticateRoutes);
router.use("/users", usersRoutes);
router.use("/items", itemsRoutes);

export { router };
