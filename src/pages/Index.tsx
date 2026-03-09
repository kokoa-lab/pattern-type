import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { StartScreen } from "@/components/StartScreen";
import { QuestionCard } from "@/components/QuestionCard";
import { ResultCard } from "@/components/ResultCard";
import { questions, patternResults, PatternType } from "@/data/questions";

type GameState = "start" | "playing" | "result";

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [gameState, setGameState] = useState<GameState>("start");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Record<PatternType, number>>({
    observer: 0,
    singleton: 0,
    factory: 0,
    strategy: 0,
    decorator: 0,
    adapter: 0,
    builder: 0,
  });
  const [resultType, setResultType] = useState<PatternType | null>(null);

  // Check for shared result in URL
  useEffect(() => {
    const sharedResult = searchParams.get("result") as PatternType;
    if (sharedResult && patternResults[sharedResult]) {
      setResultType(sharedResult);
      setGameState("result");
    }
  }, [searchParams]);

  const handleStart = () => {
    setGameState("playing");
    setCurrentQuestionIndex(0);
    setScores({
      observer: 0,
      singleton: 0,
      factory: 0,
      strategy: 0,
      decorator: 0,
      adapter: 0,
      builder: 0,
    });
    setSearchParams({});
  };

  const handleAnswer = (optionIndex: number) => {
    const question = questions[currentQuestionIndex];
    const selectedOption = question.options[optionIndex];

    // Update scores
    const newScores = { ...scores };
    (Object.keys(selectedOption.scores) as PatternType[]).forEach((pattern) => {
      newScores[pattern] += selectedOption.scores[pattern];
    });
    setScores(newScores);

    // Move to next question or show result
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate result
      const maxPattern = (Object.keys(newScores) as PatternType[]).reduce(
        (a, b) => (newScores[a] > newScores[b] ? a : b)
      );
      setResultType(maxPattern);
      setSearchParams({ result: maxPattern });
      setGameState("result");
    }
  };

  const handleRestart = () => {
    setSearchParams({});
    setGameState("start");
    setResultType(null);
  };

  return (
    <main className="min-h-screen bg-background">
      {gameState === "start" && <StartScreen onStart={handleStart} />}
      {gameState === "playing" && (
        <QuestionCard
          question={questions[currentQuestionIndex]}
          currentIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      )}
      {gameState === "result" && resultType && (
        <ResultCard
          result={patternResults[resultType]}
          onRestart={handleRestart}
        />
      )}
    </main>
  );
};

export default Index;
