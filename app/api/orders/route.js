import pool from "@/lib/db";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone_no, email, address, products, total_cost } = body;

    // Basic validation
    if (
      !name ||
      !phone_no ||
      !Array.isArray(products) ||
      products.length === 0
    ) {
      return new Response(
        JSON.stringify({
          error: "Name, phone number, and products are required.",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Insert user if not exists
    await pool.query(
      `INSERT INTO users (phone_no, name)
       VALUES ($1, $2)
       ON CONFLICT (phone_no) DO NOTHING;`,
      [phone_no.trim(), name.trim()]
    );

    // Insert order
    const orderQuery = `
      INSERT INTO orders (name, phone_no, email, address, products, total_cost)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
    const orderValues = [
      name.trim(),
      phone_no.trim(),
      email ? email.trim() : null,
      address ? address.trim() : null,
      JSON.stringify(products),
      Number(Number(total_cost).toFixed(2)), // ensure numeric(10,2)
    ];
    const { rows } = await pool.query(orderQuery, orderValues);
    const savedOrder = rows[0];

    return new Response(JSON.stringify({ success: true, data: savedOrder }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error placing order:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
