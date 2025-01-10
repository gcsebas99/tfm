
type MarketingCampaign =  {
  id: number;
  title: string;
  description: string;
  image: string;
};

type MarketingCommercial =  {
  id: number;
  marketingCampaignId: number;
  title: string;
  image: string;
  video: string;
};

export {
  type MarketingCampaign,
  type MarketingCommercial,
};
