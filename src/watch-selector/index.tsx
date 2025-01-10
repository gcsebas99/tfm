"use client"
import { AppContext } from "@/app-state";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import AnimatedLayout from "@/components/ui/animated-layout";
import { Button } from "@/components/ui/button";
import { CamStatus } from "@/components/ui/cam-status";
import { CarouselSelector } from "@/components/ui/carousel-selector";
import { TopBar } from "@/components/ui/top-bar";
import { campaigns } from "@/data/campaigns";
import { commercials } from "@/data/commercials";
import { MarketingCommercial } from "@/data/entities";
import { useDeepNavigate } from "@/hooks/use-deep-navigate";
import { useContext, useMemo, useState } from "react";

type WatchSelectorProps = React.HTMLAttributes<HTMLDivElement> & {
};

const WatchSelector = ({
  ...props
}: WatchSelectorProps) => {
  const { appState } = useContext(AppContext);
  const { cameraPermission } = appState;
  const { navigateDown } = useDeepNavigate();
  const [selectedCampaign, setSelectedCampaign] = useState<number>(0);
  const [selectedCommercial, setSelectedCommercial] = useState<number>(0);

  const currentCommercials:MarketingCommercial[] = useMemo(() => {
    const campaignId = campaigns[selectedCampaign].id;
    return commercials.filter((commercial) => commercial.marketingCampaignId === campaignId);
  }, [commercials, selectedCampaign]);

  const navigateWatch = () => navigateDown("/watch");

  return (
    <AnimatedLayout>
      <div
        className="flex flex-col h-dvh w-full"
        {...props}
      >
        <TopBar backLink={"/action"} rightEndContent={<CamStatus />} />
        <div className="flex flex-col items-center justify-start h-full w-full pb-3 px-3 sm:pb-6 sm:px-6 md:pb-8 md:px-8 pt-3 overflow-y-auto">
          <h1 className="text-lg sm:text-2xl text-sky-500 w-5/6 text-center text-wrap mt-8">Campaign and Commercial</h1>

          <CarouselSelector items={campaigns} staticTitle="Campaign:" onSelectedChange={(selected) => {
            setSelectedCampaign(selected);
            setSelectedCommercial(0);
          }} />
          <CarouselSelector items={currentCommercials} staticTitle="Commercial:" onSelectedChange={(selected) => setSelectedCommercial(selected)} />
          <Alert variant={cameraPermission === "granted" ? "success" : "warning"} className="max-w-xs mt-6">
            <AlertTitle>{cameraPermission === "granted" ? "All set!" : "Enable front camera to continue"}</AlertTitle>
            <AlertDescription>
              {cameraPermission === "granted" ? "While watching the commercial, please make sure you're facing the camera for better results." : "Please grant permission to use your fron camera and record your expressions."}
            </AlertDescription>
          </Alert>
          <Button className="mt-5" onClick={navigateWatch} disabled={cameraPermission !== "granted"}>Watch Commercial</Button>
        </div>
      </div>
    </AnimatedLayout>
  )
};
WatchSelector.displayName = "WatchSelector";

export {
  WatchSelector,
  type WatchSelectorProps
};
