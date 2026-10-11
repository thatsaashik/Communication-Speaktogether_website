"use client";

import React from "react";

interface PlayStoreBadgeProps {
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
  showFreeTag?: boolean;
}

export default function PlayStoreBadge({
  onClick,
  size = "md",
  variant = "dark",
  showFreeTag = true,
}: PlayStoreBadgeProps) {
  const isDark = variant === "dark";

  const paddingMap = {
    sm: "8px 14px",
    md: "10px 18px",
    lg: "14px 24px",
  };

  const iconSizeMap = {
    sm: 22,
    md: 28,
    lg: 34,
  };

  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "6px",
      }}
    >
      <button
        type="button"
        onClick={onClick}
        aria-label="Google Play Store - Coming Soon"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: size === "sm" ? "10px" : "14px",
          padding: paddingMap[size],
          borderRadius: "14px",
          backgroundColor: isDark ? "#0f172a" : "#ffffff",
          color: isDark ? "#ffffff" : "#0f172a",
          border: isDark ? "1px solid rgba(255, 255, 255, 0.15)" : "1.5px solid #cbd5e1",
          boxShadow: isDark
            ? "0 10px 25px -5px rgba(15, 23, 42, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.1)"
            : "0 10px 25px -5px rgba(0, 0, 0, 0.08)",
          cursor: "pointer",
          transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
          textDecoration: "none",
          position: "relative",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = isDark
            ? "0 14px 30px -4px rgba(15, 23, 42, 0.55), 0 0 0 2px rgba(99, 102, 241, 0.4)"
            : "0 14px 30px -4px rgba(0, 0, 0, 0.15), 0 0 0 2px rgba(99, 102, 241, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = isDark
            ? "0 10px 25px -5px rgba(15, 23, 42, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.1)"
            : "0 10px 25px -5px rgba(0, 0, 0, 0.08)";
        }}
      >
        {/* Google Play Colorful SVG Logo */}
        <div style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
          <svg
            width={iconSizeMap[size]}
            height={iconSizeMap[size]}
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M325.3 234.3L100.8 9.6C95.2 4 87.8 0.5 79.5 0.5C64.6 0.5 52.4 12.6 52.4 27.5V484.5C52.4 499.4 64.6 511.5 79.5 511.5C87.8 511.5 95.2 508 100.8 502.4L325.3 277.7L325.3 234.3Z"
              fill="#00E676"
            />
            <path
              d="M325.3 234.3L52.4 27.5C53.7 18.2 60.3 10.6 69.1 7.2L325.3 234.3Z"
              fill="#00C3FF"
            />
            <path
              d="M407.4 316.4L325.3 234.3L325.3 277.7L407.4 359.8C419.6 348.6 426.6 332.8 426.6 316.4C426.6 300 419.6 284.2 407.4 316.4Z"
              fill="#FFD400"
            />
            <path
              d="M325.3 234.3L407.4 316.4L445.6 278.2C464.7 259.1 464.7 228 445.6 208.9L407.4 170.7L325.3 234.3Z"
              fill="#FF334B"
            />
            <path
              d="M100.8 9.6L325.3 234.3L407.4 170.7L124.9 8.1C117.5 3.8 108.9 4.3 100.8 9.6Z"
              fill="#0086F9"
            />
            <path
              d="M100.8 502.4C108.9 507.7 117.5 508.2 124.9 503.9L407.4 341.3L325.3 277.7L100.8 502.4Z"
              fill="#D50000"
            />
          </svg>
        </div>

        {/* Text Details */}
        <div style={{ textAlign: "left" }}>
          <div
            style={{
              fontSize: size === "sm" ? "9px" : "10.5px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: isDark ? "#94a3b8" : "#64748b",
              lineHeight: 1.1,
            }}
          >
            Coming Soon to
          </div>
          <div
            style={{
              fontSize: size === "sm" ? "14px" : size === "md" ? "17px" : "20px",
              fontWeight: 800,
              letterSpacing: "-0.01em",
              color: isDark ? "#ffffff" : "#0f172a",
              lineHeight: 1.2,
            }}
          >
            Google Play
          </div>
        </div>

        {/* Small "Coming Soon" status pill */}
        <span
          style={{
            marginLeft: "4px",
            backgroundColor: "#4f46e5",
            color: "#ffffff",
            fontSize: "10px",
            fontWeight: 700,
            padding: "3px 8px",
            borderRadius: "9999px",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            boxShadow: "0 2px 6px rgba(79, 70, 229, 0.4)",
          }}
        >
          Soon
        </span>
      </button>

      {/* Free & No Subscription reassurance tag */}
      {showFreeTag && (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "11.5px",
            fontWeight: 700,
            color: "#059669",
            paddingLeft: "4px",
          }}
        >
          <span>✓</span>
          <span>100% Free • No Subscriptions</span>
        </div>
      )}
    </div>
  );
}
