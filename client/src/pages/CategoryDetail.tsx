import { useParams, Link } from "wouter";
import { getCategoryById, getQuizzesByCategory } from "@/lib/data";
import { QuizCard } from "@/components/QuizCard";
import { Button } from "@/components/ui/button";

export function CategoryDetail() {
  const { id } = useParams<{ id: string }>();
  const category = getCategoryById(id!);
  const quizzes = getQuizzesByCategory(id!);

  if (!category) {
    return (
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-bold">Category Not Found</h1>
        <p className="mt-2 text-muted-foreground">
          The category you are looking for does not exist.
        </p>
        <Link href="/categories">
          <Button className="mt-6">Browse Categories</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center gap-3">
        <span className="text-4xl">{category.emoji}</span>
        <div>
          <h1 className="font-display text-3xl font-bold tracking-tight">
            {category.name}
          </h1>
          <p className="text-muted-foreground">{category.description}</p>
        </div>
      </div>

      {quizzes.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      ) : (
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            No quizzes in this category yet. Check back soon!
          </p>
          <Link href="/categories">
            <Button variant="outline" className="mt-4">
              Browse Other Categories
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
