export type TSocialPlatform =
  | "facebook"
  | "instagram"
  | "linkedin"
  | "x"
  | "youtube"
  | "behance"
  | "dribbble"
  | "figma";

export type TPricing = {
  id: string;
  plan: string;
  price: string;
  description: string;
  features: string[];
};
