"use client"
import AnimatedOutlet from "@/components/ui/animated-outlet";
import { cn } from "@/lib/utils";

type AppLayoutProps = React.HTMLAttributes<HTMLDivElement> & {
};

const AppLayout = ({
  ...props
}: AppLayoutProps) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-br from-blue-900 to-purple-800",
        "h-dvh w-full overflow-y-auto",
      )}
      {...props}
    >
      <div>
        <AnimatedOutlet />
      </div>
    </div>
  )
};
AppLayout.displayName = "AppLayout";

export {
  AppLayout,
  type AppLayoutProps
};
