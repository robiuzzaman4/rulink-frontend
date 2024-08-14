"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useUserByEmail from "@/hooks/useUserByEmail";
import { Check, Copy } from "lucide-react";
import React, { useState } from "react";

const GeneratedUrl = () => {
  // === username ===
  const { username } = useUserByEmail();
  const generatedUrl = `https://rulink/${username}.vercel.app`;

  // === copy to clipboard state and function ===
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // prevent rendering if username does not exist
  if (!username) {
    return null;
  }
  return (
    <div className="w-full border-b border-b-border px-4 lg:px-6 pb-6 flex flex-col gap-1">
      <h2 className="text-xl sm:text-2xl font-medium font-satoshi">
        Your Website Url
      </h2>
      <span className="flex items-center gap-4">
        <p className="text-sm sm:text-base font-medium text-teal-600">
          {generatedUrl}
        </p>
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger>
              <Button
                onClick={handleCopy}
                variant="outline"
                size="icon"
                className="shrink-0"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </Button>
            </TooltipTrigger>

            <TooltipContent>
              <p>{copied ? "Copied" : "Copy"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </span>
    </div>
  );
};

export default GeneratedUrl;
