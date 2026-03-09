import { motion } from "framer-motion";
import { patternResults, PatternType } from "@/data/questions";

const allPatterns: PatternType[] = [
  "observer", "singleton", "factory", "strategy", "decorator", "adapter", "builder"
];

interface AllPatternsSectionProps {
  currentType: PatternType;
}

export const AllPatternsSection = ({ currentType }: AllPatternsSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1 }}
      className="card-gradient rounded-xl p-6 border border-border mb-6"
    >
      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
        <span className="text-xl">🗂️</span> 전체 패턴 타입
      </h3>
      <div className="space-y-2">
        {allPatterns.map((type) => {
          const pattern = patternResults[type];
          const isCurrent = type === currentType;
          return (
            <div
              key={type}
              className={`flex items-center gap-3 rounded-lg p-3 transition-colors ${
                isCurrent
                  ? "bg-primary/20 border border-primary/50"
                  : "bg-muted/30 border border-transparent hover:border-border"
              }`}
            >
              <span className="text-2xl shrink-0">{pattern.emoji}</span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className={`font-bold text-sm ${isCurrent ? "text-primary" : "text-foreground"}`}>
                    {pattern.name}
                  </span>
                  <span className="text-xs text-muted-foreground">— {pattern.tagline}</span>
                  {isCurrent && (
                    <span className="text-[10px] font-mono bg-primary/30 text-primary px-1.5 py-0.5 rounded">
                      YOU
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{pattern.workStyle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
