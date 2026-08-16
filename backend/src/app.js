import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import brewRoutes from "../src/routes/brewRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// app.use("/api/brews", brewRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Coffee Brew API is running!",
  });
});

// Brew API routes
app.use("/api/brews", brewRoutes);

export default app;
