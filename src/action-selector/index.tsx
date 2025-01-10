"use client"
import AnimatedLayout from "@/components/ui/animated-layout";
import { Button } from "@/components/ui/button";
import { TopBar } from "@/components/ui/top-bar";
import { useDeepNavigate } from "@/hooks/use-deep-navigate";
import { useWindowSize } from "@/hooks/use-window-size";
import { ChartNoAxesCombined, Eye } from "lucide-react";

type ActionSelectorProps = React.HTMLAttributes<HTMLDivElement> & {
};

const ActionSelector = ({
  ...props
}: ActionSelectorProps) => {
  const { isScreenSizeSmallerThan } = useWindowSize();
  const { navigateDown } = useDeepNavigate();

  const navigateWatch = () => navigateDown("/watch-selector");
  const navigateStatsLogin = () => navigateDown("/stats-login");

  return (
    <AnimatedLayout>
      <div
        className="flex flex-col h-dvh w-full"
        {...props}
      >
        <TopBar backLink={"/"} />
        <div className="flex flex-col md:flex-row items-center justify-center h-full w-full pb-3 px-3 sm:pb-6 sm:px-6 md:pb-8 md:px-8 pt-3">
          <Button
            variant="shell"
            size="flexible"
            className="w-full h-full flex-1 flex flex-col items-center justify-around"
            onClick={navigateWatch}
          >
            <Eye size={isScreenSizeSmallerThan("md") ? 56 : 92} />
            <div className="flex flex-col items-center">
              <span className="text-lg mb-5">Watch Commercial</span>
              <span className="text-sm font-light text-center text-wrap w-5/6">Watch a test commercial and allow us to use your front camera to capture and process your reactions. (Images will not be stored, only processed statistics with no personal information)</span>
            </div>
          </Button>
          <div className="h-[2px] md:h-full w-full md:w-[2px] bg-sky-100/50 my-2 md:mx-4 md:my-0"></div>
          <Button
            variant="shell"
            size="flexible"
            className="w-full h-full flex-1 flex flex-col items-center justify-around"
            onClick={navigateStatsLogin}
          >
            <ChartNoAxesCombined size={isScreenSizeSmallerThan("md") ? 56 : 92} />
            <div className="flex flex-col items-center">
              <span className="text-lg mb-5">Analyze Statistics</span>
              <span className="text-sm font-light text-center text-wrap w-5/6">Check processed data in different formats to analize and extract insights from the captured facial reactions. Data can be exported in PDF format for multiple purposes.</span>
            </div>
          </Button>
        </div>
      </div>
    </AnimatedLayout>
  )
};
ActionSelector.displayName = "ActionSelector";

export {
  ActionSelector,
  type ActionSelectorProps
};
