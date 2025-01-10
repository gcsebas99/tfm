import { useWindowSize } from "@/hooks/use-window-size";
import { cn } from "@/lib/utils";
import { Brain } from "lucide-react";

type BrainAnimProps = React.HTMLAttributes<HTMLDivElement> & {
  play?: boolean;
};

const BrainAnim = ({
  play = false,
  className,
  ...props
}: BrainAnimProps) => {
  const { isScreenSizeSmallerThan } = useWindowSize();

  return (
    <div className={cn("", className)} {...props}>
      <Brain className={cn("text-sky-100", play ? "transmit-6" : "")} size={isScreenSizeSmallerThan("sm") ? 48 : 64} />
    </div>
  );
};

export {
  BrainAnim
};
