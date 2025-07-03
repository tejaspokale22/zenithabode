import pool from "@/lib/db";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, mobile, message } = body;

    // Basic validation
    if (!name || !email || !mobile || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const query = `
      INSERT INTO contact (name, email, mobile, message)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [name.trim(), email.trim(), mobile.trim(), message.trim()];

    const { rows } = await pool.query(query, values);
    const savedContact = rows[0];

    return new Response(JSON.stringify({ success: true, data: savedContact }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error inserting contact:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
