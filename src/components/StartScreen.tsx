import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Terminal, Sparkles } from "lucide-react";

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen = ({ onStart }: StartScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center p-6"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        className="text-center max-w-lg"
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <Terminal className="w-8 h-8 text-primary" />
          <Sparkles className="w-6 h-6 text-secondary" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">PatternType</span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-mono text-sm text-muted-foreground mb-8"
        >
          <span className="text-primary">$</span> 당신의 코딩 성격을 디자인 패턴으로 진단합니다_
          <span className="inline-block w-2 h-4 bg-primary ml-1 animate-blink" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground mb-8 leading-relaxed"
        >
          12개의 코딩 상황 질문에 답하면
          <br />
          당신과 가장 잘 맞는 <span className="text-primary">디자인 패턴</span>을 알려드립니다.
          <br />
          <span className="text-secondary">궁합 패턴</span>까지 확인해보세요!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Button
            onClick={onStart}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 box-glow font-semibold text-lg px-8 py-6 transition-all hover:scale-105"
          >
            <span className="font-mono mr-2">{">"}</span>
            테스트 시작하기
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 flex items-center justify-center gap-4 text-xs text-muted-foreground font-mono"
        >
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            12 questions
          </span>
          <span>•</span>
          <span>7 patterns</span>
          <span>•</span>
          <span>~3 min</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
