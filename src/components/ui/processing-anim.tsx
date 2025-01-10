import { useWindowSize } from "@/hooks/use-window-size";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

type ProcessingAnimProps = React.HTMLAttributes<HTMLDivElement> & {
  play?: boolean;
};

const ProcessingAnim = ({
  play = false,
  className,
  ...props
}: ProcessingAnimProps) => {
  const { isScreenSizeSmallerThan } = useWindowSize();

  return (
    <div className={cn("flex flex-row items-center justify-center", className)} {...props}>
      <ChevronRight className={cn("text-sky-100", play ? "transmit-1" : "")} size={isScreenSizeSmallerThan("sm") ? 24 : 30} />
      <ChevronRight className={cn("text-sky-100", play ? "transmit-2" : "")} size={isScreenSizeSmallerThan("sm") ? 24 : 30} />
      <ChevronRight className={cn("text-sky-100", play ? "transmit-3" : "")} size={isScreenSizeSmallerThan("sm") ? 24 : 30} />
      <ChevronRight className={cn("text-sky-100", play ? "transmit-4" : "")} size={isScreenSizeSmallerThan("sm") ? 24 : 30} />
      <ChevronRight className={cn("text-sky-100", play ? "transmit-5" : "")} size={isScreenSizeSmallerThan("sm") ? 24 : 30} />
    </div>
  );
};

export {
  ProcessingAnim
};
