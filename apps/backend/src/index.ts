import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

import { mainRoute } from "./routes/main";

const app = new Hono().basePath("/api").use(cors()).use(logger());

const apiRoutes = app.route("/", mainRoute);

export default app;
export type AppType = typeof apiRoutes;
