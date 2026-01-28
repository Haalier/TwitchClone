import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../lib/generated/prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
  var adapter: PrismaPg | undefined;
}
const connectionString = process.env.DATABASE_URL || "";
const adapter = globalThis.adapter || new PrismaPg({ connectionString });

export const db = globalThis.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalThis.adapter = adapter;
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
