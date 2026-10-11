import { NextResponse } from "next/server";
import { sendEarlyAccessEmails } from "@/lib/mail";

// In-memory store for demonstration/development
const signups: any[] = [];

// Comprehensive email validation
function isValidEmail(email: string): boolean {
  if (!email || typeof email !== "string") return false;
  const trimmed = email.trim().toLowerCase();
  
  // RFC 5322 compatible regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!emailRegex.test(trimmed)) return false;

  const parts = trimmed.split("@");
  if (parts.length !== 2) return false;

  const domain = parts[1];
  const domainParts = domain.split(".");
  if (domainParts.length < 2) return false;

  const tld = domainParts[domainParts.length - 1];
  if (tld.length < 2 || tld.length > 24) return false;

  return true;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, firstName, lastName, email, level, nativeLanguage, goal } = body;

    const fullName = (name || `${firstName || ""} ${lastName || ""}`).trim();

    if (!fullName) {
      return NextResponse.json(
        { error: "Please enter your full name." },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address (e.g. name@gmail.com)." },
        { status: 400 }
      );
    }

    const languageSelected = (nativeLanguage || "Hindi / Marathi").trim();

    const record = {
      name: fullName,
      email: email.trim().toLowerCase(),
      level: level || "Beginner",
      nativeLanguage: languageSelected,
      goal: goal || "Daily conversation & confidence",
      submittedAt: new Date().toISOString(),
    };

    signups.push(record);

    // Send emails: Admin notification (to speaktogether713@gmail.com) and Learner confirmation
    let mailResult;
    try {
      mailResult = await sendEarlyAccessEmails(record);
    } catch (mailErr) {
      console.error("Mail send error:", mailErr);
    }

    return NextResponse.json({
      success: true,
      message: `Thank you for your interest, ${fullName.split(" ")[0]}! Our team will reach out to you shortly.`,
      queuePosition: 1240 + signups.length,
      data: record,
      previewUrl: mailResult?.previewUrl,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Failed to process registration request." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    totalSignups: 12450 + signups.length,
    activeCohort: "Early Access Cohort 2026",
    status: "open",
    featuresUnlocked: [
      "Live Native Language Bridge (Hindi, Marathi, etc.)",
      "HD Video & Voice Calls",
      "Real-Time Smart Call Prompts",
      "Streak & Fluency Tracker",
    ],
  });
}
