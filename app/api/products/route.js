import pool from "@/lib/db";
import { getCache, setCache } from "@/lib/cache";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = 20;
    const offset = (page - 1) * limit;

    let result;
    let cacheKey;

    if (category) {
      cacheKey = ["products", "category", category];
    } else {
      cacheKey = ["products", "page", page.toString()];
    }

    const cached = await getCache(cacheKey);
    if (cached) {
      return new Response(JSON.stringify(cached), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    // 🐢 Fetch from database
    if (category) {
      result = await pool.query(
        "SELECT * FROM furniture WHERE category = $1 ORDER BY product_id",
        [category]
      );
    } else {
      result = await pool.query(
        "SELECT * FROM furniture ORDER BY product_id LIMIT $1 OFFSET $2",
        [limit, offset]
      );
    }

    const data = result.rows;

    await setCache(cacheKey, data, 3600);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Database error:", error);
    return new Response(
      JSON.stringify({ error: "Database error", details: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
