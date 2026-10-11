"use client";

import React from "react";
import { ArrowRight, Play, CheckCircle2, Shield, Users, Sparkles } from "lucide-react";
import VideoCallMockup from "./VideoCallMockup";

interface HeroProps {
  onOpenEarlyAccess: () => void;
}

export default function Hero({ onOpenEarlyAccess }: HeroProps) {
  return (
    <section
      id="top"
      style={{
        padding: "54px 0 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr",
            gap: "56px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Hero Content */}
          <div>
            {/* Top Badge */}
            <div
              className="badge-mint"
              style={{
                marginBottom: "20px",
                boxShadow: "0 2px 8px rgba(16, 185, 129, 0.15)",
              }}
            >
              <Sparkles size={14} />
              <span>Free English Speaking Practice for Everyone</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(38px, 4.4vw, 56px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#0f172a",
                lineHeight: 1.12,
                marginBottom: "20px",
              }}
            >
              Speak English <br />
              with Confidence <br />
              <span className="text-gradient">One Conversation at a Time</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "17.5px",
                color: "#475569",
                lineHeight: 1.65,
                maxWidth: "520px",
                marginBottom: "32px",
              }}
            >
              Join a friendly community of learners, find a speaking partner, and
              practice through text, voice or video calls. Improve your English,
              build confidence, and achieve your goals — for free!
            </p>

            {/* Reassuring Shy-Friendly Pill & Mobile App Pill */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "26px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#f0fdf4",
                  border: "1px solid #bbf7d0",
                  borderRadius: "9999px",
                  padding: "7px 16px",
                  fontSize: "13px",
                  color: "#166534",
                  fontWeight: 600,
                  boxShadow: "0 2px 8px rgba(16, 185, 129, 0.08)",
                }}
              >
                <span>🎙️</span>
                <span><strong>Camera is 100% Optional</strong> — Voice-only audio!</span>
              </div>

              {/* Mobile App Coming Soon Play Store Pill */}
              <a
                href="#mobile-app"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#eef2ff",
                  border: "1px solid #c7d2fe",
                  borderRadius: "9999px",
                  padding: "7px 16px",
                  fontSize: "13px",
                  color: "#4338ca",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 2px 8px rgba(99, 102, 241, 0.08)",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#e0e7ff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#eef2ff")}
              >
                <span>📱 Google Play App Coming Soon</span>
                <span
                  style={{
                    fontSize: "11px",
                    backgroundColor: "#10b981",
                    color: "#ffffff",
                    padding: "2px 7px",
                    borderRadius: "9999px",
                    fontWeight: 700,
                  }}
                >
                  100% Free • No Subscriptions
                </span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                alignItems: "center",
                marginBottom: "36px",
              }}
            >
              <button
                onClick={onOpenEarlyAccess}
                className="btn-primary"
                style={{
                  fontSize: "15.5px",
                  padding: "14px 28px",
                }}
              >
                <span>Start Practicing Free</span>
                <ArrowRight size={18} />
              </button>

              {/* WhatsApp Button with user number 9636852922 */}
              <a
                href="https://wa.me/919636852922?text=Hi!%20I'm%20interested%20in%20SpeakTogether%20English%20practice."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#25D366",
                  color: "#ffffff",
                  padding: "13px 22px",
                  borderRadius: "9999px",
                  fontSize: "14.5px",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(37, 211, 102, 0.35)",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#20ba59")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#25D366")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="#how-it-works"
                className="btn-outline"
                style={{
                  fontSize: "14.5px",
                  padding: "13px 20px",
                }}
              >
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    background: "#eef2ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#4f46e5",
                  }}
                >
                  <Play size={11} fill="#4f46e5" />
                </div>
                <span>How It Works</span>
              </a>
            </div>

            {/* Value Highlights / Trust Badges */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
                paddingTop: "24px",
                borderTop: "1px solid #edf2f7",
              }}
              className="trust-badges"
            >
              {/* Badge 1 */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div
                  style={{
                    color: "#10b981",
                    marginTop: "2px",
                    flexShrink: 0,
                  }}
                >
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#0f172a" }}>
                    100% Free
                  </div>
                  <div style={{ fontSize: "12px", color: "#64748b" }}>
                    No hidden charges
                  </div>
                </div>
              </div>

              {/* Badge 2 */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div
                  style={{
                    color: "#4f46e5",
                    marginTop: "2px",
                    flexShrink: 0,
                  }}
                >
                  <Shield size={18} />
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#0f172a" }}>
                    Safe & Friendly
                  </div>
                  <div style={{ fontSize: "12px", color: "#64748b" }}>
                    Verified learners
                  </div>
                </div>
              </div>

              {/* Badge 3 */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div
                  style={{
                    color: "#8b5cf6",
                    marginTop: "2px",
                    flexShrink: 0,
                  }}
                >
                  <Users size={18} />
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#0f172a" }}>
                    Learn Together
                  </div>
                  <div style={{ fontSize: "12px", color: "#64748b" }}>
                    Supportive peers
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Video Mockup */}
          <div style={{ position: "relative" }}>
            <VideoCallMockup />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .trust-badges {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
