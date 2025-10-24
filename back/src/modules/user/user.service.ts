import { hash } from "bcryptjs";
import { prisma } from "../../lib/prisma";
import { CreateUserInput } from "./user.schema";

export async function createUser(input: CreateUserInput) {
  const { name, email, password } = input;

  const hashedPassword = await hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
    // Retorna o usuário sem o campo da senha
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  return user;
}

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}
