import express from "express";
import {
  signup,
  verifyEmail,
  signin,
  forgotPassword,
  resetPassword,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

// Signup
authRouter.post("/signup", signup);

// Email Verification
authRouter.post("/verify-email", verifyEmail);

// Signin
authRouter.post("/signin", signin);

// Forgot Password
authRouter.post("/forgot-password", forgotPassword);

// Reset Password
authRouter.post("/reset-password", resetPassword);

export default authRouter;
