"use client";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import {
  Box,
  Earth,
  MoveRight,
  Sparkle,
  UserPen,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = {
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
      label: "Socials",
      href: "/dashboard/socials",
      icon: <Earth size={16} />,
    },
  ],
};

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="fixed inset-y-0 z-30 hidden min-h-screen w-full shrink-0 lg:sticky bg-secondary/50 border-r border-r-border lg:flex flex-col">
      {/* lgoo */}
      <Link
        href="/dashboard/overview"
        className="flex items-center gap-1 h-14 px-8 w-full border-b border-b-border hover:bg-secondary hover:transition-all duration-300"
      >
        <Image
          src="/logo-zinc.png"
          alt="logo"
          height={720}
          width={720}
          className="h-6 w-6"
        />
        <p className="font-bold text-base font-satoshi">Rulink</p>
      </Link>

      <div className="grid gap-6 pt-6">
        {/* overview navlinks */}
        <div className="grid gap-2 px-6">
          <h5 className="text-xs font-semibold text-muted-foreground">
            Overview
          </h5>
          <div className="grid">
            {links.overview.map(({ label, href, icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  className={cn(
                    "h-9 px-3 py-1 rounded-md flex items-center gap-2 text-muted-foreground hover:text-foreground",
                    {
                      "bg-secondary text-foreground": isActive,
                    }
                  )}
                >
                  {icon}
                  <p className="font-medium text-sm">{label}</p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* manage navlinks */}
        <div className="grid gap-2 px-6">
          <h5 className="text-xs font-medium text-muted-foreground">Manage</h5>
          <div className="grid">
            {links.manage.map(({ label, href, icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  className={cn(
                    "h-9 px-3 py-1 rounded-md flex items-center gap-2 text-muted-foreground hover:text-foreground",
                    {
                      "bg-secondary text-foreground": isActive,
                    }
                  )}
                >
                  {icon}
                  <p className="font-medium text-sm">{label}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* user button */}
      <div className="w-full px-6 pb-4 flex items-center justify-between h-fit mt-auto">
        <span className="flex items-center gap-2">
          <p className="text-sm text-muted-foreground">
            Click to see your user account
          </p>
          <MoveRight size={14} className="text-sm text-muted-foreground" />
        </span>
        <UserButton />
      </div>
    </div>
  );
};

export default Sidebar;
