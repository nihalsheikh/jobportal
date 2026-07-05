import express from "express";
import { authMiddleware, authorize } from "../middleware/authMiddleware.js";
import {
  getResume,
  getUserProfile,
  updateUserProfile,
} from "../controllers/user.controller.js";
import { upload } from "../middleware/uploadMiddleware.js";

const userRouter = express.Router();

// User Profile
userRouter.get("/profile", authMiddleware, getUserProfile);

// Resume
userRouter.get("/resume/:id", getResume);

// Update Profile
userRouter.put(
  "/profile",
  authMiddleware,
  authorize("user"),
  upload.single("resume"),
  updateUserProfile,
);

export default userRouter;
