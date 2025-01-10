"use client"
import AnimatedLayout from "@/components/ui/animated-layout";
import { TopBar } from "@/components/ui/top-bar";

type StatsProps = React.HTMLAttributes<HTMLDivElement> & {
};

const Stats = ({
  ...props
}: StatsProps) => {
  return (
    <AnimatedLayout>
      <div
        className="flex flex-col h-dvh w-full"
        {...props}
      >
        <TopBar backLink={"/stats-selector"} />
        <div className="flex flex-col md:flex-row items-center justify-center h-full w-full pb-3 px-3 sm:pb-6 sm:px-6 md:pb-8 md:px-8 pt-3">
          <h1>COMMERCIAL STATS</h1>
        </div>
      </div>
    </AnimatedLayout>
  )
};
Stats.displayName = "Stats";

export {
  Stats,
  type StatsProps
};
