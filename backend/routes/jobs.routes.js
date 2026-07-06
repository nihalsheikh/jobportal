import express from "express";
import { authMiddleware, authorize } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/uploadMiddleware.js";
import {
  closeJob,
  createJob,
  deleteJob,
  getAllJobs,
  getDashboardStats,
  getJobById,
  getJobsByAdmin,
  updateJob,
} from "../controllers/job.controller.js";

const jobRouter = express.Router();

// Create a Job
jobRouter.post(
  "/",
  authMiddleware,
  authorize("admin"),
  upload.single("companyLogo"),
  createJob,
);

// Get All Jobs (admin)
jobRouter.get(
  "/admin/jobs",
  authMiddleware,
  authorize("admin"),
  getJobsByAdmin,
);

// Dashboard Stats (admin)
jobRouter.get(
  "/admin/stats",
  authMiddleware,
  authorize("admin"),
  getDashboardStats,
);

// Get All Jobs
jobRouter.get("/", getAllJobs);

// Single Job
jobRouter.get("/:id", getJobById);

// Update Job
jobRouter.put(
  "/:id",
  authMiddleware,
  authorize("admin"),
  upload.single("companyLogo"),
  updateJob,
);

// Delete Job
jobRouter.delete("/:id", authMiddleware, authorize("admin"), deleteJob);

// Close Job
jobRouter.patch("/:id/close", authMiddleware, authorize("admin"), closeJob);

export default jobRouter;
