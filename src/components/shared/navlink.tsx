"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Link {
  href: string;
  label: string;
  user?: any;
}

const Navlink = ({ href, label, user }: Link) => {
  // find active link
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn("text-sm font-normal text-muted-foreground", {
        "text-foreground font-medium": isActive,
        hidden: user && href === "/sign-in",
      })}
    >
      {label}
    </Link>
  );
};

export default Navlink;
