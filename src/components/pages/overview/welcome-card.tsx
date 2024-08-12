import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface WelcomeCardProps {
  handleNextSlide: () => void;
}

const WelcomeCard = ({ handleNextSlide }: WelcomeCardProps) => {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      {/* top section */}
      <div className="w-full h-full max-h-52">
        <Image
          src="/gradient.png"
          alt="gradient"
          height={720}
          width={1080}
          className="object-cover w-full h-full rounded-lg border border-border"
        />
      </div>
      {/* middle section */}
      <div className="grid gap-1">
        <h2 className="text-xl font-medium text-center font-satoshi">
          Welcome to Rulink 🎉
        </h2>
        <p className="text-center text-base text-muted-foreground font-satoshi">
          I&apos;m glad to have you onboard. Let&apos;s get you up and running.
        </p>
      </div>
      {/* bottom section */}
      <div className="h-fit mt-auto w-full">
        <Button size="lg" onClick={handleNextSlide} className="w-full">
          Next
        </Button>
      </div>
    </div>
  );
};

export default WelcomeCard;
