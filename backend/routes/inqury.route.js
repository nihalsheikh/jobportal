import express from "express";
import { submitInquiry } from "../controllers/inquiry.controller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const inquiryRouter = express.Router();

inquiryRouter.use(authMiddleware);

// submit inquiry
inquiryRouter.post("/", submitInquiry);

export default inquiryRouter;
