// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { appliancesRouter } from "./applicances";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("appliances.", appliancesRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
