"use client"
import AnimatedLayout from "@/components/ui/animated-layout";
import { BrainAnim } from "@/components/ui/brain-anim";
import { Button } from "@/components/ui/button";
import { CamStatus } from "@/components/ui/cam-status";
import { CommercialPlayer } from "@/components/ui/commercial-player";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FacePlayer } from "@/components/ui/face-player";
import { ProcessingAnim } from "@/components/ui/processing-anim";
import { TopBar } from "@/components/ui/top-bar";
import { useEffect, useState } from "react";

type WatchProps = React.HTMLAttributes<HTMLDivElement> & {
};

const Watch = ({
  ...props
}: WatchProps) => {
  const [introModalOpen, setIntroModalOpen] = useState<boolean>(false);
  const [eventInProgress, setEeventInProgress] = useState<boolean>(false);

  useEffect(() => {
    console.log("||--Start watch mount");
    setIntroModalOpen(true);
  }, []);

  const handlePlay = () => {
    console.log("||--Request to create event instance first, then:", introModalOpen);
    setIntroModalOpen(false);
    setEeventInProgress(true);
  };

  const handleVideoEnded = () => {
    console.log("||--Video ended");
    setEeventInProgress(false);
  };

  return (
    <AnimatedLayout>
      <div
        className="flex flex-col h-dvh w-full"
        {...props}
      >
        <TopBar backLink={"/watch-selector"} rightEndContent={<CamStatus hideMessage />} />
        <div className="flex flex-col items-center justify-start h-full w-full pb-3 px-3 sm:pb-6 sm:px-6 md:pb-8 md:px-8 pt-6">
          <CommercialPlayer commercialId="comm1" startPlaying={eventInProgress} onVideoEnded={handleVideoEnded} className="max-w-2xl" />
          <div className="flex flex-row items-center w-full max-w-sm mt-6 px-6 sm:px-0">
            <div className="flex flex-row items-center justify-between w-full gap-x-3 border-white/50 border p-2 rounded">
              <FacePlayer />
              <ProcessingAnim play={eventInProgress} />
              <BrainAnim play={eventInProgress} />
            </div>
          </div>
        </div>
        <Dialog open={introModalOpen} onOpenChange={(status) => setIntroModalOpen(status)}>
          <DialogContent className="min-w-72" hideClose onEscapeKeyDown={(event) => event.preventDefault()} onPointerDownOutside={(event) => event.preventDefault()}>
            <DialogHeader>
              <DialogTitle>Before playing the commercial...</DialogTitle>
              <DialogDescription className="text-gray-800 text-sm pt-5">
                <span className="block mb-2">Remember to face the front camera, pay attention to the commercial and be honest with your reactions.</span>
                <span className="block mb-2">Video cannot be paused. We will inform you the results when the commercial finishes.</span>
                <span className="block mb-2">Thanks for participating!</span>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button onClick={handlePlay}>Play</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </AnimatedLayout>
  )
};
Watch.displayName = "Watch";

export {
  Watch,
  type WatchProps
};
