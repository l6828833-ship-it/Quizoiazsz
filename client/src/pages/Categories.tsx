import { Link } from "wouter";
import { categories } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

export function Categories() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        All Categories
      </h1>
      <p className="mt-2 text-muted-foreground">
        Choose a category and start testing your knowledge.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <Link key={cat.id} href={`/category/${cat.id}`}>
            <Card className="group cursor-pointer overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={cat.thumbnailUrl}
                  alt={cat.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-3xl">{cat.emoji}</span>
                  <h3 className="font-display text-xl font-bold text-white">
                    {cat.name}
                  </h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  {cat.description}
                </p>
                <p className="mt-2 text-xs font-medium">
                  {cat.quizCount} {cat.quizCount === 1 ? "quiz" : "quizzes"}{" "}
                  available
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
