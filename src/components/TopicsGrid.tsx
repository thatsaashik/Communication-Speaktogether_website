"use client";

import React, { useState } from "react";
import { Sun, Gamepad2, Briefcase, Laptop, Plane, Target, ArrowRight, MessageCircle } from "lucide-react";
import { topics } from "@/data/topics";

const iconMap: Record<string, React.ReactNode> = {
  Sun: <Sun size={24} color="#f59e0b" />,
  Gamepad2: <Gamepad2 size={24} color="#8b5cf6" />,
  Briefcase: <Briefcase size={24} color="#3b82f6" />,
  Laptop: <Laptop size={24} color="#06b6d4" />,
  Plane: <Plane size={24} color="#ec4899" />,
  Target: <Target size={24} color="#10b981" />,
};

export default function TopicsGrid() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const activeTopicObj = topics.find((t) => t.id === selectedTopic);

  return (
    <section
      id="topics"
      style={{
        padding: "84px 0",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="container">
        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "40px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(26px, 3.2vw, 38px)",
                color: "#0f172a",
                marginBottom: "8px",
              }}
            >
              Popular Conversation Topics
            </h2>
            <p style={{ fontSize: "16.5px", color: "#64748b" }}>
              Choose from a variety of topics or let us suggest one for you.
            </p>
          </div>

          <a
            href="#topics"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              color: "#4f46e5",
              fontWeight: 700,
              fontSize: "14.5px",
              textDecoration: "none",
            }}
          >
            <span>View All Topics</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* 6 Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "18px",
          }}
          className="topics-grid"
        >
          {topics.map((t) => {
            const isSelected = selectedTopic === t.id;
            return (
              <div
                key={t.id}
                onClick={() => setSelectedTopic(isSelected ? null : t.id)}
                className="card-clean"
                style={{
                  padding: "24px 18px",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  border: isSelected ? "2px solid #4f46e5" : "1px solid #e2e8f0",
                  backgroundColor: isSelected ? "#f8fafc" : "#ffffff",
                  transition: "all 0.22s ease",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "14px",
                    backgroundColor: "#f8fafc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "14px",
                    boxShadow: "0 4px 12px rgba(15, 23, 42, 0.04)",
                  }}
                >
                  {iconMap[t.icon]}
                </div>

                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "6px",
                  }}
                >
                  {t.title}
                </h3>

                <p
                  style={{
                    fontSize: "12.5px",
                    color: "#64748b",
                    lineHeight: 1.45,
                  }}
                >
                  {t.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Expandable Topic Discussion Prompts Drawer */}
        {activeTopicObj && (
          <div
            style={{
              marginTop: "28px",
              padding: "24px 28px",
              backgroundColor: "#f8fafc",
              borderRadius: "20px",
              border: "1.5px solid #c7d2fe",
              boxShadow: "0 10px 25px -8px rgba(79, 70, 229, 0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "20px" }}>💡</span>
                <h4 style={{ fontSize: "17px", fontWeight: 700, color: "#0f172a" }}>
                  Practice Prompts for &ldquo;{activeTopicObj.title}&rdquo;
                </h4>
              </div>
              <button
                onClick={() => setSelectedTopic(null)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#64748b",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                Close ✕
              </button>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
              }}
              className="prompts-grid"
            >
              {activeTopicObj.starterQuestions.map((q, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "16px 18px",
                    borderRadius: "14px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#4f46e5",
                      marginBottom: "6px",
                    }}
                  >
                    <MessageCircle size={13} />
                    <span>Question {i + 1}</span>
                  </div>
                  <p style={{ fontSize: "14px", fontWeight: 500, color: "#1e293b", lineHeight: 1.45 }}>
                    &ldquo;{q}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 1040px) {
          .topics-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .topics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .prompts-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
