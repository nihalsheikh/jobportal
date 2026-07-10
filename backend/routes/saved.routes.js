import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
  getSavedItems,
  toggleSaveJob,
  toggleSaveQuestion,
} from "../controllers/saved.controller.js";

const savedRouter = express.Router();

savedRouter.use(authMiddleware);

// get saved items
savedRouter.get("/", getSavedItems);

// save jobs
savedRouter.post("/job/:jobId", toggleSaveJob);

// save question
savedRouter.post("/question/:questionId", toggleSaveQuestion);

export default savedRouter;
