import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { ListUsersUseCase } from "./ListUsersUseCase";

let listUsersUseCase: ListUsersUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe("List Users", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    listUsersUseCase = new ListUsersUseCase(usersRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    const user = await usersRepositoryInMemory.create({
      name: 'User 1',
      password: "user123",
      email: 'user1@mail.com.br'
    });

    const users = await listUsersUseCase.execute();
    console.log(users);

    expect(users).toEqual([user])
  });
});