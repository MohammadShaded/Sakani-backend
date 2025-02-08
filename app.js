import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import userRoutes from "./routes/userRoutes.js"; // Add .js extension
import propertyRoutes from "./routes/propertiesRoutes.js"; // Add .js extension

const app = express();

// Middleware
app.use(express.json());
// app.use(cors());
// app.use(helmet());
// app.use(morgan("dev"));// Logs HTTP requests in the console.

// Routes
app.use("/api/users", userRoutes);
app.use("/api/properties", propertyRoutes);

module.exports = app;
