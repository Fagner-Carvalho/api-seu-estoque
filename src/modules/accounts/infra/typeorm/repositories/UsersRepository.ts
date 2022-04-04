import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    email,
    password,
    id,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      email,
      password,
      id,
    });

    await this.repository.save(user);

    return user;
  }

  async updateById(
    id: string,
    {
      name,
      email,
      password,
    }: ICreateUserDTO
  ): Promise<void> {
    await this.repository.update(id, { name, email, password });
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }

  async findAll(): Promise<User[]> {
    const user = await this.repository.find();
    return user;
  }

  async delete(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }

}

export { UsersRepository };
