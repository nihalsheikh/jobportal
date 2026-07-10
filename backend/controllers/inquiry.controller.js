import Inquiry from "../models/inquiry.model.js";
import { sendAdminInquiryEmail } from "../utils/emailService.js";
import { handleError } from "../utils/helpers.js";

// Submit an inquiry by user from sites contact form (send to admin email)
export const submitInquiry = async (req, res) => {
  try {
    const { fullName, email, phone, subject, message } = req.body;
    if (!fullName || !email || !phone || !subject || !message) {
      return res
        .status(400)
        .json({ success: false, message: "Required fields are missing" });
    }

    const inquiry = await Inquiry.create({
      fullName,
      email,
      phone,
      subject,
      message,
    });

    // send admin email notification
    try {
      await sendAdminInquiryEmail({ fullName, email, phone, subject, message });
    } catch (emailError) {
      console.error("Failed to notify admin via email:", emailError);
      handleError(res, emailError);
    }

    return res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully.",
      inquiry,
    });
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    handleError(res, error);
  }
};
