import User from "../models/user.model.js";
import { handleError } from "../utils/helpers.js";

// Toggle save job
export const toggleSaveJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const userId = req.user.id;

    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const isSaved = user.savedJobs.includes(jobId);
    if (isSaved) {
      // unsave job
      user.savedJobs = user.savedJobs.filter((id) => id.toString() !== jobId);
    } else {
      // save job
      user.savedJobs.push(jobId);
    }

    await user.save();

    return res.status(200).json({
      success: true,
      message: isSaved
        ? "Removed from your saved jobs"
        : "Added to your saved jobs",
      savedJobs: user.savedJobs,
    });
  } catch (error) {
    console.error("Error saving job:", error);
    handleError(res, error);
  }
};

// Toggle save question
export const toggleSaveQuestion = async (req, res) => {
  try {
    const { questionId } = req.params;
    const { type } = req.query; // type for role or interview
    const userId = req.user.id;

    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(200)
        .json({ success: false, message: "User not found" });
    }

    let isSaved;
    let message;

    if (type === "role") {
      isSaved = user.savedRoleQuestions.includes(questionId);
      if (isSaved) {
        // unsave role question
        user.savedRoleQuestions = user.savedRoleQuestions.filter(
          (id) => id.toString() !== questionId,
        );
        message = "Removed from your saved role questions.";
      } else {
        // save role question
        user.savedRoleQuestions.push(questionId);
        message = "Added to your saved role questions.";
      }
    } else {
      // default type === "interview"
      isSaved = user.savedInterviewQuestions.includes(questionId);
      if (isSaved) {
        // unsave interview question
        user.savedInterviewQuestions = user.savedInterviewQuestions.filter(
          (id) => id.toString() !== questionId,
        );
        message = "Removed from your saved interview questions.";
      } else {
        // save interview question
        user.savedInterviewQuestions.push(questionId);
        message = "Added to your saved interview questions.";
      }
    }

    await user.save();

    return res.status(200).json({
      success: true,
      message: message,
      savedInterviewQuestions: user.savedInterviewQuestions,
      savedRoleQuestions: user.savedRoleQuestions,
    });
  } catch (error) {
    console.error("Error saving question:", error);
    handleError(res, error);
  }
};

// Get all the saved items
export const getSavedItems = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId)
      .populate("savedJobs")
      .populate({
        path: "savedInterviewQuestions",
        populate: { path: "company" },
      })
      .populate({
        path: "savedRoleQuestions",
        populate: { path: "roleId" },
      });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    return res.status(200).json({
      success: true,
      savedJobs: user.savedJobs,
      savedInterviewQuestions: user.savedInterviewQuestions,
      savedRoleQuestions: user.savedRoleQuestions,
    });
  } catch (error) {
    console.error("Error fetching saved items:", error);
    handleError(res, error);
  }
};
