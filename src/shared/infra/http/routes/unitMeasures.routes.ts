import { Router } from "express";

import { ListUnitMeasuresController } from "@modules/inventory/useCases/unitMeasure/listUnitMeasures/ListUnitMeasuresController";
import { CreateUnitMeasureController } from "@modules/inventory/useCases/unitMeasure/createUnitMeasure/CreateUnitMeasureController";
import { UpdateUnitMeasureController } from "@modules/inventory/useCases/unitMeasure/updateUnitMeasure/UpdateUnitMeasureController";
import { DeleteUnitMeasureController } from "@modules/inventory/useCases/unitMeasure/deleteUnitMeasure/DeleteUnitMeasureController";
import { ShowUnitMeasureController } from "@modules/inventory/useCases/unitMeasure/showUnitMeasure/ShowUnitMeasureController";

const unitMeasuresRoutes = Router();

const listUnitMeasuresController = new ListUnitMeasuresController();
const createUnitMeasureController = new CreateUnitMeasureController();
const updateUnitMeasureController = new UpdateUnitMeasureController();
const deleteUnitMeasureController = new DeleteUnitMeasureController();
const showUnitMeasureController = new ShowUnitMeasureController();

unitMeasuresRoutes.post("/", createUnitMeasureController.handle);
unitMeasuresRoutes.get("/", listUnitMeasuresController.handle);
unitMeasuresRoutes.put("/:id", updateUnitMeasureController.handle);
unitMeasuresRoutes.delete("/:id", deleteUnitMeasureController.handle);
unitMeasuresRoutes.get("/:id", showUnitMeasureController.handle);

export { unitMeasuresRoutes };
