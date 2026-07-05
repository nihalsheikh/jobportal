import dotenv from "dotenv";

dotenv.config();

const BREVO_BASE_URL = process.env.BREVO_BASE_URL;
const BREVO_API_KEY = process.env.BREVO_API_KEY?.trim();
const SENDER_EMAIL = process.env.EMAIL_USER;

// email sender
const sendEmail = async ({ to, subject, htmlContent }) => {
  try {
    if (!BREVO_API_KEY || !SENDER_EMAIL) {
      throw new Error(
        "Email configuration missing (BREVO API KEY or EMAIL KEY not found",
      );
    }

    const response = await fetch(BREVO_BASE_URL, {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Emberly: Job Portal", email: SENDER_EMAIL },
        to,
        subject,
        htmlContent,
      }),
    });

    const result = await response.json();

    if (!response.ok) throw new Error(result.message || "Brevo API Error");

    return result;
  } catch (error) {
    console.log(`Email Error ${subject}:`, error.message);
    throw error;
  }
};

// OTP sender
const otpTemplate = (title, name, otp, message) => `
  <!doctype html>
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="color-scheme" content="dark">
  <meta name="supported-color-schemes" content="dark">
  <title>${title}</title>
  <!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@600;700&display=swap" rel="stylesheet" type="text/css">
  <style>
  body,table,td{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;}
  body{margin:0;padding:0;background:#07080D;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}
  table{border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;}
  a{text-decoration:none;}
  .mono{font-family:'JetBrains Mono','SFMono-Regular',Consolas,monospace;}
  @media(max-width:620px){
    .w{width:100%!important;}
    .px{padding-left:24px!important;padding-right:24px!important;}
    .otp{font-size:34px!important;letter-spacing:8px!important;}
    .h1{font-size:21px!important;}
    .art{display:none!important;}
  }
  </style>
  </head>
  <body style="margin:0;padding:0;background:#07080D;">
  <div style="display:none;max-height:0;overflow:hidden;font-size:1px;color:#07080D;mso-hide:all;">Your Emberly verification code: ${otp} — expires in 10 minutes.&#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#07080D;">
  <tr><td align="center" style="padding:44px 16px;">
  <table role="presentation" class="w" width="580" cellpadding="0" cellspacing="0" border="0" style="width:580px;max-width:580px;">
    <tr>
      <td style="border-radius:16px;overflow:hidden;background:#0C0E18;border:1px solid #1A1D2E;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding:0;background:#0A0C16;border-bottom:1px solid #1A1D2E;position:relative;overflow:hidden;">
            <div style="position:relative;overflow:hidden;">
              <div style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;">
                <svg viewBox="0 0 580 260" width="580" height="260" xmlns="http://www.w3.org/2000/svg" style="display:block;position:absolute;top:0;left:0;opacity:1;">
                  <defs>
                    <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="0.9" fill="#E11D48" opacity="0.13"/>
                    </pattern>
                    <radialGradient id="heroGlow" cx="50%" cy="60%" r="55%">
                      <stop offset="0%" stop-color="#E11D48" stop-opacity="0.18"/>
                      <stop offset="100%" stop-color="#07080D" stop-opacity="0"/>
                    </radialGradient>
                    <radialGradient id="logoGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stop-color="#E11D48" stop-opacity="0.22"/>
                      <stop offset="100%" stop-color="#07080D" stop-opacity="0"/>
                    </radialGradient>
                  </defs>
                  <rect width="580" height="260" fill="url(#dots)"/>
                  <rect width="580" height="260" fill="url(#heroGlow)"/>
                  <circle cx="290" cy="148" r="55" fill="none" stroke="#E11D48" stroke-width="0.6" stroke-opacity="0.22"/>
                  <circle cx="290" cy="148" r="82" fill="none" stroke="#E11D48" stroke-width="0.5" stroke-opacity="0.14"/>
                  <circle cx="290" cy="148" r="112" fill="none" stroke="#E11D48" stroke-width="0.4" stroke-opacity="0.09"/>
                  <circle cx="290" cy="148" r="148" fill="none" stroke="#E11D48" stroke-width="0.3" stroke-opacity="0.07"/>
                  <line x1="290" y1="0" x2="290" y2="260" stroke="#E11D48" stroke-width="0.4" stroke-opacity="0.09"/>
                  <line x1="0" y1="148" x2="580" y2="148" stroke="#E11D48" stroke-width="0.4" stroke-opacity="0.09"/>
                  <line x1="0" y1="0" x2="580" y2="260" stroke="#E11D48" stroke-width="0.3" stroke-opacity="0.05"/>
                  <line x1="580" y1="0" x2="0" y2="260" stroke="#E11D48" stroke-width="0.3" stroke-opacity="0.05"/>
                  <line x1="24" y1="0" x2="24" y2="14" stroke="#E11D48" stroke-width="0.9" stroke-opacity="0.4"/>
                  <line x1="0" y1="24" x2="14" y2="24" stroke="#E11D48" stroke-width="0.9" stroke-opacity="0.4"/>
                  <line x1="556" y1="0" x2="556" y2="14" stroke="#E11D48" stroke-width="0.9" stroke-opacity="0.4"/>
                  <line x1="566" y1="24" x2="580" y2="24" stroke="#E11D48" stroke-width="0.9" stroke-opacity="0.4"/>
                  <line x1="24" y1="260" x2="24" y2="246" stroke="#E11D48" stroke-width="0.9" stroke-opacity="0.4"/>
                  <line x1="0" y1="236" x2="14" y2="236" stroke="#E11D48" stroke-width="0.9" stroke-opacity="0.4"/>
                  <line x1="556" y1="260" x2="556" y2="246" stroke="#E11D48" stroke-width="0.9" stroke-opacity="0.4"/>
                  <line x1="566" y1="236" x2="580" y2="236" stroke="#E11D48" stroke-width="0.9" stroke-opacity="0.4"/>
                  <circle cx="68" cy="42" r="1.8" fill="#E11D48" opacity="0.35"/>
                  <circle cx="102" cy="78" r="1.1" fill="#E11D48" opacity="0.22"/>
                  <circle cx="508" cy="38" r="1.8" fill="#E11D48" opacity="0.35"/>
                  <circle cx="474" cy="72" r="1.1" fill="#E11D48" opacity="0.22"/>
                  <circle cx="80" cy="218" r="1.5" fill="#E11D48" opacity="0.28"/>
                  <circle cx="500" cy="214" r="1.5" fill="#E11D48" opacity="0.28"/>
                  <rect x="0" y="0" width="580" height="2.5" fill="url(#heroGlow)"/>
                  <rect x="200" y="0" width="180" height="2.5" rx="1" fill="#E11D48" opacity="0.9"/>
                </svg>
              </div>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="position:relative;z-index:2;">
              <tr>
                <td align="center" style="padding:42px 40px 32px;">
                  <img src="https://res.cloudinary.com/duhb5uf6e/image/upload/v1782890002/logo-bg_vb0wxf.webp" width="56" height="56" alt="Emberly" style="display:block;margin:0 auto 16px;border-radius:14px;" />
                  <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:4px;color:#E11D48;text-transform:uppercase;">Emberly · Job Portal</p>
                  <h1 class="h1" style="margin:0;font-size:24px;line-height:32px;font-weight:600;color:#F5F6FA;">${title}</h1>
                </td>
              </tr>
              </table>
            </div>
            <!--<![endif]-->
            <!--[if mso]>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr><td align="center" style="padding:42px 40px 32px;">
              <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:4px;color:#E11D48;text-transform:uppercase;">Emberly</p>
              <h1 style="margin:0;font-size:24px;line-height:32px;font-weight:600;color:#F5F6FA;">${title}</h1>
            </td></tr>
            </table>
            <![endif]-->
          </td>
        </tr>
        </table>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td class="px" style="padding:36px 44px 0;">
            <p style="margin:0 0 10px;font-size:15.5px;line-height:26px;color:#C8CCDB;">Hi <strong style="color:#F5F6FA;">${name}</strong>,</p>
            <p style="margin:0;font-size:14.5px;line-height:24px;color:#6B7280;">${message}</p>
          </td>
        </tr>
        </table>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td class="px" style="padding:28px 44px 0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-radius:12px;background:#0A0C16;border:1px solid #1E2035;overflow:hidden;">
            <tr>
              <td style="position:relative;padding:0;">
                <!--[if !mso]><!-->
                <div style="position:relative;overflow:hidden;">
                  <div style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;">
                    <svg viewBox="0 0 492 120" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="display:block;position:absolute;top:0;left:0;">
                      <defs>
                        <radialGradient id="tileGlow" cx="50%" cy="50%" r="60%">
                          <stop offset="0%" stop-color="#E11D48" stop-opacity="0.14"/>
                          <stop offset="100%" stop-color="#0A0C16" stop-opacity="0"/>
                        </radialGradient>
                      </defs>
                      <rect width="492" height="120" fill="url(#tileGlow)"/>
                      <line x1="0" y1="60" x2="492" y2="60" stroke="#E11D48" stroke-width="0.4" stroke-opacity="0.25" stroke-dasharray="4 6"/>
                      <line x1="0" y1="20" x2="12" y2="20" stroke="#E11D48" stroke-width="1" stroke-opacity="0.45"/>
                      <line x1="0" y1="60" x2="8" y2="60" stroke="#E11D48" stroke-width="1" stroke-opacity="0.45"/>
                      <line x1="0" y1="100" x2="12" y2="100" stroke="#E11D48" stroke-width="1" stroke-opacity="0.45"/>
                      <line x1="492" y1="20" x2="480" y2="20" stroke="#E11D48" stroke-width="1" stroke-opacity="0.45"/>
                      <line x1="492" y1="60" x2="484" y2="60" stroke="#E11D48" stroke-width="1" stroke-opacity="0.45"/>
                      <line x1="492" y1="100" x2="480" y2="100" stroke="#E11D48" stroke-width="1" stroke-opacity="0.45"/>
                    </svg>
                  </div>
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="position:relative;z-index:2;">
                  <tr>
                    <td align="center" style="padding:22px 20px 10px;">
                      <p style="margin:0 0 6px;font-size:10px;font-weight:700;letter-spacing:3.5px;text-transform:uppercase;color:#3A3F5C;">Verification Code</p>
                      <p class="otp mono" style="margin:0;font-family:'JetBrains Mono','SFMono-Regular',Consolas,monospace;font-size:44px;line-height:1.1;font-weight:700;letter-spacing:12px;color:#E11D48;text-indent:12px;">${otp}</p>
                    </td>
                  </tr>
                  </table>
                </div>
                <!--<![endif]-->
              </td>
            </tr>
            </table>
          </td>
        </tr>
        </table>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td align="center" class="px" style="padding:14px 44px 0;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td valign="middle" style="padding-right:6px;">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;">
                  <circle cx="12" cy="12" r="8.5" stroke="#4B5563" stroke-width="1.5"/>
                  <path d="M12 8V12L14.5 13.5" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </td>
              <td valign="middle">
                <span style="font-size:12.5px;color:#4B5563;">Expires in <strong style="color:#6B7280;font-weight:600;">10 minutes</strong></span>
              </td>
            </tr>
            </table>
          </td>
        </tr>
        </table>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr><td class="px" style="padding:30px 44px 0;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr><td style="height:1px;line-height:1px;font-size:0;background:linear-gradient(90deg,#0C0E18 0%,#1E2035 50%,#0C0E18 100%);">&nbsp;</td></tr>
          </table>
        </td></tr>
        </table>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td class="px" style="padding:22px 44px 0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-radius:10px;background:#0F1020;border:1px solid #1A1D2E;">
            <tr>
              <td style="padding:16px 18px;" valign="top">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td valign="top" width="26" style="padding-right:11px;padding-top:1px;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;">
                      <rect x="5" y="11" width="14" height="9" rx="2" stroke="#4B5563" stroke-width="1.5"/>
                      <path d="M8 11V8C8 5.8 9.8 4 12 4C14.2 4 16 5.8 16 8V11" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round"/>
                      <circle cx="12" cy="15.5" r="1.2" fill="#4B5563"/>
                    </svg>
                  </td>
                  <td valign="top">
                    <p style="margin:0 0 3px;font-size:13px;font-weight:600;color:#9CA3AF;">Didn't request this?</p>
                    <p style="margin:0;font-size:12.5px;line-height:19px;color:#4B5563;">You can safely ignore this email. No changes will be made to your Emberly account.</p>
                  </td>
                </tr>
                </table>
              </td>
            </tr>
            </table>
          </td>
        </tr>
        </table>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td align="center" class="px" style="padding:28px 44px 36px;">
            <p style="margin:0 0 5px;font-size:12px;color:#2E3148;">Sent automatically by Emberly · Job Portal</p>
            <p style="margin:0;font-size:11.5px;color:#1E2035;">© 2026 Emberly. All rights reserved.</p>
          </td>
        </tr>
        </table>
      </td>
    </tr>
  </table>
  </td></tr>
  </table>
  </body>
  </html>
`;

