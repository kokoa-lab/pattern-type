import { Share2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { PatternResult } from "@/data/questions";

interface SocialShareButtonsProps {
  result: PatternResult;
  onSaveImage: () => void;
  onRestart: () => void;
}

export const SocialShareButtons = ({ result, onSaveImage, onRestart }: SocialShareButtonsProps) => {
  const shareUrl = `${window.location.origin}?result=${result.type}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success("결과 링크가 복사되었습니다!", {
      description: "친구에게 공유해보세요 🚀",
    });
  };

  return (
    <div className="grid grid-cols-3 gap-3">
      <Button
        onClick={onSaveImage}
        variant="outline"
        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
      >
        <Download className="w-4 h-4 mr-2" />
        이미지 저장
      </Button>
      <Button
        onClick={handleCopyLink}
        variant="outline"
        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
      >
        <Share2 className="w-4 h-4 mr-2" />
        링크 복사
      </Button>
      <Button
        onClick={onRestart}
        variant="outline"
        className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
      >
        다시 테스트
      </Button>
    </div>
  );
};
