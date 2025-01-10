"use client"
import AnimatedLayout from "@/components/ui/animated-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TopBar } from "@/components/ui/top-bar";
import { useDeepNavigate } from "@/hooks/use-deep-navigate";
import { KeyRound, UserRound } from "lucide-react";

type StatsLoginProps = React.HTMLAttributes<HTMLDivElement> & {
};

const StatsLogin = ({
  ...props
}: StatsLoginProps) => {
  const { navigateDown } = useDeepNavigate();

  const navigateStatsSelector = () => navigateDown("/stats-selector");

  return (
    <AnimatedLayout>
      <div
        className="flex flex-col h-dvh w-full"
        {...props}
      >
        <TopBar backLink={"/action"} />
        <div className="flex flex-col items-center justify-start h-full w-full pb-3 px-3 sm:pb-6 sm:px-6 md:pb-8 md:px-8 pt-3">
          <h1 className="text-lg sm:text-2xl text-sky-500 w-5/6 text-center text-wrap mt-8">Statistics Panel Login</h1>
          <p className="text-xs text-white">(User: user • Password: user)</p>
          <div className="flex flex-row items-center text-white max-w-sm w-full mt-10">
            <UserRound size={30} className="text-white" />
            <Input
              className="flex-1 ml-3"
              placeholder="User"
              value={"user"}
              onChange={() => {}}
            />
          </div>
          <div className="flex flex-row items-center text-white max-w-sm w-full mt-10">
            <KeyRound size={30} className="text-white" />
            <Input
              className="flex-1 ml-3"
              placeholder="Password"
              type="password"
              value={"user"}
              onChange={() => {}}
            />
          </div>
          <Button className="mt-10 min-w-24" onClick={navigateStatsSelector}>Enter</Button>
        </div>
      </div>
    </AnimatedLayout>
  )
};
StatsLogin.displayName = "StatsLogin";

export {
  StatsLogin,
  type StatsLoginProps
};
