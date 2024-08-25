import {
  Box,
  BriefcaseBusiness,
  Earth,
  FolderClosed,
  Sparkle,
  UserPen,
} from "lucide-react";
export const NAVLINKS = {
  overview: [
    {
      label: "Overview",
      href: "/dashboard/overview",
      icon: <Box size={16} />,
    },
  ],
  manage: [
    {
      label: "Profile",
      href: "/dashboard/profile",
      icon: <UserPen size={16} />,
    },
    {
      label: "Skills",
      href: "/dashboard/skills",
      icon: <Sparkle size={16} />,
    },
    {
      label: "Projects",
      href: "/dashboard/projects",
      icon: <FolderClosed size={16} />,
    },
    {
      label: "Experiences",
      href: "/dashboard/experiences",
      icon: <BriefcaseBusiness size={16} />,
    },
    {
      label: "Socials",
      href: "/dashboard/socials",
      icon: <Earth size={16} />,
    },
  ],
};
