import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed z-30 hidden h-screen w-full shrink-0 lg:sticky lg:block bg-secondary/50 border-r border-r-border">
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
      <div className="px-6 py-4 w-full bg-secondary mt-4">
        <UserButton />
      </div>
    </div>
  );
};

export default Sidebar;
