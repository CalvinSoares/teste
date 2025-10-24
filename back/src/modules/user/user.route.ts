import { FastifyInstance } from "fastify";
import { registerUserHandler, loginHandler } from "./user.controller";
import { z } from "zod";

import {
  createUserSchema,
  loginSchema,
  userResponseSchema,
} from "./user.schema";

async function userRoutes(server: FastifyInstance) {
  server.post(
    "/register",
    {
      schema: {
        body: createUserSchema,
        response: {
          201: userResponseSchema,
        },
      },
    },
    registerUserHandler
  );

  server.post(
    "/login",
    {
      schema: {
        body: loginSchema,
        response: {
          200: z.object({ token: z.string() }),
        },
      },
    },
    loginHandler
  );
}

export default userRoutes;
