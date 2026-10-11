"use client";

import React, { useState } from "react";
import { User, Search, Video, TrendingUp, Check } from "lucide-react";

const stepsData = [
  {
    step: 1,
    title: "Create Your Profile",
    description: "Tell us your level, goals and interests. (It only takes a minute!)",
    icon: <User size={22} />,
    color: "#6366f1",
  },
  {
    step: 2,
    title: "Find a Partner",
    description: "Browse profiles or use quick match. Send a request and wait for acceptance.",
    icon: <Search size={22} />,
    color: "#8b5cf6",
  },
  {
    step: 3,
    title: "Start Practicing",
    description: "Talk using text, voice or video. Get helpful suggestions during your call.",
    icon: <Video size={22} />,
    color: "#ec4899",
  },
  {
    step: 4,
    title: "Learn & Grow",
    description: "Save new words, review feedback and track your progress daily.",
    icon: <TrendingUp size={22} />,
    color: "#10b981",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section
      id="how-it-works"
      style={{
        padding: "90px 0",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header with Doodle Note */}
        <div style={{ position: "relative", textAlign: "center", marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 3.4vw, 40px)",
              color: "#0f172a",
              marginBottom: "12px",
            }}
          >
            How It Works
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "#64748b",
            }}
          >
            It&apos;s simple. Just a few steps and you&apos;re on your way!
          </p>

          {/* Cute Doodle Callout */}
          <div
            style={{
              position: "absolute",
              top: "-10px",
              right: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pointerEvents: "none",
            }}
            className="doodle-callout"
          >
            <span
              className="hand-note"
              style={{
                fontSize: "19px",
                transform: "rotate(6deg)",
                color: "#7c3aed",
                lineHeight: 1.1,
              }}
            >
              Small steps.<br />Big improvement! 😊
            </span>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              stroke="#7c3aed"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M 5 2 Q 18 10 22 24" />
              <path d="M 16 20 L 22 24 L 25 18" />
            </svg>
          </div>
        </div>

        {/* 4 Connected Steps Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            position: "relative",
          }}
          className="steps-grid"
        >
          {stepsData.map((item, index) => {
            const isActive = activeStep === item.step;
            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(item.step)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  padding: "20px 14px",
                  borderRadius: "20px",
                  background: isActive ? "#ffffff" : "transparent",
                  boxShadow: isActive ? "0 12px 30px -10px rgba(79, 70, 229, 0.15)" : "none",
                  border: isActive ? "1.5px solid #c7d2fe" : "1.5px solid transparent",
                  transition: "all 0.25s ease",
                }}
              >
                {/* Step Top Icon Badge */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    backgroundColor: isActive ? item.color : "#f1f5f9",
                    color: isActive ? "#ffffff" : "#64748b",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                    boxShadow: isActive ? `0 8px 20px -4px ${item.color}` : "none",
                    transition: "all 0.25s ease",
                  }}
                >
                  {item.icon}
                </div>

                {/* Step Number Dot with connection */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: isActive ? "#4f46e5" : "#e2e8f0",
                    color: isActive ? "#ffffff" : "#64748b",
                    fontSize: "13px",
                    fontWeight: 700,
                    marginBottom: "14px",
                  }}
                >
                  {item.step}
                </div>

                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "14.5px",
                    color: "#64748b",
                    lineHeight: 1.55,
                  }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
          .doodle-callout {
            display: none !important;
          }
        }
        @media (max-width: 580px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
