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

// === social types ===
export type TSocial = {
  label: string;
  platform: string;
  url: string;
};

// === img types ===
type TImg = {
  url: string;
  name: string;
  size: number;
};

// === user types ===
export type TUser = {
  name?: string;
  email: string;
  username: string;
  role?: "ADMIN" | "USER";
  professional_title?: string;
  bio?: string;
  img?: TImg;
  socials?: TSocial[];
  open_to_work?: boolean;
  skills?: string[];
  is_claimed_username: boolean;
  resume_url?: string;
};
