import { hc } from "hono/client";
import { AppType } from ".";

export const { api } = hc<AppType>("http://localhost:3000");
