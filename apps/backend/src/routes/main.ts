import { Hono } from "hono";

export const mainRoute = new Hono().get("/", (c) =>
  c.json({ message: "Hello from hono" })
);
