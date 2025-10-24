import Fastify from "fastify";
import fastifyJwt from "@fastify/jwt";
import fastifyCors from "@fastify/cors";
import { z } from "zod";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import "dotenv/config";

import userRoutes from "./modules/user/user.route";

async function buildServer() {
  const server = Fastify({
    logger: true,
  });

  server.setValidatorCompiler(validatorCompiler);
  server.setSerializerCompiler(serializerCompiler);

  const port = parseInt(process.env.SERVER_PORT || "3333", 10);
  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    server.log.error("JWT_SECRET não está definido no .env");
    process.exit(1);
  }

  await server.register(fastifyCors, {
    origin: "*",
  });

  await server.register(fastifyJwt, {
    secret: jwtSecret,
    sign: {
      expiresIn: "1d",
    },
  });

  server.get("/healthcheck", async () => {
    return { status: "OK" };
  });

  await server.register(userRoutes, { prefix: "/api/users" });

  try {
    await server.listen({ port: port, host: "0.0.0.0" });
    console.log(`Servidor rodando na porta daora ${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }

  return server;
}

buildServer();
