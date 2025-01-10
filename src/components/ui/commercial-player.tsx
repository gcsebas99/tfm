import { cn } from "@/lib/utils";

import comm1 from "../../data/videos/commercial-1.mp4";
import comm2 from "../../data/videos/commercial-2.mp4";
import comm3 from "../../data/videos/commercial-3.mp4";
import comm4 from "../../data/videos/commercial-4.mp4";
import { useEffect } from "react";

type CommercialPlayerProps = React.HTMLAttributes<HTMLDivElement> & {
  commercialId: string;
  startPlaying: boolean;
  onVideoEnded?: () => void;
};

const CommercialPlayer = ({
  commercialId,
  startPlaying,
  onVideoEnded = () => {},
  className,
  ...props
}: CommercialPlayerProps) => {

  useEffect(() => {
    if (startPlaying) {
      const video = document.querySelector("video");
      if (video) {
        video.play();
      }
    }
  }, [startPlaying]);

  const videoSource = (id:string) => {
    switch (id) {
      case "comm1": return comm1;
      case "comm2": return comm2;
      case "comm3": return comm3;
      case "comm3": return comm4;
      default: return undefined;
    }
  };

  return (
    <div className={cn("w-full shadow rounded overflow-hidden", className)} {...props}>
      <video width="100%" src={videoSource(commercialId)} onEnded={onVideoEnded}></video>
    </div>
  );
};

export {
  CommercialPlayer
};
