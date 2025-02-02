import mongoose from "mongoose";
import { config } from "./config.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(config.databaseUrl);

    console.log(`✅ MongoDB Connected: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
