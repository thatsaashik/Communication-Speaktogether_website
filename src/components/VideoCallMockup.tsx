"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  PhoneOff,
  Lightbulb,
  MessageCircle,
  BookOpen,
  RefreshCw,
} from "lucide-react";
import { hindiExamples } from "@/data/examples";

export default function VideoCallMockup() {
  const [micActive, setMicActive] = useState(true);
  const [videoActive, setVideoActive] = useState(true);
  const [callSeconds, setCallSeconds] = useState(754); // 12:34
  const [currentPromptIdx, setCurrentPromptIdx] = useState(0);

  // Timer simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setCallSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const currentExample = hindiExamples[currentPromptIdx % hindiExamples.length];

  const handleNextSuggestion = () => {
    setCurrentPromptIdx((prev) => (prev + 1) % hindiExamples.length);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "580px",
        margin: "0 auto",
      }}
    >
      {/* Hand-drawn playful doodle note on top right */}
      <div
        style={{
          position: "absolute",
          top: "-38px",
          right: "12px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        <span
          className="hand-note"
          style={{
            fontSize: "19px",
            lineHeight: 1.1,
            transform: "rotate(-3deg)",
            color: "#6366f1",
            fontWeight: 700,
          }}
        >
          Real conversations.<br />Real progress.
        </span>
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          stroke="#6366f1"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transform: "rotate(15deg)" }}
        >
          <path d="M 5 10 Q 25 5 28 26" />
          <path d="M 22 22 L 28 26 L 31 18" />
        </svg>
      </div>

      {/* Main Unified Video Call Card Container */}
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "26px",
          overflow: "hidden",
          border: "1px solid #e2e8f0",
          boxShadow: "0 25px 60px -15px rgba(15, 23, 42, 0.16), 0 0 0 1px rgba(226, 232, 240, 0.8)",
        }}
      >
        {/* Top Control Bar: Mode Status + Toggle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 18px",
            backgroundColor: "#f8fafc",
            borderBottom: "1px solid #e2e8f0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: videoActive ? "#10b981" : "#f59e0b",
                boxShadow: videoActive ? "0 0 8px #10b981" : "none",
              }}
            />
            <span style={{ fontSize: "12.5px", fontWeight: 700, color: "#334155" }}>
              Practice Mode:
            </span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: videoActive ? "#4f46e5" : "#d97706",
              }}
            >
              {videoActive ? "📹 Video Call (Face-to-Face)" : "🎙️ Voice-Only (Camera Off)"}
            </span>
          </div>

          <button
            onClick={() => setVideoActive(!videoActive)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "5px 12px",
              borderRadius: "8px",
              border: videoActive ? "1px solid #e0e7ff" : "1px solid #fef3c7",
              backgroundColor: videoActive ? "#eef2ff" : "#fef3c7",
              color: videoActive ? "#4338ca" : "#92400e",
              fontSize: "12px",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            {videoActive ? (
              <>
                <VideoOff size={13} />
                <span>Camera Off (Audio Only)</span>
              </>
            ) : (
              <>
                <Video size={13} />
                <span>Turn On Camera</span>
              </>
            )}
          </button>
        </div>

        {/* Video Call Screen Frame */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 10",
            backgroundColor: "#0f172a",
            overflow: "hidden",
          }}
        >
          {videoActive ? (
            <Image
              src="/images/hero-learner.jpg"
              alt="Learner practicing English speaking over video call"
              fill
              sizes="(max-width: 768px) 100vw, 580px"
              priority
              style={{
                objectFit: "cover",
              }}
            />
          ) : (
            /* Friendly, clean Audio-Only Mode Screen */
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(circle at center, #1e1b4b 0%, #0f172a 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                textAlign: "center",
                color: "#ffffff",
              }}
            >
              {/* Pulsing Audio Waves Ring */}
              <div
                style={{
                  position: "relative",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "12px",
                  boxShadow: "0 0 30px rgba(99, 102, 241, 0.4)",
                }}
              >
                <Mic size={32} color="#ffffff" />
                <div
                  style={{
                    position: "absolute",
                    inset: "-6px",
                    borderRadius: "50%",
                    border: "2px solid rgba(129, 140, 248, 0.5)",
                    animation: "pulse 2s infinite",
                  }}
                />
              </div>

              <div
                style={{
                  background: "rgba(16, 185, 129, 0.2)",
                  border: "1px solid rgba(16, 185, 129, 0.4)",
                  padding: "3px 12px",
                  borderRadius: "9999px",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#34d399",
                  marginBottom: "6px",
                }}
              >
                🎙️ Audio-Only Mode • Shy-Friendly
              </div>

              <h4 style={{ margin: "0 0 4px 0", fontSize: "16px", fontWeight: 700 }}>
                Camera is Off (Speaking Voice Active)
              </h4>
              <p
                style={{
                  margin: "0 0 14px 0",
                  fontSize: "12.5px",
                  color: "#94a3b8",
                  maxWidth: "320px",
                  lineHeight: 1.4,
                }}
              >
                Zero pressure! Practice English speaking without sharing your video.
              </p>

              <button
                onClick={() => setVideoActive(true)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: "#4f46e5",
                  color: "#ffffff",
                  border: "none",
                  padding: "8px 18px",
                  borderRadius: "9999px",
                  fontSize: "12.5px",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(79, 70, 229, 0.35)",
                }}
              >
                <Video size={14} />
                <span>Turn On Camera When Ready</span>
              </button>
            </div>
          )}

          {/* Caller Badge Top Left */}
          <div
            style={{
              position: "absolute",
              top: "14px",
              left: "14px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(15, 23, 42, 0.72)",
              backdropFilter: "blur(10px)",
              padding: "5px 12px",
              borderRadius: "9999px",
              color: "#ffffff",
              fontSize: "11.5px",
              fontWeight: 600,
              zIndex: 5,
            }}
          >
            <span className="pulse-live" />
            <span>Live • {currentExample.context}</span>
          </div>

          {/* Picture-in-Picture Partner Feed */}
          <div
            style={{
              position: "absolute",
              top: "14px",
              right: "14px",
              width: "120px",
              aspectRatio: "4 / 3",
              borderRadius: "12px",
              overflow: "hidden",
              border: "2px solid rgba(255, 255, 255, 0.9)",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.35)",
              background: "#1e293b",
              zIndex: 5,
            }}
          >
            <Image
              src="/images/partner-learner.jpg"
              alt="Speaking partner waving back"
              fill
              sizes="120px"
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "4px",
                left: "6px",
                background: "rgba(0, 0, 0, 0.65)",
                padding: "2px 6px",
                borderRadius: "99px",
                color: "#ffffff",
                fontSize: "9.5px",
                fontWeight: 600,
              }}
            >
              Partner (Alex)
            </div>
          </div>

          {/* Call Controls Bar at the bottom (Fully Visible, Zero Overlap) */}
          <div
            style={{
              position: "absolute",
              bottom: "14px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(15, 23, 42, 0.85)",
              backdropFilter: "blur(16px)",
              padding: "7px 16px",
              borderRadius: "9999px",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              zIndex: 10,
            }}
          >
            {/* Mic Button */}
            <button
              onClick={() => setMicActive(!micActive)}
              aria-label={micActive ? "Mute microphone" : "Unmute microphone"}
              title={micActive ? "Mute microphone" : "Unmute microphone"}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: micActive ? "rgba(255, 255, 255, 0.2)" : "#ef4444",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {micActive ? <Mic size={16} /> : <MicOff size={16} />}
            </button>

            {/* Video Toggle Button */}
            <button
              onClick={() => setVideoActive(!videoActive)}
              aria-label={videoActive ? "Turn off camera" : "Turn on camera"}
              title={videoActive ? "Camera ON (Click to turn off)" : "Camera OFF (Click to turn on)"}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: videoActive ? "#10b981" : "#f59e0b",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {videoActive ? <Video size={16} /> : <VideoOff size={16} />}
            </button>

            {/* End Call Button */}
            <button
              aria-label="End call"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "#ef4444",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                cursor: "pointer",
                transition: "transform 0.15s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.08)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
            >
              <PhoneOff size={16} />
            </button>

            {/* Call Duration */}
            <div
              style={{
                color: "#ffffff",
                fontSize: "12.5px",
                fontWeight: 700,
                letterSpacing: "0.05em",
                paddingLeft: "8px",
                borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              {formatTime(callSeconds)}
            </div>
          </div>
        </div>

        {/* Clean, Non-Overlapping In-Call Smart Assistant Dock (Directly Below Screen) */}
        <div
          style={{
            padding: "16px 20px",
            backgroundColor: "#ffffff",
            borderTop: "1px solid #e2e8f0",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "26px",
                  height: "26px",
                  borderRadius: "7px",
                  backgroundColor: "#fef3c7",
                  color: "#d97706",
                }}
              >
                <Lightbulb size={15} />
              </span>
              <span style={{ fontWeight: 800, fontSize: "13px", color: "#0f172a" }}>
                Smart Prompt Helper
              </span>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  backgroundColor: "#e0e7ff",
                  color: "#4338ca",
                  padding: "2px 8px",
                  borderRadius: "6px",
                }}
              >
                Topic: {currentExample.context}
              </span>
            </div>

            <button
              onClick={handleNextSuggestion}
              title="Get another speaking suggestion"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                background: "#f1f5f9",
                border: "1px solid #e2e8f0",
                color: "#4f46e5",
                fontSize: "11.5px",
                fontWeight: 700,
                padding: "4px 10px",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#e0e7ff")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#f1f5f9")}
            >
              <RefreshCw size={12} />
              <span>Next Idea</span>
            </button>
          </div>

          {/* Suggested Sentence */}
          <div
            style={{
              backgroundColor: "#f8fafc",
              border: "1px solid #edf2f7",
              borderRadius: "12px",
              padding: "10px 14px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#10b981",
                textTransform: "uppercase",
                letterSpacing: "0.03em",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginBottom: "3px",
              }}
            >
              <MessageCircle size={12} />
              Try Saying This:
            </div>
            <p
              style={{
                margin: 0,
                fontSize: "13.5px",
                fontWeight: 600,
                color: "#0f172a",
                lineHeight: 1.45,
              }}
            >
              &ldquo;{currentExample.english}&rdquo;
            </p>
          </div>

          {/* Useful Words Chips */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "6px",
              fontSize: "12px",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                color: "#64748b",
                fontWeight: 600,
              }}
            >
              <BookOpen size={13} color="#6366f1" />
              Words:
            </span>
            {currentExample.vocabulary.map((word) => (
              <span
                key={word}
                style={{
                  backgroundColor: "#f1f5f9",
                  color: "#334155",
                  padding: "2px 8px",
                  borderRadius: "6px",
                  fontSize: "11.5px",
                  fontWeight: 600,
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
