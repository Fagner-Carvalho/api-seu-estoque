import { Router } from "express";

import { CreateItemController } from "@modules/inventory/useCases/createItem/CreateItemController";
import { ListItemsController } from "@modules/inventory/useCases/listItems/ListItemsController";
import { UpdateItemController } from "@modules/inventory/useCases/updateItem/UpdateItemController";
import { DeleteItemController } from "@modules/inventory/useCases/deleteItem/DeleteItemController";
import { ShowItemController } from "@modules/inventory/useCases/showItem/ShowItemController";

const itemsRoutes = Router();

const createItemController = new CreateItemController();
const listItemsController = new ListItemsController();
const updateItemController = new UpdateItemController();
const deleteItemController = new DeleteItemController();
const showItemController = new ShowItemController();

itemsRoutes.post("/", createItemController.handle);
itemsRoutes.get("/", listItemsController.handle);
itemsRoutes.put("/:id", updateItemController.handle);
itemsRoutes.delete("/:id", deleteItemController.handle);
itemsRoutes.get("/:id", showItemController.handle);


export { itemsRoutes };
