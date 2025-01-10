import { useDeepNavigate } from "@/hooks/use-deep-navigate";
import { Button } from "./button";
import { AspectRatio } from "./aspect-ratio";

type UserAndLogoutProps = React.HTMLAttributes<HTMLDivElement> & {
};

const UserAndLogout = ({
  ...props
}: UserAndLogoutProps) => {
  const { navigateUp } = useDeepNavigate();

  const navigateStatsLogin = () => navigateUp("/stats-login");

  return (
    <div className="flex flex-row items-center justify-end" {...props}>
      <Button
        variant="ghost"
        size="sm"
        onClick={navigateStatsLogin}
      >
        Log Out
      </Button>
      <div className="h-10 w-10 ml-3">
        <AspectRatio ratio={1 / 1} className="border-2 border-white/90 rounded-full" >
          <img src={"https://i.pravatar.cc/50"} alt={"User"} className="w-full h-full object-cover rounded-full" />
        </AspectRatio>
      </div>
    </div>
  );
};

export {
  UserAndLogout
};
