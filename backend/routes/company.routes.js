import express from "express";
import {
  addCompany,
  deleteCompany,
  getAllCompanies,
} from "../controllers/company.controller.js";
import { authMiddleware, authorize } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/uploadMiddleware.js";

const companyRouter = express.Router();

// All Companies
companyRouter.get("/", getAllCompanies);

// Create Company
companyRouter.post(
  "/",
  authMiddleware,
  authorize("admin"),
  upload.single("logo"),
  addCompany,
);

// Delete Company
companyRouter.delete("/:id", authMiddleware, authorize("admin"), deleteCompany);

export default companyRouter;
