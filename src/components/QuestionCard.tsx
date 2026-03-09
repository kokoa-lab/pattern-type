import { motion, AnimatePresence } from "framer-motion";
import { Question } from "@/data/questions";
import { Progress } from "@/components/ui/progress";

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (optionIndex: number) => void;
}

export const QuestionCard = ({
  question,
  currentIndex,
  totalQuestions,
  onAnswer,
}: QuestionCardProps) => {
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-2xl">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2 font-mono text-sm">
            <span className="text-muted-foreground">
              <span className="text-primary">{currentIndex + 1}</span> / {totalQuestions}
            </span>
            <span className="text-muted-foreground">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2 bg-muted" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Question */}
            <div className="card-gradient rounded-lg p-6 mb-6 border border-border">
              <div className="font-mono text-xs text-muted-foreground mb-3">
                <span className="text-secondary">function</span>{" "}
                <span className="text-primary">scenario_{question.id}</span>()
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
                {question.situation}
              </h2>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => onAnswer(index)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-left p-4 rounded-lg bg-muted/50 border border-border hover:border-primary hover:bg-muted transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span className="text-foreground group-hover:text-primary transition-colors">
                      {option.text}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
