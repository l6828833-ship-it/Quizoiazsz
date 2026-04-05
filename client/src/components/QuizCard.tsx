import { Link } from "wouter";
import type { Quiz } from "@shared/types";
import { getCategoryById } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

interface QuizCardProps {
  quiz: Quiz;
}

export function QuizCard({ quiz }: QuizCardProps) {
  const category = getCategoryById(quiz.categoryId);

  return (
    <Link href={`/quiz/${quiz.slug}`}>
      <Card className="group cursor-pointer overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={quiz.thumbnailUrl}
            alt={quiz.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          {category && (
            <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {category.emoji} {category.name}
            </span>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-display text-lg font-semibold leading-tight line-clamp-2">
            {quiz.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {quiz.description}
          </p>
          <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
            <span>{quiz.questionCount} questions</span>
            <span>{quiz.playCount.toLocaleString()} plays</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
