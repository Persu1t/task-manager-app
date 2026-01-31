import app from "./app";
import mongoose from "mongoose";
import dotenv from "dotenv";

import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"])

dotenv.config();

const PORT = 5000;
const MONGO_URI = process.env.MONGODB_URI as string;

const startServer = async () => {
  try {
    const mongooseConnection = await mongoose.connect(MONGO_URI);
    console.log(`✅ Mongoose connected to ${mongooseConnection.connection.host}:${mongooseConnection.connection.port}`);
    console.log("✅ MongoDB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server", error);
    process.exit(1);
  }
};

startServer();
