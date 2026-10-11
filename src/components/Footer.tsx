"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Youtube, Instagram, Twitter, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0b132b",
        color: "#cbd5e1",
        padding: "64px 0 36px",
      }}
    >
      <div className="container">
        {/* Main Footer Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr",
            gap: "48px",
            marginBottom: "52px",
          }}
          className="footer-grid"
        >
          {/* Brand Info */}
          <div>
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "8px 16px",
                borderRadius: "16px",
                display: "inline-flex",
                alignItems: "center",
                marginBottom: "16px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
              }}
            >
              <Image
                src="/SpeakTogether-removebg-preview.png"
                alt="SpeakTogether - Practice Connect Grow"
                width={140}
                height={50}
                style={{ objectFit: "contain" }}
              />
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "#94a3b8",
                lineHeight: 1.6,
                maxWidth: "320px",
                marginBottom: "20px",
              }}
            >
              A friendly, supportive community to build confidence in spoken English.
              Practice with real learners anywhere, anytime.
            </p>
            <div style={{ fontSize: "12.5px", color: "#64748b" }}>
              Practice • Connect • Grow
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "16px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Home", href: "#top" },
                { label: "Practice", href: "#practice" },
                { label: "Learn", href: "#learn" },
                { label: "Community", href: "#topics" },
                { label: "About", href: "#how-it-works" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: "14px",
                      color: "#94a3b8",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#94a3b8")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "16px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Support
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "Help & FAQ",
                "Safety Guide",
                "Contact Us",
                "Terms of Service",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#top"
                    style={{
                      fontSize: "14px",
                      color: "#94a3b8",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#94a3b8")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "16px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Stay Connected
            </h4>
            <p style={{ fontSize: "14px", color: "#94a3b8", marginBottom: "16px" }}>
              Join our weekly community discussions and speaking circles.
            </p>
            <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
              {[
                { icon: <Youtube size={18} />, href: "#" },
                { icon: <Instagram size={18} />, href: "#" },
                { icon: <Twitter size={18} />, href: "#" },
                { icon: <Linkedin size={18} />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    backgroundColor: "#1e293b",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#cbd5e1",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#4f46e5";
                    (e.currentTarget as HTMLElement).style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#1e293b";
                    (e.currentTarget as HTMLElement).style.color = "#cbd5e1";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div style={{ fontSize: "13px", color: "#64748b" }}>
              Free. Friendly. For a better you. <Heart size={13} color="#f43f5e" style={{ display: "inline" }} />
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            fontSize: "13px",
            color: "#64748b",
          }}
        >
          <span>© 2026 SpeakTogether. All rights reserved.</span>
          <span>Designed for learners worldwide.</span>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 550px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
