import { User } from "@modules/accounts/infra/typeorm/entities/User";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {

  async create({
    name,
    password,
    email,
  }: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      name,
      password,
      email,
    });

    this.users.push(user);

    return user
  }

  updateById(id: string, data: ICreateUserDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }

  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }

  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  users: User[] = [];
}

export { UsersRepositoryInMemory };
