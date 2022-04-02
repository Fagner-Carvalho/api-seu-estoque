import { container } from "tsyringe";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { ItemsRepository } from "@modules/inventory/infra/typeorm/repositories/ItemsRepository";
import { IItemsRepository } from "@modules/inventory/repositories/IItemsRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IItemsRepository>(
  "ItemsRepository",
  ItemsRepository
);
