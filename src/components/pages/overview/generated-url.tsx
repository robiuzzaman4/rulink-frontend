"use client";

import { Button } from "@/components/ui/button";
import useUserByEmail from "@/hooks/useUserByEmail";
import { Check, Copy } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

const GeneratedUrl = () => {
  // === username ===
  const { username } = useUserByEmail();
  const generatedUrl = `https://rulink.vercel.app/${username}`;

  // === copy to clipboard state and function ===
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    toast.success("Copied to clipboard");
  };

  // prevent rendering if username does not exist
  if (!username) {
    return null;
  }
  return (
    <div className="w-full px-4 lg:px-6 pb-6 flex flex-col gap-1 sm:gap-2">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium font-satoshi">
        Your Website Url
      </h2>
      <span className="flex items-center gap-4">
        <p className="text-sm sm:text-base text-rulink-primary">
          {generatedUrl}
        </p>
        <Button
          onClick={handleCopy}
          variant="outline"
          size="icon"
          className="shrink-0"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </Button>
      </span>
    </div>
  );
};

export default GeneratedUrl;
