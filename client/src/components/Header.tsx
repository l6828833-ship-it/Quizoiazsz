import { Link } from "wouter";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-display text-xl font-bold tracking-tight">
            Quizoi
          </span>
        </Link>
        <nav className="ml-auto flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-foreground/80">
            Home
          </Link>
          <Link href="/categories" className="transition-colors hover:text-foreground/80">
            Categories
          </Link>
        </nav>
      </div>
    </header>
  );
}
