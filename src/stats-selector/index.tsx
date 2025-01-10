"use client"
import AnimatedLayout from "@/components/ui/animated-layout";
import { Button } from "@/components/ui/button";
import { CarouselSelector } from "@/components/ui/carousel-selector";
import { TopBar } from "@/components/ui/top-bar";
import { UserAndLogout } from "@/components/ui/user-and-logout";
import { campaigns } from "@/data/campaigns";
import { commercials } from "@/data/commercials";
import { MarketingCommercial } from "@/data/entities";
import { useDeepNavigate } from "@/hooks/use-deep-navigate";
import { useMemo, useState } from "react";

type StatsSelectorProps = React.HTMLAttributes<HTMLDivElement> & {
};

const StatsSelector = ({
  ...props
}: StatsSelectorProps) => {
  const { navigateDown } = useDeepNavigate();
  const [selectedCampaign, setSelectedCampaign] = useState<number>(0);
  const [selectedCommercial, setSelectedCommercial] = useState<number>(0);

  const currentCommercials:MarketingCommercial[] = useMemo(() => {
    const campaignId = campaigns[selectedCampaign].id;
    return commercials.filter((commercial) => commercial.marketingCampaignId === campaignId);
  }, [commercials, selectedCampaign]);

  const navigateStats = () => navigateDown("/stats");

  return (
    <AnimatedLayout>
      <div
        className="flex flex-col h-dvh w-full"
        {...props}
      >
        <TopBar backLink={"/stats-login"} rightEndContent={<UserAndLogout />} />
        <div className="flex flex-col items-center justify-start h-full w-full pb-3 px-3 sm:pb-6 sm:px-6 md:pb-8 md:px-8 pt-3 overflow-y-auto">
          <h1 className="text-lg sm:text-2xl text-sky-500 w-5/6 text-center text-wrap mt-8">Campaign and Commercial</h1>

          <CarouselSelector items={campaigns} staticTitle="Campaign:" onSelectedChange={(selected) => {
            setSelectedCampaign(selected);
            setSelectedCommercial(0);
          }} />
          <CarouselSelector items={currentCommercials} staticTitle="Commercial:" onSelectedChange={(selected) => setSelectedCommercial(selected)} />
          <Button className="mt-5" onClick={navigateStats}>View statistics</Button>
        </div>
      </div>
    </AnimatedLayout>
  )
};
StatsSelector.displayName = "StatsSelector";

export {
  StatsSelector,
  type StatsSelectorProps
};
