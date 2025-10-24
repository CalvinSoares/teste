import { z } from "zod";

const createUserSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome precisa de no mínimo 3 caracteres" }),
  email: z.string().email({ message: "E-mail inválido" }),
  password: z
    .string()
    .min(6, { message: "A senha precisa de no mínimo 6 caracteres" }),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

// Tipagem inferida a partir do schema para uso no controller
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type LoginInput = z.infer<typeof loginSchema>;

// Resposta pública do usuário (sem a senha)
export const userResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
});

export { createUserSchema, loginSchema };
