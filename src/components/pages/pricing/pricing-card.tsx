"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TPricing } from "@/types";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

interface PricingCardProps {
  pricing: TPricing;
}

const PricingCard = ({ pricing }: PricingCardProps) => {
  // === handle contact me ===
  const handleContactMe = () => {
    toast.info("Custom plan will be available soon.");
  };

  return (
    <div
      className={cn(
        "bg-background rounded-2xl border border-border shadow-lg py-6 flex flex-col gap-4 lg:gap-6",
        {
          "border-rulink-primary": pricing?.plan === "Business",
        }
      )}
    >
      <div className="px-4 lg:px-6 flex flex-col gap-4">
        {/* header section */}
        <span className="grid gap-2">
          <h1 className="text-center text-3xl font-medium font-serif">
            {pricing?.plan}
          </h1>
          <p className="text-center text-sm text-muted-foreground">
            {pricing?.description}
          </p>
        </span>
        <div className="flex items-center justify-center w-full">
          {pricing?.price === "FREE" ? (
            <span className="flex items-end gap-1">
              <p className="text-3xl text-center font-medium font-satoshi">
                $0
              </p>
              <p className="text-sm text-muted-foreground">/mo</p>
            </span>
          ) : (
            <span className="text-3xl text-center font-medium font-satoshi">
              Custom
            </span>
          )}
        </div>
      </div>
      {/* action button */}
      <div className="px-4 lg:px-6 py-4 grid place-items-center w-full bg-secondary/50 border-t border-t-border border-b border-b-border">
        {pricing?.price === "FREE" ? (
          <Button asChild className="w-full" variant="outline" size="lg">
            <Link href="/sign-up">Start For Free</Link>
          </Button>
        ) : (
          <Button
            onClick={handleContactMe}
            className="w-full"
            variant="rulink"
            size="lg"
          >
            Contact Me
          </Button>
        )}
      </div>
      {/* features */}
      <div className="px-4 lg:px-6 grid gap-4">
        {pricing?.features?.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-rulink-primary/10 grid place-items-center text-rulink-primary">
              <Check size={12} />
            </div>
            <p className="text-sm text-muted-foreground">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
