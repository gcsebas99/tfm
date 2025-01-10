import { Camera, CameraOff } from "lucide-react";
import { Button } from "./button";
import { useContext, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AppContext } from "@/app-state";

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

const checkCompatibility = () => 'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices;

type CamStatusProps = React.HTMLAttributes<HTMLDivElement> & {
  hideMessage?: boolean;
};

const CamStatus = ({
  hideMessage = false,
  ...props
}: CamStatusProps) => {
  const { appState, dispatch } = useContext(AppContext);
  const { cameraPermission } = appState;
  const [status, setStatus] = useState<string>("NOT_ENABLED");

  useEffect(() => {
    if (cameraPermission === "granted") {
      setStatus("ENABLED");
    } else if (cameraPermission === "denied") {
      setStatus("DISALLOWED");
    }
  });

  const requestCamera = async () => {
    if (status === "ENABLED") return;
    try {
      const permission = await navigator.mediaDevices.getUserMedia(videoConstraints);
      if (permission && permission.active === true) {
        setStatus("ENABLED");
        dispatch({ type: "SET_CAMERA_PERMISSION", payload: "granted" });
        console.log(permission);
      }
    } catch (error: unknown) {
      if (error instanceof Error && error.name === "NotAllowedError") {
        setStatus("DISALLOWED");
        dispatch({ type: "SET_CAMERA_PERMISSION", payload: "denied" });
      }
      console.log("error", error);
    }
  };

  const statusMessage = () => {
    switch (status) {
      case "NOT_ENABLED":
        return "Click to enable";
      case "DISALLOWED":
        return "Not allowed!";
      case "ENABLED":
        return "Granted!";
      default:
        return "";
    }
  };

  if (!checkCompatibility()) {
    return (
      <div className="flex flex-row items-center justify-end text-white" {...props}>
        <p className="text-xs font-semibold mr-2">Not compatible</p>
        <CameraOff />
    </div>
    );
  }

  return (
    <div className="flex flex-row items-center justify-end" {...props}>
      {!hideMessage ? <p className="text-white text-xs font-semibold mr-2 blink">{statusMessage()}</p> : null}
      <Button
        variant="default"
        size="icon"
        onClick={() => requestCamera()}
        className={cn(
          status === "DISALLOWED" ? "bg-gray-500 hover:bg-gray-700" : (status === "NOT_ENABLED" ? "bg-red-800 hover:bg-red-900" : "bg-green-600 hover:bg-green-800"),
        )}
      >
        <Camera />
      </Button>
    </div>
  );
};

export {
  CamStatus
};
