import { Router } from "express";

import { ListCategoriesController } from "@modules/inventory/useCases/listCategories/ListCategoriesController";

const categoriesRoutes = Router();

const listCategoriesController = new ListCategoriesController();

categoriesRoutes.get("/", listCategoriesController.handle);

export { categoriesRoutes };
