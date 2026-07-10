import InterviewCompany from "../models/interviewCompany.model.js";
import InterviewQuestion from "../models/interviewQuestion.model.js";
import InterviewRole from "../models/interviewRole.model.js";
import RoleQuestion from "../models/roleQuestion.model.js";
import {
  handleError,
  parseQuestions,
  replaceQuestions,
  uploadFiles,
} from "../utils/helpers.js";

// INTERVIEW QUESTIONS
// Add Interview Company
export const addInterviewCompany = async (req, res) => {
  try {
    const { companyName, questionsCount, questionsData } = req.body;
    if (!companyName || !questionsCount || !questionsData) {
      return res
        .status(400)
        .json({ success: false, message: "Required fields are missing" });
    }

    const exists = await InterviewCompany.findOne({ companyName });
    if (exists) {
      return res
        .status(400)
        .json({ success: false, message: "Company already exists" });
    }

    const uploads = await uploadFiles(req.files, {
      logoFile: { folder: "jobportal/logos", type: "image" },
      csvFile: { folder: "jobportal/csv", type: "raw" },
    });

    const company = await InterviewCompany.create({
      companyName,
      logo: uploads.logoFile || "",
      questionsCount,
      csvFileUrl: uploads.csvFile || "",
      createdBy: req.user.id,
    });

    if (questionsData) {
      const formatted = parseQuestions(
        questionsData,
        "company",
        company._id,
        req.user.id,
      );

      await InterviewQuestion.insertMany(formatted);
    }

    res.status(201).json({ success: true, company });
  } catch (error) {
    console.error("Error adding Interview Company:", error);
    handleError(res, error);
  }
};

// Get Company with Interview Questions
export const getInterviewCompanies = async (req, res) => {
  try {
    const companies = await InterviewCompany.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, companies });
  } catch (error) {
    console.error("Error fetching Interview Companies:", error);
    handleError(res, error);
  }
};

// Get Questions for a company
export const getInterviewQuestionsByCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
    const [company, questions] = await Promise.all([
      InterviewCompany.findById(companyId),
      InterviewQuestion.find({ company: companyId }).sort({ createdAt: -1 }),
    ]);

    res.status(200).json({ success: true, comapny, questions });
  } catch (error) {
    console.error("Error fetching Questions for a company:", error);
    handleError(res, error);
  }
};

// Update Interview Company
export const updateInterviewCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
    const { companyName, questionsCount, questionsData } = req.body;

    const company = await InterviewCompany.findById(companyId);
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    if (companyName) company.companyName = companyName;
    if (questionsCount) company.questionsCount = questionsCount;

    // update logo and csv files
    const uploads = await uploadFiles(req.files, {
      logoFile: { folder: "jobportal/logos", type: "image" },
      csvFile: { folder: "jobportal/csv", type: "raw" },
    });

    if (uploads.logoFile) company.logo = uploads.logoFile;
    if (uploads.csvFile) company.csvFileUrl = uploads.csvFile;

    await company.save();

    if (questionsData) {
      const formatted = parseQuestions(
        questionsData,
        "company",
        company._id,
        req.user.id,
      );

      await replaceQuestions(
        InterviewQuestion,
        { company: companyId },
        formatted,
      );
    }

    res.status(200).json({ success: true, company });
  } catch (error) {
    console.error("Error updating Interview Company:", error);
    handleError(res, error);
  }
};

// Delete the company question
export const deleteInterviewCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
    if (!companyId)
      return res
        .status(404)
        .json({ success: false, message: "Company not found" });

    await InterviewCompany.findByIdAndDelete(companyId);
    await InterviewQuestion.deleteMany({ company: companyId });

    return res.status(200).json({
      success: true,
      message: "Interview Company and related questions deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting Interview Company:", error);
    handleError(res, error);
  }
};

// ADD ROLE BASED QUESTIONS
// add role
export const addInterviewRole = async (req, res) => {
  try {
    const { roleName, questionsCount, questionsData } = req.body;
    if (!roleName || !questionsCount) {
      return res
        .status(400)
        .json({ success: false, message: "Required fields are missing" });
    }

    const exists = await InterviewRole.findOne({ roleName });
    if (exists) {
      return res
        .status(400)
        .json({ success: false, message: "Role already exists" });
    }

    const uploads = await uploadFiles(req.files, {
      imageFile: { folder: "jobportal/roles", type: "image" },
      csvFile: { folder: "jobportal/csv", type: "raw" },
    });

    const role = await InterviewRole.create({
      roleName,
      image: uploads.imageFile || "",
      questionsCount,
      csvFileUrl: uploads.csvFile || "",
      createdBy: req.user.id,
    });

    if (questionsData) {
      const formatted = parseQuestions(
        questionsData,
        "role",
        role._id,
        req.user.id,
      );

      await RoleQuestion.insertMany(formatted);
    }

    return res.status(201).json({ success: true, role });
  } catch (error) {
    console.error("Error adding role:", error);
    handleError(res, error);
  }
};

// Get Roles
export const getInterviewRoles = async (req, res) => {
  try {
    const roles = await InterviewRole.find().sort({ createdAt: -1 });
    if (!roles) {
      return res
        .status(400)
        .json({ success: false, message: "Interview Roles not found" });
    }

    res.status(200).json({ success: true, roles });
  } catch (error) {
    console.error("Error fetching Interview Roles:", error);
    handleError(res, error);
  }
};

// Get Question for a Role
export const getQuestionsbyRole = async (req, res) => {
  try {
    const { roleId } = req.params;
    const [role, questions] = await Promise.all([
      InterviewRole.findById(roleId),
      RoleQuestion.find({ roleId }).sort({ createdAt: -1 }),
    ]);

    return res.status(200).json({ success: true, role, questions });
  } catch (error) {
    console.error("Error fetching Question for a Role:", error);
    handleError(res, error);
  }
};

// Update Interview Role
export const updateInterviewRole = async (req, res) => {
  try {
    const { roleId } = req.params;
    const { roleName, questionsCount, questionsData } = req.body;

    const role = await InterviewRole.findById(roleId);
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }

    if (roleName) role.roleName = roleName;
    if (questionsCount) role.questionsCount = questionsCount;

    const uploads = await uploadFiles(req.files, {
      imageFile: { folder: "jobportal/roles", type: "image" },
      csvFile: { folder: "jobportal/csv", type: "raw" },
    });

    if (uploads.imageFile) role.image = uploads.imageFile;
    if (uploads.csvFile) role.csvFileUrl = uploads.csvFile;

    await role.save();

    if (questionsData) {
      const formatted = parseQuestions(
        questionsData,
        "role",
        role._id,
        req.user.id,
      );

      await replaceQuestions(RoleQuestion, { roleId }, formatted);
    }

    res.status(200).json({ success: true, role });
  } catch (error) {
    console.error("Error updating interview role:", error);
    handleError(res, error);
  }
};

// Delete a role
export const deleteInterviewRole = async (req, res) => {
  try {
    const { roleId } = req.params;
    await InterviewRole.findByIdAndDelete(roleId);
    await RoleQuestion.deleteMany({ roleId });

    res.status(200).json({
      success: true,
      message: "Role and associated questions deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting Interview Role:", error);
    handleError(res, error);
  }
};
