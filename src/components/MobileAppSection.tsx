"use client";

import React from "react";
import { Sparkles, CheckCircle2, ShieldCheck, Bell, Zap, Headphones, ArrowRight } from "lucide-react";
import PlayStoreBadge from "./PlayStoreBadge";

interface MobileAppSectionProps {
  onOpenEarlyAccess: () => void;
}

export default function MobileAppSection({ onOpenEarlyAccess }: MobileAppSectionProps) {
  return (
    <section
      id="mobile-app"
      style={{
        padding: "96px 0",
        backgroundColor: "#f8fafc",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid #e2e8f0",
        borderBottom: "1px solid #e2e8f0",
      }}
    >
      {/* Background Decorative Blur Spheres */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-5%",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "64px",
            alignItems: "center",
          }}
          className="mobile-app-grid"
        >
          {/* Left Column: Information & Play Store CTA */}
          <div>
            {/* Top Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "linear-gradient(135deg, #eef2ff 0%, #ede9fe 100%)",
                border: "1.5px solid #c7d2fe",
                borderRadius: "9999px",
                padding: "8px 18px",
                marginBottom: "22px",
                fontSize: "13px",
                color: "#4338ca",
                fontWeight: 700,
                boxShadow: "0 2px 10px rgba(99, 102, 241, 0.1)",
              }}
            >
              <Sparkles size={15} color="#6366f1" />
              <span>COMING SOON ON MOBILE • GOOGLE PLAY</span>
            </div>

            {/* Main Section Headline */}
            <h2
              style={{
                fontSize: "clamp(30px, 3.6vw, 48px)",
                fontWeight: 800,
                color: "#0f172a",
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                marginBottom: "18px",
              }}
            >
              Practice English Anywhere <br />
              with the <span className="text-gradient">SpeakTogether App</span>
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: "17px",
                color: "#475569",
                lineHeight: 1.65,
                marginBottom: "28px",
                maxWidth: "540px",
              }}
            >
              Your personal English conversation gym in your pocket! Practice during daily walks,
              commutes, or evening tea. Connect with friendly learners instantly through voice or video.
            </p>

            {/* Crucial Value Proposition Box: 100% Free & No Subscriptions */}
            <div
              style={{
                backgroundColor: "#ecfdf5",
                border: "1.5px solid #a7f3d0",
                borderRadius: "20px",
                padding: "18px 22px",
                marginBottom: "32px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                boxShadow: "0 4px 15px rgba(16, 185, 129, 0.08)",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: "#10b981",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 6px 14px rgba(16, 185, 129, 0.3)",
                }}
              >
                <ShieldCheck size={24} />
              </div>
              <div>
                <div style={{ fontSize: "15.5px", fontWeight: 800, color: "#065f46", marginBottom: "2px" }}>
                  100% Free Forever • No Subscriptions
                </div>
                <div style={{ fontSize: "13.5px", color: "#047857", lineHeight: 1.4 }}>
                  No hidden credit card requirements, no paywalled limits. Practice as much as you want without paying a single rupee.
                </div>
              </div>
            </div>

            {/* 4 Feature Bullets */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "18px 24px",
                marginBottom: "36px",
              }}
              className="feature-bullets-grid"
            >
              {[
                {
                  icon: <Zap size={18} color="#6366f1" />,
                  title: "1-Tap Quick Match",
                  desc: "Instant pairing with online partners",
                },
                {
                  icon: <Headphones size={18} color="#059669" />,
                  title: "Voice-Only Audio Mode",
                  desc: "Camera optional for shy learners",
                },
                {
                  icon: <Bell size={18} color="#d97706" />,
                  title: "Daily Practice Reminders",
                  desc: "Build consistency in 15 mins/day",
                },
                {
                  icon: <CheckCircle2 size={18} color="#2563eb" />,
                  title: "Real-Time Topic Helper",
                  desc: "Never run out of things to say",
                },
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "10px",
                      backgroundColor: "#ffffff",
                      border: "1px solid #e2e8f0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#0f172a" }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#64748b", marginTop: "2px" }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Play Store CTA Action Area */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "16px",
              }}
            >
              {/* Play Store Official Button */}
              <PlayStoreBadge
                onClick={onOpenEarlyAccess}
                size="lg"
                variant="dark"
                showFreeTag={false}
              />

              {/* Pre-Register Button */}
              <button
                type="button"
                onClick={onOpenEarlyAccess}
                className="btn-primary"
                style={{
                  padding: "15px 26px",
                  fontSize: "15px",
                  borderRadius: "14px",
                  gap: "8px",
                }}
              >
                <span>Notify Me on Launch</span>
                <ArrowRight size={17} />
              </button>
            </div>

            <p style={{ fontSize: "12.5px", color: "#64748b", marginTop: "12px", marginLeft: "4px" }}>
              ⚡ Pre-register today to get priority early beta access on Android.
            </p>
          </div>

          {/* Right Column: High-Fidelity Mobile App Mockup */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Soft Ambient Shadow Backdrop */}
            <div
              style={{
                position: "absolute",
                width: "280px",
                height: "540px",
                borderRadius: "50px",
                background: "linear-gradient(135deg, rgba(99, 102, 241, 0.35) 0%, rgba(16, 185, 129, 0.25) 100%)",
                filter: "blur(32px)",
                transform: "translateY(20px)",
                zIndex: 0,
              }}
            />

            {/* Smartphone Frame */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                width: "310px",
                height: "620px",
                backgroundColor: "#0f172a",
                borderRadius: "44px",
                padding: "12px",
                boxShadow:
                  "0 25px 60px -15px rgba(15, 23, 42, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 0 0 2px rgba(255, 255, 255, 0.15)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Screen Glass */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#ffffff",
                  borderRadius: "34px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                {/* Status Bar & Punch-Hole Camera */}
                <div
                  style={{
                    backgroundColor: "#4f46e5",
                    padding: "10px 16px 8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: 600,
                  }}
                >
                  <span>9:41</span>
                  {/* Punch Hole */}
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#0f172a",
                    }}
                  />
                  <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
                    <span>5G</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Mobile App Top Header */}
                <div
                  style={{
                    backgroundColor: "#4f46e5",
                    padding: "8px 16px 18px",
                    color: "#ffffff",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontSize: "16px", fontWeight: 800, letterSpacing: "-0.01em" }}>
                        SpeakTogether
                      </div>
                      <div style={{ fontSize: "11px", opacity: 0.9 }}>
                        Online Practice Hub
                      </div>
                    </div>
                    {/* Free Badge */}
                    <div
                      style={{
                        backgroundColor: "#10b981",
                        color: "#ffffff",
                        fontSize: "10px",
                        fontWeight: 800,
                        padding: "3px 8px",
                        borderRadius: "9999px",
                        letterSpacing: "0.03em",
                      }}
                    >
                      100% FREE
                    </div>
                  </div>
                </div>

                {/* Mobile App Screen Body */}
                <div
                  style={{
                    flex: 1,
                    backgroundColor: "#f8fafc",
                    padding: "16px 14px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    overflowY: "hidden",
                  }}
                >
                  {/* Active Partner Call Card */}
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "18px",
                      padding: "14px",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                      <div
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
                          color: "#ffffff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                          fontSize: "16px",
                          flexShrink: 0,
                        }}
                      >
                        A
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <span style={{ fontSize: "13.5px", fontWeight: 700, color: "#0f172a" }}>
                            Aman Verma
                          </span>
                          <span
                            style={{
                              width: "7px",
                              height: "7px",
                              borderRadius: "50%",
                              backgroundColor: "#10b981",
                            }}
                          />
                        </div>
                        <div style={{ fontSize: "11px", color: "#64748b" }}>
                          Beginner • Hindi Native • Speaking now
                        </div>
                      </div>
                    </div>

                    {/* Audio Wave Visualizer Simulation */}
                    <div
                      style={{
                        backgroundColor: "#f1f5f9",
                        borderRadius: "12px",
                        padding: "8px 12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                      }}
                    >
                      <span style={{ fontSize: "11px", color: "#64748b", fontWeight: 600 }}>
                        🎙️ Voice Call (08:24)
                      </span>
                      {/* Equalizer Bars */}
                      <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", height: "14px" }}>
                        {[6, 12, 14, 8, 13, 10, 14, 7, 11].map((h, i) => (
                          <div
                            key={i}
                            style={{
                              width: "2.5px",
                              height: `${h}px`,
                              backgroundColor: "#4f46e5",
                              borderRadius: "2px",
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Smart Conversation Cue */}
                    <div
                      style={{
                        backgroundColor: "#eef2ff",
                        borderRadius: "10px",
                        padding: "8px 10px",
                        borderLeft: "3px solid #4f46e5",
                      }}
                    >
                      <div style={{ fontSize: "10.5px", fontWeight: 700, color: "#4338ca", marginBottom: "2px" }}>
                        💡 Current Topic Question:
                      </div>
                      <div style={{ fontSize: "11px", color: "#1e1b4b", lineHeight: 1.35 }}>
                        &ldquo;What is your favorite festival and how do you celebrate it?&rdquo;
                      </div>
                    </div>
                  </div>

                  {/* Quick Features Highlight List */}
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "16px",
                      padding: "12px",
                      border: "1px solid #e2e8f0",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <div style={{ fontSize: "11.5px", fontWeight: 700, color: "#0f172a" }}>
                      App Highlights
                    </div>
                    {[
                      { icon: "✨", text: "Zero Subscriptions — Always Free" },
                      { icon: "🔒", text: "Camera 100% Optional" },
                      { icon: "👥", text: "Instant Online Partner Matching" },
                    ].map((row, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontSize: "11px",
                          color: "#334155",
                        }}
                      >
                        <span style={{ fontSize: "12px" }}>{row.icon}</span>
                        <span>{row.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Play Store Banner Card inside phone */}
                  <div
                    style={{
                      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                      borderRadius: "14px",
                      padding: "10px 12px",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "auto",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "9.5px", color: "#94a3b8", textTransform: "uppercase" }}>
                        Android App
                      </div>
                      <div style={{ fontSize: "12px", fontWeight: 800 }}>
                        Google Play Store
                      </div>
                    </div>
                    <span
                      style={{
                        backgroundColor: "#10b981",
                        color: "#ffffff",
                        fontSize: "9.5px",
                        fontWeight: 700,
                        padding: "3px 8px",
                        borderRadius: "9999px",
                      }}
                    >
                      COMING SOON
                    </span>
                  </div>
                </div>

                {/* Bottom Home Indicator Bar */}
                <div
                  style={{
                    height: "16px",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "3px",
                      backgroundColor: "#cbd5e1",
                      borderRadius: "9999px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .mobile-app-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 580px) {
          .feature-bullets-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
