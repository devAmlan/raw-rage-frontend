import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(
  "postgresql://neondb_owner:npg_DzovFl9e6uyK@ep-sweet-waterfall-a80w5bl2.eastus2.azure.neon.tech/neondb?sslmode=require"
);
export const db = drizzle(sql, { schema });
