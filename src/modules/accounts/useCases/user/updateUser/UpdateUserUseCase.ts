import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRespository: IUsersRepository
  ) {}

  async execute(
  id: string, 
  {
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRespository.findById(id);

    if (!userAlreadyExists) {
      throw new AppError("User not exists!");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRespository.updateById(id, {
      name,
      email,
      password: passwordHash,
    });
  }
}

export { UpdateUserUseCase };
