"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section
      style={{
        padding: "84px 0",
        backgroundColor: "#f8fafc",
        borderTop: "1px solid #edf2f7",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2
            style={{
              fontSize: "clamp(26px, 3.2vw, 38px)",
              color: "#0f172a",
              marginBottom: "10px",
            }}
          >
            Real People. Real Progress.
          </h2>
          <p style={{ fontSize: "16.5px", color: "#64748b" }}>
            See how SpeakTogether is helping learners build confidence and achieve their goals.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
          className="test-grid"
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="card-clean"
              style={{
                padding: "26px 22px",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "#ffffff",
              }}
            >
              {/* Quote */}
              <p
                style={{
                  fontSize: "14px",
                  color: "#334155",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                  marginBottom: "20px",
                }}
              >
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      position: "relative",
                      border: "2px solid #e0e7ff",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="44px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div>
                    <h3
                      style={{
                        fontSize: "14.5px",
                        fontWeight: 700,
                        color: "#0f172a",
                        lineHeight: 1.2,
                      }}
                    >
                      {item.name}
                    </h3>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#64748b",
                      }}
                    >
                      {item.role} • India
                    </span>
                  </div>
                </div>

                {/* 5-star rating */}
                <div style={{ display: "flex", gap: "3px" }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .test-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .test-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
