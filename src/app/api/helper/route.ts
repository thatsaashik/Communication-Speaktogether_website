import { NextResponse } from "next/server";
import { nativeLanguages, hindiExamples } from "@/data/examples";

export async function POST(request: Request) {
  try {
    const { languageId, phraseId, customThought } = await request.json();

    const lang = nativeLanguages.find((l) => l.id === languageId) || nativeLanguages[0];

    if (customThought) {
      // Simulate real-time contextual assistant bridging
      return NextResponse.json({
        success: true,
        data: {
          id: "custom",
          category: "Your Custom Thought",
          nativeSentence: customThought,
          englishTranslation: `I'd like to express that: "${customThought}"`,
          sentenceStarter: "In my personal perspective...",
          keyWords: ["express", "communicate", "articulate", "conversation"],
          grammarTip: "Speak with steady pacing and natural pauses.",
        },
      });
    }

    const match = lang.examples.find((e) => e.id === phraseId) || lang.examples[0];

    return NextResponse.json({
      success: true,
      language: lang.name,
      data: match,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid phrase translation query" },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    languages: nativeLanguages.map((l) => ({
      id: l.id,
      name: l.name,
      nativeName: l.nativeName,
      flag: l.flag,
    })),
    totalExamples: nativeLanguages.reduce((acc, curr) => acc + curr.examples.length, 0),
    examples: hindiExamples,
  });
}
