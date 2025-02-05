const express = require("express");
require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const userRoutes = require("./routes/userRoutes");
const propertyRoutes = require("./routes/propertiesRoutes");

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
