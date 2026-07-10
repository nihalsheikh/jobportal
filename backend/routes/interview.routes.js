import express from "express";
import {
  getInterviewRoles,
  getQuestionsbyRole,
  addInterviewRole,
  updateInterviewRole,
  deleteInterviewRole,
  getInterviewCompanies,
  getInterviewQuestionsByCompany,
  addInterviewCompany,
  updateInterviewCompany,
  deleteInterviewCompany,
} from "../controllers/interview.controller.js";
import { authMiddleware, authorize } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/uploadMiddleware.js";

const interviewRouter = express.Router();

// get interview roles
interviewRouter.get("/roles", getInterviewRoles);

// get questions by particular role
interviewRouter.get("/role/:roleId", getQuestionsbyRole);

// add role
interviewRouter.post(
  "/role",
  authMiddleware,
  authorize("admin"),
  upload.fields([
    { name: "imageFile", maxCount: 1 },
    { name: "csvFile", maxCount: 1 },
  ]),
  addInterviewRole,
);

// update role
interviewRouter.put(
  "role/:roleId",
  authMiddleware,
  authorize("admin"),
  upload.fields([
    { name: "imageFile", maxCount: 1 },
    { name: "csvFile", maxCount: 1 },
  ]),
  updateInterviewRole,
);

// delete role
interviewRouter.delete(
  "/role/:roleId",
  authMiddleware,
  authorize("admin"),
  deleteInterviewRole,
);

// get a company
interviewRouter.get("/companies", getInterviewCompanies);

// get interview questions by a company
interviewRouter.get("/company/:companyId", getInterviewQuestionsByCompany);

// create company
interviewRouter.post(
  "/",
  authMiddleware,
  authorize("admin"),
  upload.fields([
    { name: "logoFile", maxCount: 1 },
    { name: "csvFile", maxCount: 1 },
  ]),
  addInterviewCompany,
);

// update company
interviewRouter.put(
  "/:companyId",
  authMiddleware,
  authorize("admin"),
  upload.fields([
    { name: "logoFile", maxCount: 1 },
    { name: "csvFile", maxCount: 1 },
  ]),
  updateInterviewCompany,
);

// delete company
interviewRouter.delete(
  "/:companyId",
  authMiddleware,
  authorize("admin"),
  deleteInterviewCompany,
);

export default interviewRouter;
