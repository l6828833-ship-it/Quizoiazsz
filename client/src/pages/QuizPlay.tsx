import { useState, useCallback } from "react";
import { useParams, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { getQuizBySlug, getCategoryById } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { Answer } from "@shared/types";

export function QuizPlay() {
  const { slug } = useParams<{ slug: string }>();
  const quiz = getQuizBySlug(slug!);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleSelect = useCallback(
    (answer: Answer) => {
      if (revealed) return;
      setSelectedAnswer(answer.id);
      setRevealed(true);
      if (answer.isCorrect) {
        setScore((s) => s + 1);
      }
    },
    [revealed]
  );

  const handleNext = useCallback(() => {
    if (!quiz) return;
    if (currentIndex + 1 >= quiz.questions.length) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setRevealed(false);
    }
  }, [currentIndex, quiz]);

  if (!quiz) {
    return (
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-bold">Quiz Not Found</h1>
        <p className="mt-2 text-muted-foreground">
          The quiz you are looking for does not exist.
        </p>
        <Link href="/">
          <Button className="mt-6">Go Home</Button>
        </Link>
      </div>
    );
  }

  const category = getCategoryById(quiz.categoryId);

  // Finished screen
  if (finished) {
    const percentage = Math.round((score / quiz.questions.length) * 100);
    return (
      <div className="container mx-auto max-w-2xl px-4 py-12">
        <Card className="text-center">
          <CardContent className="p-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
            >
              <h1 className="font-display text-4xl font-extrabold">
                {percentage >= 80
                  ? "Amazing!"
                  : percentage >= 50
                    ? "Good Job!"
                    : "Keep Trying!"}
              </h1>
              <p className="mt-4 text-6xl font-bold text-primary">
                {score}/{quiz.questions.length}
              </p>
              <p className="mt-2 text-muted-foreground">
                You scored {percentage}% on {quiz.title}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button
                  onClick={() => {
                    setCurrentIndex(0);
                    setSelectedAnswer(null);
                    setRevealed(false);
                    setScore(0);
                    setFinished(false);
                  }}
                >
                  Play Again
                </Button>
                <Link href="/">
                  <Button variant="outline">More Quizzes</Button>
                </Link>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const question = quiz.questions[currentIndex];
  const totalVotes = question.answers.reduce((s, a) => s + a.voteCount, 0);

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      {/* Quiz header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {category && (
            <span>
              {category.emoji} {category.name}
            </span>
          )}
          <span>&middot;</span>
          <span>
            Question {currentIndex + 1} of {quiz.questions.length}
          </span>
        </div>
        <h2 className="mt-1 font-display text-lg font-bold">{quiz.title}</h2>
        <Progress
          value={((currentIndex + 1) / quiz.questions.length) * 100}
          className="mt-3 h-2"
        />
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.25 }}
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="font-display text-xl font-semibold leading-snug">
                {question.questionText}
              </h3>

              {/* Answer buttons */}
              <div className="mt-6 flex flex-col gap-3">
                {question.answers.map((answer) => {
                  const isSelected = selectedAnswer === answer.id;
                  const pct =
                    totalVotes > 0
                      ? Math.round((answer.voteCount / totalVotes) * 100)
                      : 0;

                  let variant: "outline" | "default" | "destructive" =
                    "outline";
                  if (revealed) {
                    if (answer.isCorrect) variant = "default";
                    else if (isSelected) variant = "destructive";
                  }

                  return (
                    <Button
                      key={answer.id}
                      variant={variant}
                      className="relative h-auto justify-start overflow-hidden px-4 py-3 text-left text-base"
                      onClick={() => handleSelect(answer)}
                      disabled={revealed}
                    >
                      {revealed && (
                        <motion.div
                          className="absolute inset-y-0 left-0 bg-current opacity-10"
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      )}
                      <span className="relative z-10 flex w-full items-center justify-between">
                        <span>{answer.text}</span>
                        {revealed && (
                          <span className="ml-2 text-sm font-medium">
                            {pct}%
                          </span>
                        )}
                      </span>
                    </Button>
                  );
                })}
              </div>

              {/* Fact Lab */}
              {revealed && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 overflow-hidden"
                >
                  <div className="rounded-lg border bg-muted/50 p-4">
                    <h4 className="font-display text-sm font-bold uppercase tracking-wide text-primary">
                      Did You Know?
                    </h4>
                    <h5 className="mt-1 font-display font-semibold">
                      {question.factLabTitle}
                    </h5>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {question.factLabContent}
                    </p>
                  </div>

                  <Button className="mt-4 w-full" onClick={handleNext}>
                    {currentIndex + 1 >= quiz.questions.length
                      ? "See Results"
                      : "Next Question"}
                  </Button>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
