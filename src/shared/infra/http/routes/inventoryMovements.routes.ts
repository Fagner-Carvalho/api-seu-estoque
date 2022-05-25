import { Router } from "express";

import { ListInventoryMovimentsController } from "@modules/inventory/useCases/inventoryMoviment/listInventoryMoviments/ListInventoryMovimentsController";
import { CreateInventoryMovimentController } from "@modules/inventory/useCases/inventoryMoviment/createInventoryMoviment/CreateInventoryMovimentController";
import { UpdateInventoryMovimentController } from "@modules/inventory/useCases/inventoryMoviment/updateInventoryMoviment/UpdateInventoryMovimentController";
import { DeleteInventoryMovimentController } from "@modules/inventory/useCases/inventoryMoviment/deleteInventoryMoviment/DeleteInventoryMovimentController";
import { ShowInventoryMovimentController } from "@modules/inventory/useCases/inventoryMoviment/showInventoryMoviment/ShowInventoryMovimentController";
import { ReportInventoryValuePerItemController } from "@modules/inventory/useCases/inventoryMoviment/reportInventoryValuePerItem/ReportInventoryValuePerItemController";
import { ReportInventoryQuantityController } from "@modules/inventory/useCases/inventoryMoviment/reportInventoryQuantity/ReportInventoryValuePerItemController";

const inventoryMovementsRoutes = Router();
const reportInventoryValuePerItemRoutes = Router();
const reportInventoryQuantityRoutes = Router();

const listInventoryMovimentsController = new ListInventoryMovimentsController();;
const createInventoryMovimentController = new CreateInventoryMovimentController();
const updateInventoryMovimentController = new UpdateInventoryMovimentController();
const deleteInventoryMovimentController = new DeleteInventoryMovimentController();
const showInventoryMovimentController = new ShowInventoryMovimentController();
const reportInventoryValuePerItemController = new ReportInventoryValuePerItemController();
const reportInventoryQuantityController = new ReportInventoryQuantityController()

inventoryMovementsRoutes.get("/", listInventoryMovimentsController.handle);
inventoryMovementsRoutes.post("/", createInventoryMovimentController.handle);
inventoryMovementsRoutes.put("/:id", updateInventoryMovimentController.handle);
inventoryMovementsRoutes.delete("/:id", deleteInventoryMovimentController.handle);
inventoryMovementsRoutes.get("/:id", showInventoryMovimentController.handle);
reportInventoryValuePerItemRoutes.get("/", reportInventoryValuePerItemController.handle);
reportInventoryQuantityRoutes.get("/", reportInventoryQuantityController.handle);

export { inventoryMovementsRoutes, reportInventoryValuePerItemRoutes, reportInventoryQuantityRoutes };
