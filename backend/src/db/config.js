import { config as conf } from "dotenv";
conf();

const _config = {
  port: process.env.PORT || 5000,
  corsOrigin: process.env.CORS_ORIGIN,
  databaseUrl: process.env.MONGODB_URI,
  upstashUrl: process.env.UPSTASH_REDIS_URL,
  azure_translate_api_key: process.env.AZURE_TRANSLATOR_API_KEY,
  azure_translator_endpoint: process.env.AZURE_TRANSLATOR_ENDPOINT,
};

export const config = Object.freeze(_config);
