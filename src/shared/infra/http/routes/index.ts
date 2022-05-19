import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { usersRoutes } from "./users.routes";
import { itemsRoutes } from "./items.routes";
import { categoriesRoutes } from "./categories.routes";
import { unitMeasuresRoutes } from "./unitMeasures.routes";
import { suppliersRoutes } from "./suppliers.routes";

const router = Router();

router.use(authenticateRoutes);
router.use("/users", usersRoutes);
router.use("/items", itemsRoutes);
router.use("/categories", categoriesRoutes);
router.use("/unitMeasures", unitMeasuresRoutes);
router.use("/suppliers", suppliersRoutes);

export { router };
