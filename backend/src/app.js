import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import brewRoutes from '../src/routes/BrewRoutes'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/brews", brewRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Coffee Brew API is running!",
  });
});

export default app;