import Redis from "ioredis";

const redisUrl = process.env.VALKEY_URL;

if (!redisUrl) {
  throw new Error("❌ VALKEY_URL is not defined in environment variables");
}

console.log("🔧 Connecting to Valkey...");

const valkeyClient = new Redis(redisUrl, {
  tls: redisUrl.startsWith("rediss://") ? {} : undefined,
});

valkeyClient.on("connect", () => {
  console.log("✅ Valkey connected successfully");
});

valkeyClient.on("error", (err) => {
  console.error("❌ Valkey connection error:", err);
});

export default valkeyClient;
