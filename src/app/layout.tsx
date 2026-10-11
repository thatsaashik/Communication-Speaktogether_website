import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpeakTogether – Speak English with Confidence | Free Practice Community",
  description:
    "Join SpeakTogether to practice speaking English with friendly learners worldwide through text, voice, and video calls. Smart conversation suggestions, beginner Hindi support, 100% free.",
  keywords: [
    "English speaking practice",
    "learn spoken English",
    "English conversation partner",
    "Hindi to English speaking",
    "SpeakTogether",
    "free language exchange",
  ],
  authors: [{ name: "SpeakTogether Team" }],
  openGraph: {
    title: "SpeakTogether – Speak English with Confidence",
    description: "Practice spoken English with real people anytime, anywhere. 100% free.",
    type: "website",
    locale: "en_US",
    siteName: "SpeakTogether",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpeakTogether – Speak English with Confidence",
    description: "Practice spoken English with real people anytime, anywhere. 100% free.",
  },
  icons: {
    icon: "/SpeakTogether-removebg-preview.png",
    shortcut: "/SpeakTogether-removebg-preview.png",
    apple: "/SpeakTogether-removebg-preview.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
