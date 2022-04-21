import { Router } from "express";

import { ListCategoriesController } from "@modules/inventory/useCases/category/listCategories/ListCategoriesController";

const categoriesRoutes = Router();

const listCategoriesController = new ListCategoriesController();

categoriesRoutes.get("/", listCategoriesController.handle);

export { categoriesRoutes };
