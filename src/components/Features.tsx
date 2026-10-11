"use client";

import React from "react";
import { Users, Video, Sparkles, Sprout, TrendingUp, ShieldCheck } from "lucide-react";
import { features } from "@/data/features";

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users size={24} />,
  Video: <Video size={24} />,
  Sparkles: <Sparkles size={24} />,
  Sprout: <Sprout size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  ShieldCheck: <ShieldCheck size={24} />,
};

const tintMap: Record<string, { bg: string; text: string }> = {
  partners: { bg: "#eef2ff", text: "#4f46e5" },
  calls: { bg: "#f5f3ff", text: "#7c3aed" },
  tools: { bg: "#fdf2f8", text: "#db2777" },
  beginner: { bg: "#ecfdf5", text: "#059669" },
  progress: { bg: "#eff6ff", text: "#2563eb" },
  safety: { bg: "#f0fdfa", text: "#0d9488" },
};

export default function Features() {
  return (
    <section
      id="practice"
      style={{
        padding: "80px 0",
        backgroundColor: "#ffffff",
        borderTop: "1px solid #f1f5f9",
        borderBottom: "1px solid #f1f5f9",
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 56px" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 3.4vw, 40px)",
              color: "#0f172a",
              marginBottom: "14px",
            }}
          >
            Why Choose SpeakTogether?
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "#64748b",
              lineHeight: 1.6,
            }}
          >
            More than just calls — we give you the right tools, support and structure
            to actually improve your English.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
          }}
          className="features-grid"
        >
          {features.map((feat) => {
            const tint = tintMap[feat.id] || { bg: "#f1f5f9", text: "#4f46e5" };
            return (
              <div
                key={feat.id}
                className="card-clean"
                style={{
                  padding: "36px 30px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  borderRadius: "24px",
                }}
              >
                {/* Circular Icon Container */}
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: tint.bg,
                    color: tint.text,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "22px",
                    boxShadow: `0 8px 20px -6px ${tint.bg}`,
                    transition: "transform 0.25s ease",
                  }}
                  className="feature-icon"
                >
                  {iconMap[feat.icon]}
                </div>

                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "12px",
                  }}
                >
                  {feat.title}
                </h3>

                <p
                  style={{
                    fontSize: "15px",
                    color: "#64748b",
                    lineHeight: 1.6,
                  }}
                >
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 990px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
