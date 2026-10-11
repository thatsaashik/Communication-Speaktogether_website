import { Topic } from "@/types";

export const topics: Topic[] = [
  {
    id: "daily-life",
    title: "Daily Life",
    description: "Family, morning routines, favorite meals, and weekend plans.",
    icon: "Sun",
    category: "Casual",
    starterQuestions: [
      "What is your favorite part of the day and why?",
      "How do you usually spend your Sunday mornings?",
      "What is one habit you want to build this month?"
    ],
    vocabulary: ["routine", "leisure", "relax", "chores", "unwind"],
  },
  {
    id: "hobbies",
    title: "Hobbies",
    description: "Music, movies, painting, sports, gaming, and photography.",
    icon: "Gamepad2",
    category: "Interest",
    starterQuestions: [
      "What hobby do you lose track of time doing?",
      "If you could pick up any musical instrument today, which one would it be?",
      "What is the best movie or series you watched recently?"
    ],
    vocabulary: ["passion", "creative", "pastime", "skill", "inspire"],
  },
  {
    id: "work-career",
    title: "Work & Career",
    description: "Job interviews, networking, teamwork, and remote working.",
    icon: "Briefcase",
    category: "Professional",
    starterQuestions: [
      "Tell me about a challenging project you handled successfully.",
      "How do you prepare before an important interview?",
      "What does your ideal work environment look like?"
    ],
    vocabulary: ["collaborate", "deadline", "initiative", "professional", "strategy"],
  },
  {
    id: "technology",
    title: "Technology",
    description: "Smartphone apps, AI tools, social media, and future tech gadgets.",
    icon: "Laptop",
    category: "Modern",
    starterQuestions: [
      "How has AI changed the way you study or work?",
      "Which mobile app can you not live without?",
      "Do you think tech connects people more or distracts them?"
    ],
    vocabulary: ["innovation", "algorithm", "gadget", "digital", "productivity"],
  },
  {
    id: "travel",
    title: "Travel & Places",
    description: "Dream destinations, road trips, culture shock, and memories.",
    icon: "Plane",
    category: "Adventure",
    starterQuestions: [
      "What is the most memorable trip you have ever taken?",
      "Do you prefer beach vacations or mountain getaways?",
      "What local food would you recommend to a traveler visiting your city?"
    ],
    vocabulary: ["destination", "explore", "culture", "wanderlust", "memorable"],
  },
  {
    id: "future-goals",
    title: "Future Goals",
    description: "Career dreams, financial milestones, personal growth, and ambition.",
    icon: "Target",
    category: "Growth",
    starterQuestions: [
      "Where do you see yourself in the next three years?",
      "What is one big skill you are trying to master right now?",
      "Who is someone you admire for their dedication?"
    ],
    vocabulary: ["aspirations", "milestone", "determination", "growth", "vision"],
  },
];
