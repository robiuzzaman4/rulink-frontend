"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen w-full grid place-items-center">
      <div className="grid place-items-center gap-2 md:gap-4">
        <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-medium font-satoshi">
          Page Not Found!
        </h1>
        <Button asChild variant="link">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
