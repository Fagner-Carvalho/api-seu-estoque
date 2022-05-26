import { Router } from "express";

import { CreateItemController } from "@modules/inventory/useCases/item/createItem/CreateItemController";
import { ListItemsController } from "@modules/inventory/useCases/item/listItems/ListItemsController";
import { UpdateItemController } from "@modules/inventory/useCases/item/updateItem/UpdateItemController";
import { DeleteItemController } from "@modules/inventory/useCases/item/deleteItem/DeleteItemController";
import { ShowItemController } from "@modules/inventory/useCases/item/showItem/ShowItemController";

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
