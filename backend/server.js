import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.roues.js";
import companyRouter from "./routes/company.routes.js";
import jobRouter from "./routes/jobs.routes.js";
import applicationRouter from "./routes/application.routes.js";
import interviewRouter from "./routes/interview.routes.js";
import savedRouter from "./routes/saved.routes.js";
import inquiryRouter from "./routes/inqury.route.js";

const PORT = process.env.PORT || 5000;
const app = express();

// DB
connectDB();

// MIDDLEWARES
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"], // frontend: 5173 and admin: 5174
    credentials: true,
  }),
);

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
app.use("/api/interview", interviewRouter);
app.use("/api/application", applicationRouter);
app.use("/api/saved", savedRouter);
app.use("/api/inquiry", inquiryRouter);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
