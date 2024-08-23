import PricingCard from "@/components/pages/pricing/pricing-card";
import { PRICING_PLANS } from "@/constants/pricing";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple & transparent pricing. Start for free.",
};

const PricingPage = () => {
  return (
    <div className="mt-[68px] py-16 flex flex-col gap-16 px-4 lg:px-6">
      {/* pricing header */}
      <div className="w-fit mx-auto flex flex-col items-center justify-center gap-4">
        <h2 className="text-3xl md:text-4xl text-center font-medium font-serif">
          Pricing
        </h2>
        <p className="text-sm font-medium text-muted-foreground text-center">
          Simple & transparent pricing. Start for free.
        </p>
      </div>
      {/* pricing cards */}
      <div className="w-full max-w-3xl mx-auto grid lg:grid-cols-2 gap-8">
        {PRICING_PLANS?.map((pricing) => (
          <PricingCard key={pricing?.id} pricing={pricing} />
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
