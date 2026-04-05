import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="font-display text-6xl font-extrabold">404</h1>
      <p className="mt-4 text-xl text-muted-foreground">
        Oops! This page doesn't exist.
      </p>
      <Link href="/">
        <Button className="mt-8" size="lg">
          Go Home
        </Button>
      </Link>
    </div>
  );
}
