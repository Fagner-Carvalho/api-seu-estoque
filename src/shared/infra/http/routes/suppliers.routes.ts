import { Router } from "express";

import { ListSuppliersController } from "@modules/suppliers/useCases/suppliers/listSuppliers/ListSuppliersController";
import { CreateSupplierController } from "@modules/suppliers/useCases/suppliers/createSupplier/CreateSupplierController";
import { UpdateSupplierController } from "@modules/suppliers/useCases/suppliers/updateSupplier/UpdateSupplierController";
import { DeleteSupplierController } from "@modules/suppliers/useCases/suppliers/deleteSupplier/DeleteSupplierController";
import { ShowSupplierController } from "@modules/suppliers/useCases/suppliers/showSupplier/ShowSupplierController";

const suppliersRoutes = Router();

const listSuppliersController = new ListSuppliersController();;
const createSupplierController = new CreateSupplierController();
const updateSupplierController = new UpdateSupplierController();
const deleteSupplierController = new DeleteSupplierController();
const showSupplierController = new ShowSupplierController();

suppliersRoutes.get("/", listSuppliersController.handle);
suppliersRoutes.post("/", createSupplierController.handle);
suppliersRoutes.put("/:id", updateSupplierController.handle);
suppliersRoutes.delete("/:id", deleteSupplierController.handle);
suppliersRoutes.get("/:id", showSupplierController.handle);

export { suppliersRoutes };
