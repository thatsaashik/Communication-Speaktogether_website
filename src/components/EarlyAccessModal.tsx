"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ArrowRight, CheckCircle2, Sparkles, Share2, Mail, User, Globe, Send, ShieldCheck, AlertCircle } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EarlyAccessModal({ isOpen, onClose }: ModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const [nativeLanguage, setNativeLanguage] = useState("Hindi");
  const [customLanguage, setCustomLanguage] = useState("");
  const [customLangError, setCustomLangError] = useState("");

  const [level, setLevel] = useState("Beginner");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [previewEmailUrl, setPreviewEmailUrl] = useState<string | null>(null);

  if (!isOpen) return null;

  // Comprehensive Email Validator
  const validateEmailFormat = (val: string): string => {
    const trimmed = val.trim();
    if (!trimmed) {
      return "Email address is required.";
    }
    if (trimmed.includes(" ")) {
      return "Email cannot contain spaces.";
    }
    if (trimmed.includes(",")) {
      return "Please replace the comma (,) with a dot (.).";
    }
    if (!trimmed.includes("@")) {
      return "Please include an '@' in the email address (e.g. name@gmail.com).";
    }
    const parts = trimmed.split("@");
    if (parts.length !== 2 || !parts[0] || !parts[1]) {
      return "Please enter a complete email address (e.g. name@gmail.com).";
    }
    const domain = parts[1];
    if (!domain.includes(".")) {
      return "Domain is missing an extension like .com or .in (e.g. gmail.com).";
    }
    const domainParts = domain.split(".");
    const tld = domainParts[domainParts.length - 1];
    if (tld.length < 2) {
      return "Please enter a valid domain extension (e.g. .com, .in).";
    }
    // RFC 5322 regex
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!regex.test(trimmed)) {
      return "Please enter a valid email format (e.g. name@gmail.com).";
    }
    return "";
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    if (emailTouched) {
      setEmailError(validateEmailFormat(val));
    }
    if (errorMessage) setErrorMessage("");
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    setEmailError(validateEmailFormat(email));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setCustomLangError("");

    if (!name.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    const emailErr = validateEmailFormat(email);
    if (emailErr) {
      setEmailTouched(true);
      setEmailError(emailErr);
      setErrorMessage(emailErr);
      return;
    }

    if (nativeLanguage === "Other" && !customLanguage.trim()) {
      setCustomLangError("Please write your native language in the field below.");
      setErrorMessage("Please specify your native language.");
      return;
    }

    const resolvedLanguage =
      nativeLanguage === "Other" ? customLanguage.trim() : nativeLanguage;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          nativeLanguage: resolvedLanguage,
          level,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setIsSuccess(true);
        if (data.previewUrl) {
          setPreviewEmailUrl(data.previewUrl);
        }
        try {
          const confetti = (await import("canvas-confetti")).default;
          confetti({
            particleCount: 110,
            spread: 80,
            origin: { y: 0.6 },
          });
        } catch (e) {}
      } else {
        setErrorMessage(data.error || "Failed to submit. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error. Please check your connection and retry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setName("");
    setEmail("");
    setEmailError("");
    setEmailTouched(false);
    setNativeLanguage("Hindi");
    setCustomLanguage("");
    setCustomLangError("");
    setErrorMessage("");
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        backgroundColor: "rgba(15, 23, 42, 0.6)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleReset();
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "520px",
          backgroundColor: "#ffffff",
          borderRadius: "28px",
          padding: "36px 32px",
          boxShadow: "0 25px 60px -15px rgba(15, 23, 42, 0.25)",
          border: "1px solid #e2e8f0",
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          aria-label="Close modal"
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "1px solid #e2e8f0",
            backgroundColor: "#f8fafc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#64748b",
            transition: "all 0.15s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#fee2e2";
            e.currentTarget.style.color = "#ef4444";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#f8fafc";
            e.currentTarget.style.color = "#64748b";
          }}
        >
          <X size={18} />
        </button>

        {!isSuccess ? (
          <div>
            {/* Modal Logo */}
            <div style={{ marginBottom: "16px", display: "inline-block" }}>
              <Image
                src="/SpeakTogether-removebg-preview.png"
                alt="SpeakTogether"
                width={140}
                height={50}
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Header Badge */}
            <div
              className="badge-mint"
              style={{
                display: "inline-flex",
                marginBottom: "14px",
                marginLeft: "8px",
                boxShadow: "0 2px 8px rgba(16, 185, 129, 0.15)",
                verticalAlign: "middle",
              }}
            >
              <Sparkles size={14} />
              <span>100% Free • Early Access Pass</span>
            </div>

            {/* Modal Title */}
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 800,
                color: "#0f172a",
                lineHeight: 1.25,
                marginBottom: "8px",
              }}
            >
              Start Practicing English Free
            </h3>

            <p
              style={{
                fontSize: "14px",
                color: "#64748b",
                lineHeight: 1.5,
                marginBottom: "16px",
              }}
            >
              Enter your details below. We will send an instant confirmation to your email,
              and our team will reach out with your early-access invitation!
            </p>

            {/* Mobile App Notice */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#f0fdf4",
                border: "1px solid #bbf7d0",
                borderRadius: "12px",
                padding: "8px 12px",
                marginBottom: "20px",
                fontSize: "12.5px",
                color: "#166534",
                fontWeight: 600,
              }}
            >
              <span>📱</span>
              <span>
                <strong>Google Play App Coming Soon:</strong> You will get priority beta access! (100% Free • No Subscriptions)
              </span>
            </div>

            {/* Simple Clean Form */}
            <form onSubmit={handleSubmit} noValidate>
              {/* Full Name Field */}
              <div style={{ marginBottom: "16px" }}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "13.5px",
                    fontWeight: 700,
                    color: "#334155",
                    marginBottom: "6px",
                  }}
                >
                  <User size={15} color="#6366f1" />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  autoFocus
                  required
                  placeholder="e.g. Priya Sharma"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errorMessage) setErrorMessage("");
                  }}
                  style={{
                    width: "100%",
                    padding: "13px 16px",
                    borderRadius: "14px",
                    border: "1.5px solid #e2e8f0",
                    fontSize: "15px",
                    outline: "none",
                    transition: "border-color 0.2s ease",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                  onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                />
              </div>

              {/* Email Address Field with Comprehensive Validation */}
              <div style={{ marginBottom: "18px" }}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "13.5px",
                    fontWeight: 700,
                    color: "#334155",
                    marginBottom: "6px",
                  }}
                >
                  <Mail size={15} color="#6366f1" />
                  <span>Email Address</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. priya@example.com"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  style={{
                    width: "100%",
                    padding: "13px 16px",
                    borderRadius: "14px",
                    border: emailError && emailTouched ? "1.5px solid #ef4444" : "1.5px solid #e2e8f0",
                    backgroundColor: emailError && emailTouched ? "#fffafa" : "#ffffff",
                    fontSize: "15px",
                    outline: "none",
                    transition: "border-color 0.2s ease, background-color 0.2s ease",
                  }}
                  onFocus={(e) => {
                    if (!emailError) e.target.style.borderColor = "#6366f1";
                  }}
                />

                {/* Inline Email Error Message */}
                {emailError && emailTouched && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#dc2626",
                      fontSize: "12.5px",
                      fontWeight: 600,
                      marginTop: "6px",
                    }}
                  >
                    <AlertCircle size={14} color="#dc2626" />
                    <span>{emailError}</span>
                  </div>
                )}
              </div>

              {/* Native Language Selector */}
              <div style={{ marginBottom: "18px" }}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#334155",
                    marginBottom: "8px",
                  }}
                >
                  <Globe size={14} color="#10b981" />
                  <span>Your Native Language (Mother Tongue)</span>
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {[
                    { label: "Hindi (हिन्दी)", val: "Hindi" },
                    { label: "Marathi (मराठी)", val: "Marathi" },
                    { label: "Bengali (বাংলা)", val: "Bengali" },
                    { label: "Spanish (Español)", val: "Spanish" },
                    { label: "Other", val: "Other" },
                  ].map((l) => (
                    <button
                      key={l.val}
                      type="button"
                      onClick={() => {
                        setNativeLanguage(l.val);
                        if (l.val !== "Other") {
                          setCustomLanguage("");
                          setCustomLangError("");
                        }
                        if (errorMessage) setErrorMessage("");
                      }}
                      style={{
                        padding: "6px 14px",
                        borderRadius: "9999px",
                        fontSize: "12.5px",
                        fontWeight: 600,
                        border: nativeLanguage === l.val ? "1.5px solid #4f46e5" : "1px solid #e2e8f0",
                        backgroundColor: nativeLanguage === l.val ? "#eef2ff" : "#ffffff",
                        color: nativeLanguage === l.val ? "#4f46e5" : "#475569",
                        cursor: "pointer",
                        transition: "all 0.15s ease",
                      }}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>

                {/* Custom Language Input when "Other" is selected */}
                {nativeLanguage === "Other" && (
                  <div style={{ marginTop: "10px" }}>
                    <input
                      type="text"
                      autoFocus
                      required
                      placeholder="Please specify your native language (e.g. Tamil, Telugu, Urdu, French...)"
                      value={customLanguage}
                      onChange={(e) => {
                        setCustomLanguage(e.target.value);
                        if (customLangError) setCustomLangError("");
                        if (errorMessage) setErrorMessage("");
                      }}
                      style={{
                        width: "100%",
                        padding: "11px 16px",
                        borderRadius: "12px",
                        border: customLangError ? "1.5px solid #ef4444" : "1.5px solid #6366f1",
                        backgroundColor: "#f8fafc",
                        fontSize: "14px",
                        outline: "none",
                        transition: "all 0.2s ease",
                      }}
                      onFocus={(e) => (e.target.style.backgroundColor = "#ffffff")}
                      onBlur={(e) => (e.target.style.backgroundColor = "#f8fafc")}
                    />
                    {customLangError && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          color: "#dc2626",
                          fontSize: "12px",
                          fontWeight: 600,
                          marginTop: "4px",
                        }}
                      >
                        <AlertCircle size={13} color="#dc2626" />
                        <span>{customLangError}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Current English Level */}
              <div style={{ marginBottom: "22px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#334155",
                    marginBottom: "8px",
                  }}
                >
                  Current English Level
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
                  {[
                    { label: "Beginner", sub: "Hesitant to speak" },
                    { label: "Intermediate", sub: "Can talk a little" },
                    { label: "Advanced", sub: "Want total fluency" },
                  ].map((lvl) => (
                    <button
                      key={lvl.label}
                      type="button"
                      onClick={() => setLevel(lvl.label)}
                      style={{
                        padding: "10px 12px",
                        borderRadius: "12px",
                        border: level === lvl.label ? "2px solid #4f46e5" : "1.5px solid #e2e8f0",
                        backgroundColor: level === lvl.label ? "#eef2ff" : "#ffffff",
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "all 0.15s ease",
                      }}
                    >
                      <div style={{ fontSize: "13.5px", fontWeight: 700, color: level === lvl.label ? "#4f46e5" : "#0f172a" }}>
                        {lvl.label}
                      </div>
                      <div style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>
                        {lvl.sub}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* General Form Error Alert */}
              {errorMessage && (
                <div
                  style={{
                    backgroundColor: "#fef2f2",
                    border: "1px solid #fecaca",
                    color: "#b91c1c",
                    padding: "10px 14px",
                    borderRadius: "12px",
                    fontSize: "13px",
                    fontWeight: 600,
                    marginBottom: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <AlertCircle size={15} color="#b91c1c" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
                style={{
                  width: "100%",
                  padding: "14px",
                  fontSize: "15.5px",
                  borderRadius: "14px",
                }}
              >
                <span>{isSubmitting ? "Sending Your Invitation..." : "Get Early Access Pass"}</span>
                <ArrowRight size={18} />
              </button>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  fontSize: "12px",
                  color: "#64748b",
                  marginTop: "14px",
                }}
              >
                <ShieldCheck size={14} color="#10b981" />
                <span>Zero spam. Direct confirmation to your email.</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div style={{ textAlign: "center", padding: "16px 0" }}>
            <div style={{ fontSize: "60px", marginBottom: "10px" }}>🎉</div>
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 800,
                color: "#0f172a",
                marginBottom: "8px",
              }}
            >
              Thank you for your interest, {name.split(" ")[0]}!
            </h3>

            <p
              style={{
                fontSize: "15px",
                color: "#475569",
                maxWidth: "420px",
                margin: "0 auto 18px",
                lineHeight: 1.55,
              }}
            >
              We have received your registration! An instant confirmation email was sent to{" "}
              <strong style={{ color: "#0f172a" }}>{email}</strong>.
            </p>

            <div
              style={{
                backgroundColor: "#ecfdf5",
                border: "1.5px solid #a7f3d0",
                borderRadius: "16px",
                padding: "16px 20px",
                marginBottom: "24px",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "#047857",
                  marginBottom: "4px",
                }}
              >
                <CheckCircle2 size={16} />
                <span>Our team will reach out to you shortly!</span>
              </div>
              <p style={{ fontSize: "13px", color: "#065f46", margin: 0, lineHeight: 1.45 }}>
                Your details have been logged and dispatched to our team at{" "}
                <strong>speaktogether713@gmail.com</strong>. We will contact you with your early access pass
                and Google Play app download notification as soon as it launches (100% Free • No Subscriptions).
              </p>
            </div>

            {previewEmailUrl && (
              <div style={{ marginBottom: "20px" }}>
                <a
                  href={previewEmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "13px",
                    color: "#4f46e5",
                    fontWeight: 600,
                    textDecoration: "underline",
                  }}
                >
                  📨 View sample confirmation email preview
                </a>
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `Hey! I just signed up for SpeakTogether to practice speaking English. It's free and beginner-friendly!`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  background: "#16a34a",
                  gap: "8px",
                  fontSize: "14px",
                  padding: "12px 22px",
                }}
              >
                <Share2 size={16} />
                <span>Share with a friend</span>
              </a>

              <button
                onClick={handleReset}
                className="btn-outline"
                style={{ fontSize: "14px", padding: "12px 20px" }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
