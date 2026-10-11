"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import LanguageBridge from "@/components/LanguageBridge";
import TopicsGrid from "@/components/TopicsGrid";
import Testimonials from "@/components/Testimonials";
import EarlyAccessModal from "@/components/EarlyAccessModal";
import Footer from "@/components/Footer";
import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";

export default function HomePage() {
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navigation */}
      <Navbar onOpenEarlyAccess={() => setIsEarlyAccessOpen(true)} />

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <Hero onOpenEarlyAccess={() => setIsEarlyAccessOpen(true)} />

        {/* Why Choose SpeakTogether */}
        <Features />

        {/* How It Works */}
        <HowItWorks />

        {/* Language Bridge & Real-Time Prompt Helper */}
        <LanguageBridge />

        {/* Popular Conversation Topics */}
        <TopicsGrid />

        {/* Real Testimonials */}
        <Testimonials />

        {/* Bottom CTA Pre-Footer Section */}
        <section
          style={{
            padding: "80px 0 90px",
            backgroundColor: "#ffffff",
          }}
        >
          <div className="container">
            <div
              style={{
                background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                borderRadius: "32px",
                padding: "60px 40px",
                textAlign: "center",
                color: "#ffffff",
                boxShadow: "0 20px 50px -15px rgba(79, 70, 229, 0.4)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background Glows */}
              <div
                style={{
                  position: "absolute",
                  top: "-50px",
                  right: "-50px",
                  width: "250px",
                  height: "250px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.12)",
                  pointerEvents: "none",
                }}
              />

              <div style={{ position: "relative", zIndex: 2, maxWidth: "680px", margin: "0 auto" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "rgba(255, 255, 255, 0.18)",
                    backdropFilter: "blur(10px)",
                    padding: "6px 16px",
                    borderRadius: "9999px",
                    fontSize: "13.5px",
                    fontWeight: 700,
                    marginBottom: "20px",
                  }}
                >
                  <Sparkles size={16} />
                  <span>Join Over 12,000+ Active Learners</span>
                </div>

                <h2
                  style={{
                    fontSize: "clamp(30px, 3.8vw, 46px)",
                    fontWeight: 800,
                    color: "#ffffff",
                    marginBottom: "16px",
                    lineHeight: 1.2,
                  }}
                >
                  Start Speaking English Today with Zero Fear
                </h2>

                <p
                  style={{
                    fontSize: "18px",
                    color: "rgba(255, 255, 255, 0.9)",
                    lineHeight: 1.6,
                    marginBottom: "32px",
                  }}
                >
                  No textbooks, no awkward silences. Just friendly peers, smart guidance,
                  and steady real-world practice.
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "14px",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    onClick={() => setIsEarlyAccessOpen(true)}
                    style={{
                      background: "#ffffff",
                      color: "#4f46e5",
                      fontSize: "16px",
                      fontWeight: 700,
                      padding: "15px 34px",
                      borderRadius: "9999px",
                      border: "none",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                      transition: "transform 0.2s ease",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(-2px)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")}
                  >
                    <span>Get Started Free</span>
                    <ArrowRight size={18} />
                  </button>

                  <a
                    href="https://wa.me/919999999999?text=Hi%20SpeakTogether!%20I%20want%20to%20practice%20speaking%20English."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "rgba(255, 255, 255, 0.15)",
                      color: "#ffffff",
                      fontSize: "15px",
                      fontWeight: 600,
                      padding: "14px 26px",
                      borderRadius: "9999px",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      textDecoration: "none",
                      transition: "background 0.2s ease",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.25)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.15)")}
                  >
                    <MessageSquare size={16} />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button (Bottom Right) */}
      <a
        href="https://wa.me/919636852922?text=Hi!%20I'm%20interested%20in%20SpeakTogether%20English%20speaking%20practice."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with +91 9636852922"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 99,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "#25D366",
          color: "#ffffff",
          padding: "12px 20px 12px 16px",
          borderRadius: "9999px",
          boxShadow: "0 10px 25px rgba(37, 211, 102, 0.4), 0 4px 10px rgba(0, 0, 0, 0.1)",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: "14px",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-3px) scale(1.03)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 30px rgba(37, 211, 102, 0.5)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 25px rgba(37, 211, 102, 0.4)";
        }}
      >
        <span style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span
            style={{
              position: "absolute",
              top: "-2px",
              right: "-2px",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
            }}
          />
        </span>
        <span>Chat on WhatsApp</span>
      </a>

      {/* Interactive Early Access Modal */}
      <EarlyAccessModal
        isOpen={isEarlyAccessOpen}
        onClose={() => setIsEarlyAccessOpen(false)}
      />
    </div>
  );
}
