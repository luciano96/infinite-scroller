import { createRouter } from "./context";
import { z } from "zod";
import { GET_APPLIANCES } from "@src/constants/endpoints";
import { getRequest } from "@src/utils/fetchWrapper";
import { Applicance } from "../types/appliances.types";
import { TRPCError } from "@trpc/server";

export const appliancesRouter = createRouter().query("getAppliances", {
  input: z.object({
    cursor: z.number().nullish(),
  }),
  output: z.object({
    data: z
      .object({
        id: z.number(),
        uid: z.string(),
        brand: z.string(),
        equipment: z.string(),
        absIdx: z.number(),
      })
      .array(),
    totalItems: z.number(),
    cursor: z.number(),
  }),
  async resolve({ input }) {
    try {
      const data: Applicance[] = await getRequest(`${GET_APPLIANCES}?size=100`);
      return {
        data: data.map((item, i) => ({
          ...item,
          absIdx: i + (input.cursor ?? 1) * 100,
        })),
        totalItems: data.length,
        cursor: input.cursor ?? 1 + 1,
      };
    } catch {
      throw new TRPCError({
        message: "API Erroed",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  },
});
