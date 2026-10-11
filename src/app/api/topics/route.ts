import { NextResponse } from "next/server";
import { topics } from "@/data/topics";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  if (category) {
    const filtered = topics.filter(
      (t) => t.category.toLowerCase() === category.toLowerCase()
    );
    return NextResponse.json({ topics: filtered });
  }

  return NextResponse.json({
    topics,
    total: topics.length,
    categories: Array.from(new Set(topics.map((t) => t.category))),
  });
}
