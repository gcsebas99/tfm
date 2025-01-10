import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const videoConstraints = {
  video: {
    width: {
      min: 1280,
      ideal: 1920,
      max: 2560,
    },
    height: {
      min: 720,
      ideal: 1080,
      max: 1440
    },
    facingMode: 'user'
  }
};

type FacePlayerProps = React.HTMLAttributes<HTMLDivElement> & {

};

const FacePlayer = ({
  className,
  ...props
}: FacePlayerProps) => {
  const videoRef = useRef(null);
  const [streamStarted, setStreamStarted] = useState<boolean>(false);
  console.log("streamStarted", streamStarted);

  useEffect(() => {
    startPlaying();
  });

  const startPlaying = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(device => device.kind === "videoinput");
    if (videoDevices.length === 0) {
      console.error("No video devices found");
      return;
    }
    const videoDevice = videoDevices[0];

    // if (streamStarted) {
    //   if (videoRef.current) {
    //      (videoRef.current as HTMLVideoElement).play();
    //   }
    //   return;
    // }
    const updatedConstraints = {
      ...videoConstraints,
      deviceId: {
        exact: videoDevice.deviceId
      }
    };
    const stream = await navigator.mediaDevices.getUserMedia(updatedConstraints);
    handleStream(stream);
  };

  const handleStream = (stream:MediaStream) => {
    if (videoRef.current) {
      (videoRef.current as HTMLVideoElement).srcObject = stream;
   }
    setStreamStarted(true);
  };

  return (
    <div className={cn("w-full shadow rounded overflow-hidden", className)} {...props}>
      <video ref={videoRef} autoPlay width="100%" src={undefined}></video>
    </div>
  );
};

export {
  FacePlayer
};
