import express from "express";
import { authMiddleware, authorize } from "../middleware/authMiddleware.js";
import { applyJob } from "../controllers/application.controller.js";
import {
  getAllApplicants,
  getUserApplications,
} from "../controllers/application.controller.js";

const applicationRouter = express.Router();

// Apply to a Job
applicationRouter.post("/apply/:id", authMiddleware, applyJob);

// Get User Applications
applicationRouter.get("/user", authMiddleware, getUserApplications);

// Get Applicants (admin)
applicationRouter.get(
  "/:id/applicants",
  authMiddleware,
  authorize("admin"),
  getAllApplicants,
);

export default applicationRouter;
