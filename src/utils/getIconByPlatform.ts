import { TSocialPlatform } from "@/types";

export const getIconByPlatform = (platform: TSocialPlatform) => {
  let iconSrc = "";
  if (platform === "facebook") {
    iconSrc = "/icons/facebook.svg";
  } else if (platform === "instagram") {
    iconSrc = "/icons/instagram.svg";
  } else if (platform === "linkedin") {
    iconSrc = "/icons/linkedin.svg";
  } else if (platform === "x") {
    iconSrc = "/icons/x-fill.svg";
  } else if (platform === "youtube") {
    iconSrc = "/icons/youtube.svg";
  } else if (platform === "behance") {
    iconSrc = "/icons/behance.svg";
  } else if (platform === "dribbble") {
    iconSrc = "/icons/dribbble.svg";
  } else if (platform === "figma") {
    iconSrc = "/icons/figma.svg";
  }
  return {
    src: iconSrc,
    alt: `${platform} logo`,
  };
};
