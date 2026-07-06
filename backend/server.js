import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.roues.js";
import companyRouter from "./routes/company.routes.js";
import jobRouter from "./routes/jobs.routes.js";

const PORT = process.env.PORT || 5000;
const app = express();

// DB
connectDB();

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// ROUTES
app.get("/", (req, res) => {
  res.send("API Working");
});

app.use("/uploads", express.static("uploads"));

// Auth Routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/company", companyRouter);
app.use("/api/job", jobRouter);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
