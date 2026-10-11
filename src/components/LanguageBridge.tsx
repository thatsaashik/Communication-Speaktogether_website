"use client";

import React, { useState } from "react";
import {
  MessageSquareQuote,
  BookOpen,
  Quote,
  Sparkles,
  ArrowRight,
  Globe2,
  Volume2,
  CheckCircle2,
  Send,
  Lightbulb,
} from "lucide-react";
import { nativeLanguages } from "@/data/examples";

export default function LanguageBridge() {
  const [selectedLangId, setSelectedLangId] = useState<string>("hindi");
  const [selectedExampleIdx, setSelectedExampleIdx] = useState<number>(0);
  const [customInput, setCustomInput] = useState<string>("");
  const [isCustomMode, setIsCustomMode] = useState<boolean>(false);
  const [customResult, setCustomResult] = useState<any>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const currentLang =
    nativeLanguages.find((l) => l.id === selectedLangId) || nativeLanguages[0];

  const currentExample = isCustomMode && customResult
    ? customResult
    : currentLang.examples[selectedExampleIdx] || currentLang.examples[0];

  const handleLanguageChange = (id: string) => {
    setSelectedLangId(id);
    setSelectedExampleIdx(0);
    setIsCustomMode(false);
  };

  const handleCustomBridge = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    // Simulate smart bridging
    setCustomResult({
      id: "custom",
      category: "Your Custom Thought",
      nativeSentence: customInput.trim(),
      englishTranslation: `I'd like to say: "${customInput.trim()}" in clear, natural English.`,
      sentenceStarter: "From my perspective, I think...",
      keyWords: ["express", "confidently", "communicate", "articulate"],
      grammarTip: "Keep your pacing calm and pause between key ideas.",
    });
    setIsCustomMode(true);
  };

  const handleSimulateSpeak = (text: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 0.9;
      setIsPlayingAudio(true);
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setIsPlayingAudio(true);
      setTimeout(() => setIsPlayingAudio(false), 2000);
    }
  };

  return (
    <section
      id="learn"
      style={{
        padding: "88px 0",
        backgroundColor: "#f8fafc",
        borderTop: "1px solid #edf2f7",
        borderBottom: "1px solid #edf2f7",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Top Header */}
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 46px" }}>
          <div
            className="badge-indigo"
            style={{
              marginBottom: "16px",
              boxShadow: "0 2px 8px rgba(99, 102, 241, 0.15)",
            }}
          >
            <Globe2 size={15} />
            <span>Multi-Language Support for Beginners</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 3.6vw, 44px)",
              color: "#0f172a",
              marginBottom: "14px",
              lineHeight: 1.2,
            }}
          >
            Not Sure What to Say? <br />
            <span className="text-gradient">We&apos;ve Got You Covered!</span>
          </h2>

          <p
            style={{
              fontSize: "17px",
              color: "#64748b",
              lineHeight: 1.6,
            }}
          >
            Stuck during a conversation? <strong>Choose your native language</strong>{" "}
            and think naturally. Our real-time assistant helps bridge your thoughts
            into clear, confident English without hesitation.
          </p>
        </div>

        {/* Language Selection Bar: Choose Your Native Language */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "24px",
            padding: "20px 24px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 6px 20px -6px rgba(15, 23, 42, 0.05)",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "14px",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "8px",
                  backgroundColor: "#eef2ff",
                  color: "#4f46e5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Globe2 size={16} />
              </span>
              <span style={{ fontSize: "14.5px", fontWeight: 700, color: "#0f172a" }}>
                Choose Your Native Language:
              </span>
            </div>

            <span style={{ fontSize: "12.5px", color: "#64748b", fontWeight: 500 }}>
              Currently selected:{" "}
              <strong style={{ color: "#4f46e5" }}>
                {currentLang.flag} {currentLang.name} ({currentLang.nativeName})
              </strong>
            </span>
          </div>

          {/* Language selector chips */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {nativeLanguages.map((lang) => {
              const isSelected = selectedLangId === lang.id;
              return (
                <button
                  key={lang.id}
                  onClick={() => handleLanguageChange(lang.id)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "9px 18px",
                    borderRadius: "9999px",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    border: isSelected ? "2px solid #4f46e5" : "1.5px solid #e2e8f0",
                    backgroundColor: isSelected ? "#4f46e5" : "#ffffff",
                    color: isSelected ? "#ffffff" : "#334155",
                    boxShadow: isSelected
                      ? "0 6px 16px -4px rgba(79, 70, 229, 0.4)"
                      : "0 1px 3px rgba(0,0,0,0.03)",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = "#c7d2fe";
                      e.currentTarget.style.backgroundColor = "#f8fafc";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = "#e2e8f0";
                      e.currentTarget.style.backgroundColor = "#ffffff";
                    }
                  }}
                >
                  <span style={{ fontSize: "16px" }}>{lang.flag}</span>
                  <span>{lang.name}</span>
                  <span
                    style={{
                      fontSize: "12px",
                      opacity: isSelected ? 0.9 : 0.65,
                      fontWeight: 500,
                    }}
                  >
                    ({lang.nativeName})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Split: Assistant Cards on Left, Interactive Bridge on Right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.25fr",
            gap: "36px",
            alignItems: "stretch",
          }}
          className="bridge-grid"
        >
          {/* Left Column: 3 Smart Assistance Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Card 1: Topic Suggestions */}
            <div
              className="card-clean"
              style={{
                padding: "24px 26px",
                borderRadius: "20px",
                borderLeft: "4px solid #6366f1",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    backgroundColor: "#eef2ff",
                    color: "#4f46e5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MessageSquareQuote size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: "16.5px", fontWeight: 700, color: "#0f172a" }}>
                    Topic Suggestions
                  </h3>
                  <span style={{ fontSize: "12px", color: "#64748b" }}>
                    Instant prompts when you go blank
                  </span>
                </div>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "7px",
                }}
              >
                {[
                  `"Tell me about your hobbies and daily life"`,
                  `"What are you looking forward to this week?"`,
                  `"A memorable trip or dream destination"`,
                ].map((q) => (
                  <li
                    key={q}
                    style={{
                      fontSize: "13.5px",
                      color: "#475569",
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span style={{ color: "#6366f1", fontWeight: 700 }}>•</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: Useful Vocabulary */}
            <div
              className="card-clean"
              style={{
                padding: "24px 26px",
                borderRadius: "20px",
                borderLeft: "4px solid #10b981",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    backgroundColor: "#ecfdf5",
                    color: "#059669",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <BookOpen size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: "16.5px", fontWeight: 700, color: "#0f172a" }}>
                    Useful Vocabulary
                  </h3>
                  <span style={{ fontSize: "12px", color: "#64748b" }}>
                    High-impact spoken words on your screen
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {currentExample.keyWords.map((word: string) => (
                  <span
                    key={word}
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      background: "#f1f5f9",
                      color: "#1e293b",
                      padding: "5px 12px",
                      borderRadius: "8px",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 3: Simple Sentence Starters */}
            <div
              className="card-clean"
              style={{
                padding: "24px 26px",
                borderRadius: "20px",
                borderLeft: "4px solid #8b5cf6",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    backgroundColor: "#f5f3ff",
                    color: "#7c3aed",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Quote size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: "16.5px", fontWeight: 700, color: "#0f172a" }}>
                    Simple Sentence Starters
                  </h3>
                  <span style={{ fontSize: "12px", color: "#64748b" }}>
                    Natural connectors so you never freeze
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {[
                  currentExample.sentenceStarter,
                  '"In my opinion..."',
                  '"To be honest, I feel..."',
                  '"Could you say that again?"',
                ].map((s: string) => (
                  <span
                    key={s}
                    style={{
                      fontSize: "12.5px",
                      fontWeight: 600,
                      background: "#f8fafc",
                      color: "#4338ca",
                      padding: "5px 12px",
                      borderRadius: "9999px",
                      border: "1px solid #c7d2fe",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: "Practice at Your Own Pace" Interactive Bridge */}
          <div
            className="card-clean"
            style={{
              padding: "36px 32px",
              borderRadius: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background: "#ffffff",
              boxShadow: "0 15px 35px -10px rgba(15, 23, 42, 0.08)",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 800,
                    color: "#0f172a",
                  }}
                >
                  Practice at Your Own Pace
                </h3>

                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: "9999px",
                    backgroundColor: "#ecfdf5",
                    color: "#047857",
                    border: "1px solid #a7f3d0",
                  }}
                >
                  Active Language: {currentLang.name}
                </span>
              </div>

              <p
                style={{
                  fontSize: "14.5px",
                  color: "#64748b",
                  marginBottom: "24px",
                  lineHeight: 1.5,
                }}
              >
                Start in <strong>{currentLang.name}</strong> if you&apos;re more comfortable,
                then gradually switch to English with guided hints.
              </p>

              {/* Progressive 3-Stage Visual Pipeline */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto 1.15fr auto 1fr",
                  alignItems: "center",
                  gap: "8px",
                  padding: "16px 14px",
                  backgroundColor: "#f8fafc",
                  borderRadius: "16px",
                  border: "1px solid #edf2f7",
                  marginBottom: "24px",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "24px", display: "block" }}>{currentLang.flag}</span>
                  <strong style={{ fontSize: "12.5px", color: "#0f172a", display: "block" }}>
                    {currentLang.name}
                  </strong>
                  <span style={{ fontSize: "10.5px", color: "#64748b" }}>
                    (Comfort Zone)
                  </span>
                </div>

                <ArrowRight size={16} color="#94a3b8" />

                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "24px", display: "block" }}>🌉</span>
                  <strong style={{ fontSize: "12.5px", color: "#4f46e5", display: "block" }}>
                    Smart Bridge
                  </strong>
                  <span style={{ fontSize: "10.5px", color: "#64748b" }}>
                    (With Support)
                  </span>
                </div>

                <ArrowRight size={16} color="#94a3b8" />

                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "24px", display: "block" }}>🎯</span>
                  <strong style={{ fontSize: "12.5px", color: "#059669", display: "block" }}>
                    Fluent English
                  </strong>
                  <span style={{ fontSize: "10.5px", color: "#64748b" }}>
                    (Your Goal)
                  </span>
                </div>
              </div>

              {/* Example Scenarios in selected language */}
              <div style={{ marginBottom: "18px" }}>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    color: "#64748b",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Select a common thought in {currentLang.name}:
                </span>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {currentLang.examples.map((ex, idx) => {
                    const isSelected = !isCustomMode && selectedExampleIdx === idx;
                    return (
                      <button
                        key={ex.id}
                        type="button"
                        onClick={() => {
                          setIsCustomMode(false);
                          setSelectedExampleIdx(idx);
                        }}
                        style={{
                          padding: "7px 14px",
                          borderRadius: "9999px",
                          fontSize: "12.5px",
                          fontWeight: 600,
                          border: isSelected ? "1.5px solid #4f46e5" : "1px solid #e2e8f0",
                          backgroundColor: isSelected ? "#eef2ff" : "#ffffff",
                          color: isSelected ? "#4f46e5" : "#334155",
                          cursor: "pointer",
                          transition: "all 0.18s ease",
                        }}
                      >
                        {ex.category}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Live Translation Result Box */}
              <div
                style={{
                  background: "#f8fafc",
                  border: "1.5px solid #e2e8f0",
                  borderRadius: "18px",
                  padding: "18px 20px",
                  marginBottom: "20px",
                }}
              >
                {/* 1. Native sentence */}
                <div style={{ marginBottom: "12px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "4px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#64748b",
                        letterSpacing: "0.03em",
                      }}
                    >
                      YOU THINK IN {currentLang.name.toUpperCase()} ({currentLang.flag}):
                    </span>
                    <span
                      style={{
                        fontSize: "11px",
                        color: "#4f46e5",
                        fontWeight: 600,
                      }}
                    >
                      {currentExample.category}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#0f172a",
                      lineHeight: 1.45,
                    }}
                  >
                    &ldquo;{currentExample.nativeSentence}&rdquo;
                  </p>
                </div>

                {/* 2. English translation + Audio play */}
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "14px",
                    padding: "12px 14px",
                    border: "1.5px solid #c7d2fe",
                    marginBottom: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "4px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#4f46e5",
                        letterSpacing: "0.03em",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <CheckCircle2 size={13} color="#10b981" />
                      SPEAK IN NATURAL ENGLISH:
                    </span>

                    <button
                      type="button"
                      onClick={() => handleSimulateSpeak(currentExample.englishTranslation)}
                      title="Listen to pronunciation"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        background: "#eef2ff",
                        border: "none",
                        color: "#4f46e5",
                        fontSize: "11.5px",
                        fontWeight: 700,
                        padding: "3px 8px",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                    >
                      <Volume2 size={13} />
                      <span>{isPlayingAudio ? "Playing..." : "Listen"}</span>
                    </button>
                  </div>
                  <p
                    style={{
                      fontSize: "15.5px",
                      fontWeight: 700,
                      color: "#1e1b4b",
                      lineHeight: 1.45,
                    }}
                  >
                    &ldquo;{currentExample.englishTranslation}&rdquo;
                  </p>
                </div>

                {/* 3. Speaking / Grammar Tip */}
                {currentExample.grammarTip && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "6px",
                      fontSize: "12px",
                      color: "#475569",
                      paddingTop: "4px",
                    }}
                  >
                    <Lightbulb size={14} color="#f59e0b" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span>
                      <strong>Speaking Tip:</strong> {currentExample.grammarTip}
                    </span>
                  </div>
                )}
              </div>

              {/* "Try Your Own Thought" Input Form */}
              <form
                onSubmit={handleCustomBridge}
                style={{
                  display: "flex",
                  gap: "8px",
                  marginBottom: "20px",
                }}
              >
                <input
                  type="text"
                  placeholder={`Or type any sentence in ${currentLang.name}...`}
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  style={{
                    flex: 1,
                    padding: "10px 14px",
                    borderRadius: "12px",
                    border: "1.5px solid #e2e8f0",
                    fontSize: "13.5px",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "10px 16px",
                    borderRadius: "12px",
                    backgroundColor: "#4f46e5",
                    color: "#ffffff",
                    border: "none",
                    fontWeight: 600,
                    fontSize: "13px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span>Bridge</span>
                  <Send size={13} />
                </button>
              </form>
            </div>

            {/* Reassuring Motivation Footer */}
            <div
              style={{
                backgroundColor: "#ecfdf5",
                border: "1px solid #a7f3d0",
                borderRadius: "14px",
                padding: "12px 16px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <span style={{ fontSize: "16px" }}>🌱</span>
              <span
                style={{
                  fontSize: "13.5px",
                  fontWeight: 700,
                  color: "#047857",
                }}
              >
                &ldquo;It&apos;s okay to make mistakes. Think in your mother tongue, speak in English!&rdquo;
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .bridge-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
