import Redis from "ioredis";
import { config } from "./config.js";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(config.upstashUrl);

redis
  .ping()
  .then(() => console.log("✅ Redis is successfully connected!"))
  .catch((err) => console.error("❌ Redis connection error:", err));
