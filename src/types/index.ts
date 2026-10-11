export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
  color: string;
}

export interface Step {
  step: number;
  title: string;
  description: string;
  icon: string;
  highlight?: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  starterQuestions: string[];
  vocabulary: string[];
}

export interface HindiExample {
  id: string;
  hindi: string;
  english: string;
  starter: string;
  vocabulary: string[];
  context: string;
}

export interface NativeLanguageExample {
  id: string;
  category: string;
  nativeSentence: string;
  englishTranslation: string;
  sentenceStarter: string;
  keyWords: string[];
  grammarTip?: string;
}

export interface NativeLanguage {
  id: string;
  name: string;
  nativeName: string;
  flag: string;
  badgeColor: string;
  examples: NativeLanguageExample[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  avatar: string;
  rating: number;
  practiceTime?: string;
}

export interface EarlyAccessSubmission {
  firstName: string;
  lastName: string;
  email: string;
  level: string;
  status: string;
  goal: string;
  mode: string;
  consent: boolean;
  submittedAt?: string;
}