// Send Email Verification
export const sendVerificationEmail = async (email, name, otp) => {
  return sendEmail({
    to: [{ email, name }],
    subject: "Welcome to Emberly! Verify your email",
    htmlContent: otpTemplate(
      "Verify Your Email Address",
      name,
      otp,
      "Welcome to Emberly! Use the 6-digit verification code below to verify your email address and complete your registration.",
    ),
  });
};

// Send Forgot Password Email
export const sendForgotPasswordEmail = async (email, name, otp) => {
  return sendEmail({
    to: [{ email, name }],
    subject: "Reset your Emberly password",
    htmlContent: otpTemplate(
      "Password Reset Request",
      name,
      otp,
      "We received a request to reset the password for your Emberly account. Enter the 6-digit verification code below to continue. If you didn't request a password reset, you can safely ignore this email.",
    ),
  });
};

// To send the admin inquiry
export const sendAdminInquiryEmail = async (data) => {
  const htmlContent = `
    <!doctype html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="color-scheme" content="dark">
    <meta name="supported-color-schemes" content="dark">
    <title>New contact form submission — Emberly</title>
    <!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap" rel="stylesheet" type="text/css">
    <style>
    body,table,td{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;}
    body{margin:0;padding:0;background:#07080D;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}
    table{border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;}
    a{text-decoration:none;}
    .mono{font-family:'JetBrains Mono','SFMono-Regular',Consolas,monospace;}
    @media(max-width:620px){.w{width:100%!important;}.px{padding-left:24px!important;padding-right:24px!important;}.h1{font-size:21px!important;}}
    </style>
    </head>
    <body style="margin:0;padding:0;background:#07080D;">
    <div style="display:none;max-height:0;overflow:hidden;font-size:1px;color:#07080D;mso-hide:all;">New inquiry from ${data.fullName || "a visitor"} — ${data.subject || "no subject"}.&#847; &#847; &#847; &#847; &#847; &#847; &#847;</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#07080D;">
    <tr><td align="center" style="padding:44px 16px;">
    <table role="presentation" class="w" width="580" cellpadding="0" cellspacing="0" border="0" style="width:580px;max-width:580px;">
    <tr>
      <td style="border-radius:16px;overflow:hidden;background:#0C0E18;border:1px solid #1A1D2E;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding:0;background:#0A0C16;border-bottom:1px solid #1A1D2E;">
            <!--[if !mso]><!-->
            <div style="position:relative;overflow:hidden;">
              <div style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;">
                <svg viewBox="0 0 580 200" width="580" height="200" xmlns="http://www.w3.org/2000/svg" style="display:block;position:absolute;top:0;left:0;opacity:1;">
                  <defs>
                    <pattern id="cdots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="0.85" fill="#E11D48" opacity="0.12"/>
                    </pattern>
                    <radialGradient id="cheroGlow" cx="50%" cy="70%" r="55%">
                      <stop offset="0%" stop-color="#E11D48" stop-opacity="0.15"/>
                      <stop offset="100%" stop-color="#07080D" stop-opacity="0"/>
                    </radialGradient>
                    <linearGradient id="topBar" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#E11D48" stop-opacity="0"/>
                      <stop offset="30%" stop-color="#E11D48" stop-opacity="0.9"/>
                      <stop offset="70%" stop-color="#E11D48" stop-opacity="0.9"/>
                      <stop offset="100%" stop-color="#E11D48" stop-opacity="0"/>
                    </linearGradient>
                  </defs>
                  <rect width="580" height="200" fill="url(#cdots)"/>
                  <rect width="580" height="200" fill="url(#cheroGlow)"/>
                  <circle cx="290" cy="110" r="50" fill="none" stroke="#E11D48" stroke-width="0.55" stroke-opacity="0.18"/>
                  <circle cx="290" cy="110" r="80" fill="none" stroke="#E11D48" stroke-width="0.45" stroke-opacity="0.11"/>
                  <circle cx="290" cy="110" r="115" fill="none" stroke="#E11D48" stroke-width="0.35" stroke-opacity="0.07"/>
                  <line x1="290" y1="0" x2="290" y2="200" stroke="#E11D48" stroke-width="0.35" stroke-opacity="0.08"/>
                  <line x1="0" y1="110" x2="580" y2="110" stroke="#E11D48" stroke-width="0.35" stroke-opacity="0.08"/>
                  <line x1="20" y1="0" x2="20" y2="12" stroke="#E11D48" stroke-width="0.9" stroke-opacity="0.4"/>
                  <line x1="0" y1="20" x2="12" y2="20" stroke="#E11D48" stroke-width="0.9" stroke-opacity="0.4"/>
                  <line x1="560" y1="0" x2="560" y2="12" stroke="#E11D48" stroke-width="0.9" stroke-opacity="0.4"/>
                  <line x1="568" y1="20" x2="580" y2="20" stroke="#E11D48" stroke-width="0.9" stroke-opacity="0.4"/>
                  <line x1="20" y1="200" x2="20" y2="188" stroke="#E11D48" stroke-width="0.9" stroke-opacity="0.4"/>
                  <line x1="0" y1="180" x2="12" y2="180" stroke="#E11D48" stroke-width="0.9" stroke-opacity="0.4"/>
                  <line x1="560" y1="200" x2="560" y2="188" stroke="#E11D48" stroke-width="0.9" stroke-opacity="0.4"/>
                  <line x1="568" y1="180" x2="580" y2="180" stroke="#E11D48" stroke-width="0.9" stroke-opacity="0.4"/>
                  <circle cx="58" cy="34" r="1.6" fill="#E11D48" opacity="0.32"/>
                  <circle cx="88" cy="62" r="1" fill="#E11D48" opacity="0.2"/>
                  <circle cx="512" cy="30" r="1.6" fill="#E11D48" opacity="0.32"/>
                  <circle cx="484" cy="58" r="1" fill="#E11D48" opacity="0.2"/>
                  <circle cx="72" cy="168" r="1.4" fill="#E11D48" opacity="0.25"/>
                  <circle cx="502" cy="164" r="1.4" fill="#E11D48" opacity="0.25"/>
                  <rect x="0" y="0" width="580" height="2.5" fill="url(#topBar)"/>
                </svg>
              </div>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="position:relative;z-index:2;">
              <tr>
                <td align="center" style="padding:36px 40px 28px;">
                <img src="https://res.cloudinary.com/duhb5uf6e/image/upload/v1782890002/logo-bg_vb0wxf.webp" width="56" height="56" alt="Emberly" style="display:block;margin:0 auto 16px;border-radius:14px;" />
                <p style="margin:0 0 4px;font-size:11.5px;font-weight:700;letter-spacing:4px;color:#E11D48;text-transform:uppercase;">Emberly · Job Portal</p>
                  <h1 class="h1" style="margin:6px 0 0;font-size:23px;line-height:31px;font-weight:600;color:#F5F6FA;">New Contact Form Submission</h1>
                  <p style="margin:8px 0 0;font-size:13px;color:#4B5563;">Received ${new Date().toLocaleString()}</p>
                </td>
              </tr>
              </table>
            </div>
            <!--<![endif]-->
            <!--[if mso]>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr><td align="center" style="padding:36px 40px 28px;">
              <p style="margin:0;font-size:11.5px;font-weight:700;letter-spacing:4px;color:#E11D48;text-transform:uppercase;">Emberly</p>
              <h1 style="margin:6px 0 0;font-size:23px;font-weight:600;color:#F5F6FA;">New Contact Form Submission</h1>
            </td></tr>
            </table>
            <![endif]-->
          </td>
        </tr>
        </table>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td class="px" style="padding:24px 44px 0;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td style="border-radius:999px;background:rgba(225,29,72,0.10);border:1px solid rgba(225,29,72,0.25);padding:6px 14px 6px 10px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td valign="middle" style="padding-right:7px;"><span style="display:inline-block;width:5px;height:5px;border-radius:50%;background-color:#E11D48;"></span></td>
                  <td valign="middle"><span style="font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#E11D48;">New inquiry</span></td>
                </tr>
                </table>
              </td>
            </tr>
            </table>
          </td>
        </tr>
        </table>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td class="px" style="padding:18px 44px 0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-radius:12px;background:#0A0C16;border:1px solid #1E2035;">
            <tr>
              <td style="padding:20px 22px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:12px;">
                <tr>
                  <td valign="middle" style="padding-right:8px;">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;">
                      <path d="M21 11.5C21 16.1944 16.9706 20 12 20C10.6868 20 9.4413 19.7344 8.32613 19.2563L4 20L5.13076 16.5973C4.41502 15.0589 4 13.3357 4 11.5C4 6.80558 8.02944 3 12 3C16.9706 3 21 6.80558 21 11.5Z" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </td>
                  <td valign="middle">
                    <span style="font-size:10.5px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#374151;">Message</span>
                  </td>
                </tr>
                </table>
                <p style="margin:0;font-size:14.5px;line-height:25px;color:#C8CCDB;white-space:pre-wrap;">${data.message || "No message provided."}</p>
              </td>
            </tr>
            </table>
          </td>
        </tr>
        </table>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td class="px" style="padding:26px 44px 6px;">
            <p style="margin:0 0 16px;font-size:10.5px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#374151;">Contact Details</p>
            ${[
              {
                label: "Full Name",
                value: data.fullName,
                icon: '<path d="M12 12C14.2 12 16 10.2 16 8C16 5.8 14.2 4 12 4C9.8 4 8 5.8 8 8C8 10.2 9.8 12 12 12Z" stroke="#E11D48" stroke-width="1.4" stroke-opacity="0.7"/><path d="M5 20C5 16.7 8.1 14 12 14C15.9 14 19 16.7 19 20" stroke="#E11D48" stroke-width="1.4" stroke-opacity="0.7" stroke-linecap="round"/>',
                mono: false,
              },
              {
                label: "Email Address",
                value: data.email
                  ? '<a href="mailto:' +
                    data.email +
                    '" style="color:#E11D48;font-weight:600;">' +
                    data.email +
                    "</a>"
                  : null,
                icon: '<rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="#E11D48" stroke-width="1.4" stroke-opacity="0.7"/><path d="M4.5 7L12 12.5L19.5 7" stroke="#E11D48" stroke-width="1.4" stroke-opacity="0.7" stroke-linecap="round" stroke-linejoin="round"/>',
                mono: true,
              },
              {
                label: "Phone Number",
                value: data.phone
                  ? '<a href="tel:' +
                    data.phone +
                    '" style="color:#E11D48;font-weight:600;">' +
                    data.phone +
                    "</a>"
                  : null,
                icon: '<path d="M5 4.5H9L11 9L8.5 10.5C9.4 12.5 11.5 14.6 13.5 15.5L15 13L19.5 15V19C19.5 19.6 19.1 20 18.5 20C11 20 4.5 13.5 4.5 6C4.5 5.4 4.5 4.5 5 4.5Z" stroke="#E11D48" stroke-width="1.4" stroke-opacity="0.7" stroke-linejoin="round"/>',
                mono: true,
              },
              {
                label: "Subject",
                value: data.subject,
                icon: '<path d="M5 5H14L19 10V19H5V5Z" stroke="#E11D48" stroke-width="1.4" stroke-opacity="0.7" stroke-linejoin="round"/><path d="M14 5V10H19" stroke="#E11D48" stroke-width="1.4" stroke-opacity="0.7" stroke-linejoin="round"/><path d="M8 13H16M8 16H13" stroke="#E11D48" stroke-width="1.4" stroke-opacity="0.7" stroke-linecap="round"/>',
                mono: false,
              },
            ]
              .map(
                (row, i, arr) => `
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:${i < arr.length - 1 ? "10px" : "0"};">
            <tr>
              <td style="border-radius:10px;background:#0A0C16;border:1px solid #1A1D2E;padding:13px 16px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td valign="middle" width="28" style="padding-right:12px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td width="24" height="24" align="center" valign="middle" style="width:24px;height:24px;border-radius:7px;background:rgba(225,29,72,0.08);border:1px solid rgba(225,29,72,0.18);">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;">${row.icon}</svg>
                      </td>
                    </tr>
                    </table>
                  </td>
                  <td valign="middle">
                    <p style="margin:0 0 3px;font-size:10.5px;color:#3A3F5C;letter-spacing:0.3px;">${row.label}</p>
                    <p class="${row.mono ? "mono" : ""}" style="margin:0;font-size:14px;font-weight:600;color:#E8EAF2;word-break:break-word;">${row.value || '<span style="color:#2E3148;font-weight:400;">N/A</span>'}</p>
                  </td>
                </tr>
                </table>
              </td>
            </tr>
            </table>
            `,
              )
              .join("")}
          </td>
        </tr>
        </table>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr><td class="px" style="padding:24px 44px 0;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr><td style="height:1px;line-height:1px;font-size:0;background:linear-gradient(90deg,#0C0E18 0%,#1E2035 50%,#0C0E18 100%);">&nbsp;</td></tr>
          </table>
        </td></tr>
        </table>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td class="px" style="padding:20px 44px 0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-radius:10px;background:#0F1020;border:1px solid #1A1D2E;">
            <tr>
              <td style="padding:15px 18px;">
                <p style="margin:0 0 3px;font-size:13px;font-weight:600;color:#9CA3AF;">Replying to this inquiry?</p>
                <p style="margin:0;font-size:12.5px;line-height:19px;color:#4B5563;">Use the contact details above to reach out directly. This is an automated notification — please do not reply to this email.</p>
              </td>
            </tr>
            </table>
          </td>
        </tr>
        </table>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td align="center" class="px" style="padding:26px 44px 36px;">
            <p style="margin:0 0 4px;font-size:12px;color:#2E3148;">Sent automatically by Emberly · Job Portal</p>
            <p style="margin:0;font-size:11.5px;color:#1E2035;">© 2026 Emberly. All rights reserved.</p>
          </td>
        </tr>
        </table>
      </td>
    </tr>
    </table>
    </td></tr>
    </table>
    </body>
    </html>
`;

  return sendEmail({
    to: [{ email: SENDER_EMAIL }],
    subject: `New Inquiry: ${data.subject}`,
    htmlContent,
  });
};
