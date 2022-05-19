import { container } from "tsyringe";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { ItemsRepository } from "@modules/inventory/infra/typeorm/repositories/ItemsRepository";
import { IItemsRepository } from "@modules/inventory/repositories/IItemsRepository";
import { ICategoriesRepository } from "@modules/inventory/repositories/ICategoriesRepository";
import { CategoriesRepository } from "@modules/inventory/infra/typeorm/repositories/CategoriesRepository";
import { IUnitMeasuresRepository } from "@modules/inventory/repositories/IUnitMeasuresRepository";
import { UnitMeasuresRepository } from "@modules/inventory/infra/typeorm/repositories/UnitMeasuresRepository";
import { ISuppliersRepository } from "@modules/suppliers/repositories/ISuppliersRepository";
import { SuppliersRepository } from "@modules/suppliers/infra/typeorm/repositories/SuppliersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IItemsRepository>(
  "ItemsRepository",
  ItemsRepository
);

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<IUnitMeasuresRepository>(
  "UnitMeasuresRepository",
  UnitMeasuresRepository
);

container.registerSingleton<ISuppliersRepository>(
  "SuppliersRepository",
  SuppliersRepository
);
