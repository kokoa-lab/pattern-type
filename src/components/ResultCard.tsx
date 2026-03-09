import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { PatternResult, patternResults, PatternType } from "@/data/questions";
import { PatternDiagram } from "./PatternDiagram";
import { Sparkles } from "lucide-react";
import { toast } from "sonner";
import { toPng } from "html-to-image";
import { SocialShareButtons } from "./SocialShareButtons";
import { AllPatternsSection } from "./AllPatternsSection";

interface ResultCardProps {
  result: PatternResult;
  onRestart: () => void;
}

export const ResultCard = ({ result, onRestart }: ResultCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleSaveImage = useCallback(async () => {
    if (!cardRef.current) return;
    try {
      toast.loading("이미지 생성 중...", { id: "save-image" });
      // Wait for fonts to load
      await document.fonts.ready;
      const dataUrl = await toPng(cardRef.current, {
        backgroundColor: "#0a0a0f",
        pixelRatio: 2,
        cacheBust: true,
      });
      const link = document.createElement("a");
      link.download = `patterntype-${result.type}.png`;
      link.href = dataUrl;
      link.click();
      toast.success("이미지가 저장되었습니다! 📸", { id: "save-image" });
    } catch {
      toast.error("이미지 저장에 실패했습니다", { id: "save-image" });
    }
  }, [result.type]);

  const compatiblePatterns = result.compatiblePatterns.map(
    (type) => patternResults[type]
  );

  return (
    <div className="min-h-screen py-8 px-4 md:px-6">
      <div className="max-w-2xl mx-auto">
        {/* Capturable area */}
        <div ref={cardRef} className="pb-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="font-mono text-sm text-muted-foreground mb-2">
            <span className="text-primary">$</span> analyzing_complete...
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            당신의 코딩 성격은
          </h1>
        </motion.div>

        {/* Main Result Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="card-gradient rounded-2xl p-6 md:p-8 border border-primary/30 box-glow mb-6"
        >
          <div className="text-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="text-5xl mb-4"
            >
              {result.emoji}
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              {result.name}
            </h2>
            <p className="text-lg text-secondary font-medium">
              {result.tagline}
            </p>
          </div>

          {/* Diagram */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-6"
          >
            <PatternDiagram pattern={result.type} />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-foreground/90 leading-relaxed text-center mb-6"
          >
            {result.description}
          </motion.p>

          {/* Work Style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-muted/50 rounded-lg p-4 mb-6"
          >
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="font-semibold text-foreground">업무 스타일</span>
            </div>
            <p className="text-muted-foreground text-sm">{result.workStyle}</p>
          </motion.div>

          {/* Strengths & Weaknesses */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid md:grid-cols-2 gap-4 mb-6"
          >
            <div className="bg-primary/10 rounded-lg p-4">
              <h4 className="font-semibold text-primary mb-2 font-mono text-sm">
                // 강점
              </h4>
              <ul className="space-y-1">
                {result.strengths.map((strength, i) => (
                  <li key={i} className="text-sm text-foreground/80 flex items-center gap-2">
                    <span className="text-primary">+</span> {strength}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary/10 rounded-lg p-4">
              <h4 className="font-semibold text-secondary mb-2 font-mono text-sm">
                // 주의점
              </h4>
              <ul className="space-y-1">
                {result.weaknesses.map((weakness, i) => (
                  <li key={i} className="text-sm text-foreground/80 flex items-center gap-2">
                    <span className="text-secondary">-</span> {weakness}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Compatible Patterns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="card-gradient rounded-xl p-6 border border-border mb-6"
        >
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="text-xl">💕</span> 궁합이 잘 맞는 패턴
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {compatiblePatterns.map((pattern) => (
              <div
                key={pattern.type}
                className="bg-muted/50 rounded-lg p-3 border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{pattern.emoji}</span>
                  <span className="font-semibold text-primary">{pattern.name}</span>
                </div>
                <p className="text-xs text-muted-foreground">{pattern.tagline}</p>
              </div>
            ))}
          </div>
        </motion.div>
        </div>{/* end capturable area */}

        {/* All Patterns Section */}
        <AllPatternsSection currentType={result.type} />

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <SocialShareButtons
            result={result}
            onSaveImage={handleSaveImage}
            onRestart={onRestart}
          />
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-center mt-8 font-mono text-xs text-muted-foreground"
        >
          Made with 💚 by PatternType
        </motion.div>
      </div>
    </div>
  );
};
