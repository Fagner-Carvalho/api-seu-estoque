import { Router } from "express";

import { ListCategoriesController } from "@modules/inventory/useCases/category/listCategories/ListCategoriesController";
import { CreateCategoryController } from "@modules/inventory/useCases/category/createCategory/CreateCategoryController";
import { UpdateCategoryController } from "@modules/inventory/useCases/category/updateCategory/UpdateCategoryController";
import { DeleteCategoryController } from "@modules/inventory/useCases/category/deleteCategory/DeleteCategoryController";
import { ShowCategoryController } from "@modules/inventory/useCases/category/showCategory/ShowCategoryController";

const categoriesRoutes = Router();

const listCategoriesController = new ListCategoriesController();;
const createCategoryController = new CreateCategoryController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();
const showCategoryController = new ShowCategoryController();

categoriesRoutes.get("/", listCategoriesController.handle);
categoriesRoutes.post("/", createCategoryController.handle);
categoriesRoutes.put("/:id", updateCategoryController.handle);
categoriesRoutes.delete("/:id", deleteCategoryController.handle);
categoriesRoutes.get("/:id", showCategoryController.handle);

export { categoriesRoutes };
