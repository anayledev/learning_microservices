import fastify from "fastify";
import { prisma } from "@/lib/prisma.ts";

export const app = fastify();

app.get("/users", async (request, reply) => {
  try {
    const users = await prisma.user.findMany();
    return reply.status(200).send(users);
  } catch (error) {
    console.error(error);
    return reply.status(500).send({
      error: "internal server error",
    });
  }
});
