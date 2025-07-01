// lib/db.js
import { Pool } from "pg";

const globalForPool = globalThis;

let pool;

if (!globalForPool.pgPool) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  globalForPool.pgPool = pool;
} else {
  pool = globalForPool.pgPool;
}

export default pool;
