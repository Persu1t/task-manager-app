import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.routes";


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/health", healthRoutes);


export default app;
