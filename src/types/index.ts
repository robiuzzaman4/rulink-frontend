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

// === project types ===
export type TProject = {
  title: string;
  description: string;
  thumbnail_url: string;
  live_url?: string;
};

// === user types ===
export type TUser = {
  _id: string;
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
  projects?: TProject[];
};
