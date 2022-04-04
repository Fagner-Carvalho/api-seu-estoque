import { Router } from "express";

import { ListUnitMeasuresController } from "@modules/inventory/useCases/listUnitMeasures/ListUnitMeasuresController";

const unitMeasuresRoutes = Router();

const listUnitMeasuresController = new ListUnitMeasuresController();

unitMeasuresRoutes.get("/", listUnitMeasuresController.handle);

export { unitMeasuresRoutes };
