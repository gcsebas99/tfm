import { useDeepNavigate } from "@/hooks/use-deep-navigate";
import HappyFaceSvg from "@/images/logo-happy-tfm.svg";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

type TopBarProps = React.HTMLAttributes<HTMLDivElement> & {
  backLink: string;
  rightEndContent?: React.ReactNode;
};

const TopBar = ({
  backLink,
  rightEndContent = null,
  ...props
}: TopBarProps) => {
  const { navigateUp } = useDeepNavigate();

  const back = () => navigateUp(backLink);

  return (
    <div className="w-full h-14 flex flex-row items-center justify-between bg-slate-950 text-sky-100 shadow px-2 md:px-4" {...props}>
      <div className="flex-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={back}
        >
          <ChevronLeft />
          <span>Back</span>
        </Button>
      </div>
      <div className="flex-1 flex flex-row items-center justify-center">
        <img src={HappyFaceSvg} alt="TFM Prototype" className="w-8 border-white text-white cursor-pointer" onClick={() => navigateUp("/")} />
      </div>
      <div className="flex-1">{rightEndContent}</div>
    </div>
  );
};

export {
  TopBar
};
