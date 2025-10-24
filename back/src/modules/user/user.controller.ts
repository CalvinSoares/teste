import { FastifyReply, FastifyRequest } from "fastify";
import { compare } from "bcryptjs";
import { CreateUserInput, LoginInput } from "./user.schema";
import { createUser, findUserByEmail } from "./user.service";

export async function registerUserHandler(
  request: FastifyRequest<{ Body: CreateUserInput }>,
  reply: FastifyReply
) {
  const body = request.body;

  try {
    const user = await createUser(body);
    return reply.code(201).send(user);
  } catch (e: any) {
    // Erro de e-mail duplicado
    if (e.code === "P2002" && e.meta?.target?.includes("email")) {
      return reply.code(409).send({ message: "E-mail já está em uso." });
    }
    console.error(e);
    return reply.code(500).send({ message: "Erro interno do servidor." });
  }
}

export async function loginHandler(
  request: FastifyRequest<{ Body: LoginInput }>,
  reply: FastifyReply
) {
  const { email, password } = request.body;

  // 1. Encontrar o usuário pelo email
  const user = await findUserByEmail(email);
  if (!user) {
    return reply.code(401).send({ message: "Credenciais inválidas." });
  }

  // 2. Verificar a senha
  const isPasswordCorrect = await compare(password, user.password);
  if (!isPasswordCorrect) {
    return reply.code(401).send({ message: "Credenciais inválidas." });
  }

  // 3. Gerar o token JWT
  const { password: _, ...userPayload } = user; // remove a senha do payload
  const token = await reply.jwtSign(userPayload);

  return { token };
}
