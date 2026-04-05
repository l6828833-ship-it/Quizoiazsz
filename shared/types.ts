// Shared types for Quizoi

export interface Answer {
  id: string;
  text: string;
  isCorrect: boolean;
  voteCount: number;
}

export interface Question {
  id: string;
  questionText: string;
  mediaType: "NONE" | "IMAGE" | "YOUTUBE";
  mediaUrl: string | null;
  factLabTitle: string;
  factLabContent: string;
  answers: Answer[];
}

export interface Quiz {
  id: string;
  slug: string;
  title: string;
  description: string;
  categoryId: string;
  thumbnailUrl: string;
  questionCount: number;
  playCount: number;
  status: "PUBLISHED" | "DRAFT";
  createdAt: string;
  questions: Question[];
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  description: string;
  quizCount: number;
  thumbnailUrl: string;
}
