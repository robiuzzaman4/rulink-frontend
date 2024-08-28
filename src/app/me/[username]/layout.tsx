import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

const UsernameLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      {children}
      <div className="fixed bottom-0 right-0 mr-4 mb-4">
        {/* brand */}
        <Link
          href="https://rulink.vercel.app"
          target="_blank"
          className="flex items-center gap-1 w-full bg-background shadow-md hover:shadow-xl rounded-lg px-2 py-2"
        >
          <Image
            src="/logo-zinc.png"
            alt="logo"
            height={720}
            width={720}
            className="h-5 w-5"
          />
          <p className="font-medium text-xs font-satoshi">Made in Rulink</p>
        </Link>
      </div>
    </div>
  );
};

export default UsernameLayout;
