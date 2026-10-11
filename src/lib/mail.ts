import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

const ADMIN_EMAIL = process.env.SMTP_USER || "speaktogether713@gmail.com";

export interface MailPayload {
  name: string;
  email: string;
  level?: string;
  nativeLanguage?: string;
  goal?: string;
  submittedAt?: string;
}

// Generate rich, bulletproof HTML template for Admin Notification
export function getAdminNotificationHtml(payload: MailPayload): string {
  const dateStr = payload.submittedAt
    ? new Date(payload.submittedAt).toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      })
    : new Date().toLocaleString();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New SpeakTogether Registration</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f1f5f9; padding: 30px 15px;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 580px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 35px rgba(15, 23, 42, 0.08); border: 1px solid #e2e8f0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #4338ca 0%, #6366f1 50%, #8b5cf6 100%); background-color: #4f46e5; padding: 36px 30px 30px; text-align: center;">
              <!-- Logo Container -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin: 0 auto 16px;">
                <tr>
                  <td style="background-color: #ffffff; padding: 10px 22px; border-radius: 14px; box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15); text-align: center;">
                    <img src="cid:speaktogether_logo" alt="SpeakTogether" width="150" style="display: block; border: 0; outline: none; text-decoration: none; max-width: 150px; height: auto; margin: 0 auto;" />
                  </td>
                </tr>
              </table>
              <div style="display: inline-block; background-color: rgba(255, 255, 255, 0.2); border: 1px solid rgba(255, 255, 255, 0.35); padding: 5px 14px; border-radius: 9999px; font-size: 11.5px; font-weight: 700; color: #ffffff; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 10px;">
                🔥 NEW LEARNER LEAD
              </div>
              <h1 style="color: #ffffff; font-size: 22px; font-weight: 800; margin: 0; line-height: 1.3;">
                SpeakTogether Registration
              </h1>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px 30px;">
              <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.6; color: #334155;">
                Great news! A new prospective learner has registered on <strong>SpeakTogether</strong>. Below are the submission details:
              </p>

              <!-- Data Table -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 12px 18px; border-bottom: 1px solid #e2e8f0; font-size: 13.5px; font-weight: 600; color: #64748b; width: 40%;">Full Name</td>
                  <td style="padding: 12px 18px; border-bottom: 1px solid #e2e8f0; font-size: 14.5px; font-weight: 700; color: #0f172a;">${payload.name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; border-bottom: 1px solid #e2e8f0; font-size: 13.5px; font-weight: 600; color: #64748b;">Email Address</td>
                  <td style="padding: 12px 18px; border-bottom: 1px solid #e2e8f0; font-size: 14.5px; font-weight: 700; color: #4f46e5;">
                    <a href="mailto:${payload.email}" style="color: #4f46e5; text-decoration: none;">${payload.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; border-bottom: 1px solid #e2e8f0; font-size: 13.5px; font-weight: 600; color: #64748b;">English Level</td>
                  <td style="padding: 12px 18px; border-bottom: 1px solid #e2e8f0; font-size: 14px; font-weight: 700; color: #0f172a;">
                    <span style="display: inline-block; background-color: #eef2ff; color: #4338ca; padding: 3px 10px; border-radius: 8px; font-size: 12.5px;">${payload.level || "Beginner"}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; border-bottom: 1px solid #e2e8f0; font-size: 13.5px; font-weight: 600; color: #64748b;">Mother Tongue</td>
                  <td style="padding: 12px 18px; border-bottom: 1px solid #e2e8f0; font-size: 14px; font-weight: 700; color: #059669;">
                    <span style="display: inline-block; background-color: #ecfdf5; color: #047857; padding: 3px 10px; border-radius: 8px; font-size: 12.5px;">${payload.nativeLanguage || "Hindi / Marathi"}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; border-bottom: 1px solid #e2e8f0; font-size: 13.5px; font-weight: 600; color: #64748b;">Goal</td>
                  <td style="padding: 12px 18px; border-bottom: 1px solid #e2e8f0; font-size: 14px; font-weight: 600; color: #1e293b;">${payload.goal || "Daily conversation & confidence"}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; font-size: 13.5px; font-weight: 600; color: #64748b;">Submitted At</td>
                  <td style="padding: 12px 18px; font-size: 13px; font-weight: 600; color: #64748b;">${dateStr}</td>
                </tr>
              </table>

              <!-- Action Button -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top: 24px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${payload.email}?subject=Welcome%20to%20SpeakTogether!" style="display: inline-block; background: #4f46e5; color: #ffffff; text-decoration: none; padding: 13px 30px; border-radius: 100px; font-size: 14px; font-weight: 700; box-shadow: 0 4px 14px rgba(79, 70, 229, 0.35);">
                      Reply Directly to ${payload.name} →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px 30px; text-align: center; font-size: 12.5px; color: #94a3b8;">
              © 2026 SpeakTogether Platform • Automated Admin Dispatch
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// Generate God-tier, bulletproof, fully inlined HTML template for Learner Confirmation
export function getLearnerConfirmationHtml(payload: MailPayload): string {
  const firstName = payload.name.split(" ")[0] || payload.name;
  const levelText = payload.level || "Beginner";
  const languageText = payload.nativeLanguage || "Hindi / Marathi";
  const goalText = payload.goal || "Daily conversation & confidence";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to SpeakTogether!</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #1e293b;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; padding: 36px 16px;">
    <tr>
      <td align="center">
        <!-- Main Wrapper Card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 15px 45px rgba(79, 70, 229, 0.1); border: 1px solid #e2e8f0;">
          
          <!-- Hero Header with Gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, #3730a3 0%, #4f46e5 50%, #7c3aed 100%); background-color: #4f46e5; padding: 42px 32px 34px; text-align: center;">
              
              <!-- Brand Logo Card -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin: 0 auto 20px;">
                <tr>
                  <td style="background-color: #ffffff; padding: 12px 28px; border-radius: 18px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16); text-align: center;">
                    <img src="cid:speaktogether_logo" alt="SpeakTogether" width="170" style="display: block; border: 0; outline: none; text-decoration: none; max-width: 170px; height: auto; margin: 0 auto;" />
                  </td>
                </tr>
              </table>

              <!-- Badge -->
              <div style="display: inline-block; background-color: rgba(255, 255, 255, 0.22); border: 1px solid rgba(255, 255, 255, 0.35); padding: 6px 16px; border-radius: 9999px; font-size: 12px; font-weight: 700; color: #ffffff; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 12px;">
                ✨ EARLY ACCESS CONFIRMED
              </div>

              <!-- Main Title -->
              <h1 style="color: #ffffff; font-size: 26px; font-weight: 800; margin: 0 0 6px 0; line-height: 1.25; letter-spacing: -0.02em;">
                Welcome to SpeakTogether!
              </h1>
              <p style="color: #e0e7ff; font-size: 15px; margin: 0; line-height: 1.5; font-weight: 500;">
                Practice English naturally • Without fear • With real peers
              </p>
            </td>
          </tr>

          <!-- Main Content Body -->
          <tr>
            <td style="padding: 36px 32px 24px;">
              
              <!-- Personalized Greeting -->
              <h2 style="font-size: 22px; font-weight: 800; color: #0f172a; margin: 0 0 12px 0; line-height: 1.3;">
                Thank you for your interest, ${firstName}! 🎉
              </h2>
              <p style="font-size: 15.5px; color: #475569; line-height: 1.65; margin: 0 0 24px 0;">
                We are thrilled to welcome you to the <strong>SpeakTogether</strong> family. You’ve just taken the most important step toward speaking fluent English with natural confidence.
              </p>

              <!-- Prominent "Team Will Reach Out" Notification Card -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background: linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%); background-color: #eff6ff; border-left: 5px solid #4f46e5; border-radius: 16px; margin-bottom: 28px; border: 1px solid #dbeafe; border-left-width: 5px;">
                <tr>
                  <td style="padding: 20px 22px;">
                    <div style="font-size: 16px; font-weight: 800; color: #1e3a8a; margin-bottom: 6px; display: flex; align-items: center;">
                      🤝 Our Team Will Reach Out to You Shortly!
                    </div>
                    <p style="font-size: 14.5px; color: #334155; line-height: 1.55; margin: 0;">
                      Our matching team is currently reviewing your preferences. We will contact you at this email (<strong style="color: #0f172a;">${payload.email}</strong>) with your <strong>exclusive 1-on-1 practice room link</strong> and compatible conversation partner!
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Registration Recap Section -->
              <div style="margin-bottom: 28px;">
                <h3 style="font-size: 15px; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 12px 0;">
                  📋 Your Registration Details:
                </h3>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden;">
                  <tr>
                    <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13.5px; font-weight: 600; color: #64748b; width: 42%;">Name</td>
                    <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; font-weight: 700; color: #0f172a;">${payload.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13.5px; font-weight: 600; color: #64748b;">Mother Tongue</td>
                    <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; font-weight: 700; color: #4338ca;">
                      <span style="display: inline-block; background-color: #eef2ff; color: #4338ca; padding: 2px 10px; border-radius: 6px; font-size: 12.5px;">${languageText}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13.5px; font-weight: 600; color: #64748b;">Starting Level</td>
                    <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; font-weight: 700; color: #047857;">
                      <span style="display: inline-block; background-color: #ecfdf5; color: #047857; padding: 2px 10px; border-radius: 6px; font-size: 12.5px;">${levelText}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 16px; font-size: 13.5px; font-weight: 600; color: #64748b;">Your Goal</td>
                    <td style="padding: 12px 16px; font-size: 13.5px; font-weight: 600; color: #334155;">${goalText}</td>
                  </tr>
                </table>
              </div>

              <!-- 3 Core Advantages Cards -->
              <div style="margin-bottom: 30px;">
                <h3 style="font-size: 15px; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 12px 0;">
                  🚀 What You Can Look Forward To:
                </h3>

                <!-- Feature 1 -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 10px; background-color: #f8fafc; border-radius: 12px; border: 1px solid #edf2f7;">
                  <tr>
                    <td width="48" style="padding: 14px 0 14px 16px; vertical-align: top; font-size: 24px;">
                      🗣️
                    </td>
                    <td style="padding: 14px 16px 14px 8px; vertical-align: middle;">
                      <div style="font-size: 14px; font-weight: 700; color: #0f172a; margin-bottom: 3px;">Native Language Bridge</div>
                      <div style="font-size: 13px; color: #64748b; line-height: 1.45;">If you ever feel stuck, you can speak in ${languageText} — our live helper suggests the right English sentence instantly!</div>
                    </td>
                  </tr>
                </table>

                <!-- Feature 2 -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 10px; background-color: #f8fafc; border-radius: 12px; border: 1px solid #edf2f7;">
                  <tr>
                    <td width="48" style="padding: 14px 0 14px 16px; vertical-align: top; font-size: 24px;">
                      🤝
                    </td>
                    <td style="padding: 14px 16px 14px 8px; vertical-align: middle;">
                      <div style="font-size: 14px; font-weight: 700; color: #0f172a; margin-bottom: 3px;">100% Judgment-Free Practice</div>
                      <div style="font-size: 13px; color: #64748b; line-height: 1.45;">Practice 1-on-1 with learners at your exact level. Nobody judges your accent or grammar.</div>
                    </td>
                  </tr>
                </table>

                <!-- Feature 3 -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; border-radius: 12px; border: 1px solid #edf2f7; margin-bottom: 10px;">
                  <tr>
                    <td width="48" style="padding: 14px 0 14px 16px; vertical-align: top; font-size: 24px;">
                      💡
                    </td>
                    <td style="padding: 14px 16px 14px 8px; vertical-align: middle;">
                      <div style="font-size: 14px; font-weight: 700; color: #0f172a; margin-bottom: 3px;">Smart Live Prompts</div>
                      <div style="font-size: 13px; color: #64748b; line-height: 1.45;">Never experience awkward silence. Enjoy guided topics, daily scenarios, and instant vocabulary hints.</div>
                    </td>
                  </tr>
                </table>

                <!-- Mobile App Play Store Coming Soon Banner -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #eef2ff; border-radius: 12px; border: 1.5px solid #c7d2fe;">
                  <tr>
                    <td width="48" style="padding: 14px 0 14px 16px; vertical-align: top; font-size: 24px;">
                      📱
                    </td>
                    <td style="padding: 14px 16px 14px 8px; vertical-align: middle;">
                      <div style="font-size: 14px; font-weight: 700; color: #3730a3; margin-bottom: 3px;">Google Play Android App — Coming Soon!</div>
                      <div style="font-size: 13px; color: #4338ca; line-height: 1.45;">You will receive priority access when our Android app launches on Google Play. <strong>100% Free • No Subscriptions!</strong></div>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Motivational Quote Banner -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background: linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%); border: 1px solid #a7f3d0; border-radius: 14px; margin-bottom: 26px;">
                <tr>
                  <td style="padding: 16px 20px; text-align: center; color: #065f46; font-size: 13.5px; font-weight: 700; line-height: 1.5;">
                    🌱 "Mistakes are proof that you are trying. Fluency doesn't come from perfection — it comes from daily practice!"
                  </td>
                </tr>
              </table>

              <!-- Friendly Sign-Off -->
              <p style="font-size: 14.5px; color: #475569; line-height: 1.6; margin: 0 0 14px 0;">
                If you have any questions before we reach out, feel free to <strong>reply directly to this email</strong> anytime. We are here to help you every step of the way!
              </p>
              
              <p style="font-size: 14.5px; color: #0f172a; line-height: 1.6; margin: 0;">
                Warmly,<br>
                <strong style="color: #4f46e5; font-size: 15px;">The SpeakTogether Team</strong><br>
                <span style="font-size: 12.5px; color: #94a3b8;">Practice • Connect • Grow</span>
              </p>
            </td>
          </tr>

          <!-- High-End Dark Footer -->
          <tr>
            <td style="background-color: #0f172a; padding: 28px 30px; text-align: center;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin: 0 auto 10px;">
                <tr>
                  <td style="background-color: #ffffff; padding: 6px 14px; border-radius: 10px; display: inline-block;">
                    <img src="cid:speaktogether_logo" alt="SpeakTogether" width="110" style="display: block; border: 0; outline: none; text-decoration: none; max-width: 110px; height: auto;" />
                  </td>
                </tr>
              </table>
              <p style="font-size: 13px; color: #94a3b8; margin: 0 0 6px 0; line-height: 1.5;">
                SpeakTogether – India's Free English Speaking Community
              </p>
              <p style="font-size: 12px; color: #64748b; margin: 0; line-height: 1.5;">
                Need help? Contact us at <a href="mailto:speaktogether713@gmail.com" style="color: #818cf8; text-decoration: none; font-weight: 600;">speaktogether713@gmail.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// Mailer function that dispatches both emails
export async function sendEarlyAccessEmails(payload: MailPayload): Promise<{ success: boolean; previewUrl?: string }> {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT) || 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || `"SpeakTogether" <speaktogether713@gmail.com>`;
  const replyTo = user || "speaktogether713@gmail.com";

  const adminHtml = getAdminNotificationHtml(payload);
  const learnerHtml = getLearnerConfirmationHtml(payload);
  const firstName = payload.name.split(" ")[0] || payload.name;

  const adminText = `New SpeakTogether Registration:\n\nName: ${payload.name}\nEmail: ${payload.email}\nLevel: ${payload.level || "Beginner"}\nNative Language: ${payload.nativeLanguage || "Hindi / Marathi"}\nGoal: ${payload.goal || "Daily conversation"}\nSubmitted: ${new Date().toISOString()}`;

  const learnerText = `Hello ${firstName},\n\nThank you for your interest in SpeakTogether!\n\nWe received your registration. Our team will reach out to you shortly with your practice room access link and partner matching details.\n\nWarmly,\nThe SpeakTogether Team\n(speaktogether713@gmail.com)`;

  const logoPath = path.join(process.cwd(), "public", "SpeakTogether-removebg-preview.png");
  const getAttachments = () =>
    fs.existsSync(logoPath)
      ? [
          {
            filename: "speaktogether-logo.png",
            path: logoPath,
            cid: "speaktogether_logo",
          },
        ]
      : [];

  if (host && user && pass) {
    const cleanPass = pass.replace(/\s+/g, "");
    const transporter = host.includes("gmail")
      ? nodemailer.createTransport({
          service: "gmail",
          auth: { user, pass: cleanPass },
        })
      : nodemailer.createTransport({
          host,
          port,
          secure: port === 465,
          auth: { user, pass: cleanPass },
        });

    console.log(`[Email Service] Initiating dual dispatch for user: ${payload.email} & admin: ${ADMIN_EMAIL}`);

    // 1. Send Admin Notification to speaktogether713@gmail.com
    try {
      const adminInfo = await transporter.sendMail({
        from: `"SpeakTogether Notifications" <${user}>`,
        to: ADMIN_EMAIL,
        replyTo: payload.email,
        subject: `[New Lead] SpeakTogether Registration: ${payload.name} (${payload.email})`,
        text: adminText,
        html: adminHtml,
        attachments: getAttachments(),
        headers: {
          "X-Priority": "3",
          "X-Mailer": "SpeakTogether-Dispatch",
        },
      });
      console.log(`[Email Service] ✅ Admin notification sent: ${adminInfo.messageId} (Response: ${adminInfo.response})`);
    } catch (adminErr) {
      console.error("[Email Service] ❌ Admin email delivery failed:", adminErr);
    }

    // 2. Send Learner Confirmation to the user
    try {
      const learnerInfo = await transporter.sendMail({
        from: `"SpeakTogether" <${user}>`,
        to: payload.email,
        replyTo: user,
        subject: `Welcome to SpeakTogether, ${firstName} - Registration Received`,
        text: learnerText,
        html: learnerHtml,
        attachments: getAttachments(),
        headers: {
          "List-Unsubscribe": `<mailto:${user}?subject=unsubscribe>`,
          "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
          "X-Priority": "3",
          "X-Mailer": "SpeakTogether-Transactional",
          "Precedence": "bulk",
        },
      });
      console.log(`[Email Service] ✅ Learner confirmation sent to ${payload.email}: ${learnerInfo.messageId} (Accepted: ${learnerInfo.accepted.join(", ")})`);
    } catch (learnerErr) {
      console.error(`[Email Service] ❌ Learner email delivery failed for ${payload.email}:`, learnerErr);
    }

    return { success: true };
  } else {
    // Development / Fallback mode: Use Ethereal test account or console logging
    try {
      const testAccount = await nodemailer.createTestAccount();
      const testTransporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });

      // Send to Admin
      await testTransporter.sendMail({
        from: `"SpeakTogether" <${testAccount.user}>`,
        to: ADMIN_EMAIL,
        subject: `🚀 New SpeakTogether Early Access Request: ${payload.name}`,
        text: adminText,
        html: adminHtml,
        attachments: getAttachments(),
      });

      // Send to Learner
      const learnerInfo = await testTransporter.sendMail({
        from: `"SpeakTogether" <${testAccount.user}>`,
        to: payload.email,
        subject: `Welcome to SpeakTogether! Early Access Confirmation for ${firstName}`,
        text: learnerText,
        html: learnerHtml,
        attachments: getAttachments(),
      });

      const previewUrl = nodemailer.getTestMessageUrl(learnerInfo) || undefined;
      console.log(`[Email Dispatch] Preview confirmation email at: ${previewUrl}`);
      return { success: true, previewUrl };
    } catch (e) {
      console.log("[Email Dispatch] Local mode active. Admin:", ADMIN_EMAIL, "Learner:", payload.email);
      return { success: true };
    }
  }
}
