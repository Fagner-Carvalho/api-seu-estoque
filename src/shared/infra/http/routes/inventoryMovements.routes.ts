import { Router } from "express";

import { ListInventoryMovimentsController } from "@modules/inventory/useCases/inventoryMoviment/listInventoryMoviments/ListInventoryMovimentsController";
import { CreateInventoryMovimentController } from "@modules/inventory/useCases/inventoryMoviment/createInventoryMoviment/CreateInventoryMovimentController";
import { UpdateInventoryMovimentController } from "@modules/inventory/useCases/inventoryMoviment/updateInventoryMoviment/UpdateInventoryMovimentController";
import { DeleteInventoryMovimentController } from "@modules/inventory/useCases/inventoryMoviment/deleteInventoryMoviment/DeleteInventoryMovimentController";
import { ShowInventoryMovimentController } from "@modules/inventory/useCases/inventoryMoviment/showInventoryMoviment/ShowInventoryMovimentController";

const inventoryMovementsRoutes = Router();

const listInventoryMovimentsController = new ListInventoryMovimentsController();;
const createInventoryMovimentController = new CreateInventoryMovimentController();
const updateInventoryMovimentController = new UpdateInventoryMovimentController();
const deleteInventoryMovimentController = new DeleteInventoryMovimentController();
const showInventoryMovimentController = new ShowInventoryMovimentController();

inventoryMovementsRoutes.get("/", listInventoryMovimentsController.handle);
inventoryMovementsRoutes.post("/", createInventoryMovimentController.handle);
inventoryMovementsRoutes.put("/:id", updateInventoryMovimentController.handle);
inventoryMovementsRoutes.delete("/:id", deleteInventoryMovimentController.handle);
inventoryMovementsRoutes.get("/:id", showInventoryMovimentController.handle);

export { inventoryMovementsRoutes };
