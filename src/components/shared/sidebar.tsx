import { UserButton } from "@clerk/nextjs";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed z-30 hidden h-screen w-full shrink-0 lg:sticky bg-secondary/50 border-r border-r-border lg:flex flex-col justify-between">
      {/* lgoo */}
      <Link
        href="/dashboard/overview"
        className="flex items-center gap-1 py-4 px-8 w-full border-b border-b-border hover:bg-secondary hover:transition-all duration-300"
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

      {/* user button */}
      <div className="w-full px-6 pb-4 flex items-center justify-between">
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
