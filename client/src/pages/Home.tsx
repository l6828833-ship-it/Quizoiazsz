import { Link } from "wouter";
import { categories, getAllPublishedQuizzes } from "@/lib/data";
import { QuizCard } from "@/components/QuizCard";
import { Button } from "@/components/ui/button";

export function Home() {
  const quizzes = getAllPublishedQuizzes();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Challenge Your Mind
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Test your knowledge with thousands of quizzes across 10+ categories.
            Science, history, music, sports, geography and more. Only the
            sharpest minds score 10/10.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/categories">
              <Button size="lg" className="font-display font-semibold">
                Browse Categories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Explore Categories
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {categories.map((cat) => (
              <Link key={cat.id} href={`/category/${cat.id}`}>
                <div className="group flex cursor-pointer flex-col items-center rounded-xl border bg-card p-4 text-center transition-all hover:shadow-md hover:-translate-y-0.5">
                  <span className="text-3xl">{cat.emoji}</span>
                  <span className="mt-2 font-display text-sm font-semibold">
                    {cat.name}
                  </span>
                  <span className="mt-1 text-xs text-muted-foreground">
                    {cat.quizCount} {cat.quizCount === 1 ? "quiz" : "quizzes"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Quizzes Section */}
      <section className="border-t bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Popular Quizzes
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {quizzes.map((quiz) => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
