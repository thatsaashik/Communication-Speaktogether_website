"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X, ArrowRight, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenEarlyAccess: () => void;
}

export default function Navbar({ onOpenEarlyAccess }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.82)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: `1px solid ${scrolled ? "rgba(226, 232, 240, 0.85)" : "rgba(226, 232, 240, 0.4)"}`,
        transition: "all 0.25s ease",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "76px",
          }}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                position: "relative",
                height: "56px",
                width: "150px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src="/SpeakTogether-removebg-preview.png"
                alt="SpeakTogether - Practice Connect Grow"
                width={170}
                height={60}
                priority
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "32px",
            }}
            className="nav-desktop"
          >
            {[
              { label: "Home", href: "#top" },
              { label: "Practice", href: "#practice" },
              { label: "Learn", href: "#learn" },
              { label: "Community", href: "#topics" },
              { label: "About", href: "#how-it-works" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#475569",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#4f46e5")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#475569")}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <button
              aria-label="Search topics"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid #e2e8f0",
                background: "#ffffff",
                color: "#64748b",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#c7d2fe";
                e.currentTarget.style.color = "#4f46e5";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e2e8f0";
                e.currentTarget.style.color = "#64748b";
              }}
              onClick={() => {
                const el = document.getElementById("topics");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Search size={18} />
            </button>

            <button
              onClick={onOpenEarlyAccess}
              style={{
                display: "none",
                background: "transparent",
                border: "none",
                fontSize: "15px",
                fontWeight: 600,
                color: "#334155",
                cursor: "pointer",
                padding: "8px 14px",
              }}
              className="login-desktop"
            >
              Log In
            </button>

            <button
              onClick={onOpenEarlyAccess}
              className="btn-primary"
              style={{
                padding: "11px 22px",
                fontSize: "14.5px",
                gap: "8px",
              }}
            >
              <span>Get Started Free</span>
              <ArrowRight size={16} />
            </button>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                background: "#ffffff",
                color: "#0f172a",
                cursor: "pointer",
              }}
              className="burger-btn"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              padding: "18px 0 24px",
              borderTop: "1px solid #e2e8f0",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {[
              { label: "Home", href: "#top" },
              { label: "Practice", href: "#practice" },
              { label: "Learn", href: "#learn" },
              { label: "Community", href: "#topics" },
              { label: "About", href: "#how-it-works" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#334155",
                  padding: "6px 8px",
                }}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEarlyAccess();
              }}
              className="btn-primary"
              style={{ width: "100%", marginTop: "8px" }}
            >
              Join Early Access
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .nav-desktop {
            display: flex !important;
          }
          .login-desktop {
            display: inline-block !important;
          }
          .burger-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
