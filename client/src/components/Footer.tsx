export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-display text-lg font-bold">Quizoi</p>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Quizoi. Challenge your mind.
          </p>
        </div>
      </div>
    </footer>
  );
}
