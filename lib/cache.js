import valkeyClient from "@/valkey.js";

export async function setCache(keyParts, value, ttl = 3600) {
  const key = keyParts.join(":");
  await valkeyClient.setex(key, ttl, JSON.stringify(value));
}

export async function getCache(keyParts) {
  const key = keyParts.join(":");
  const data = await valkeyClient.get(key);
  return data ? JSON.parse(data) : null;
}
