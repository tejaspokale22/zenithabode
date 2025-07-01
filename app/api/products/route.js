import pool from "@/lib/db";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const category = searchParams.get("category");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = 20;
    const offset = (page - 1) * limit;

    let result;

    if (category) {
      // ✅ Category is present — return all products in that category (no pagination)
      result = await pool.query(
        "SELECT * FROM furniture WHERE category = $1 ORDER BY product_id",
        [category]
      );
    } else {
      // ✅ Page is used — return paginated products
      result = await pool.query(
        "SELECT * FROM furniture ORDER BY product_id LIMIT $1 OFFSET $2",
        [limit, offset]
      );
    }

    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Database error:", error);

    return new Response(
      JSON.stringify({ error: "Database error", details: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
