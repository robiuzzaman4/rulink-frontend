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
      <div className="w-full h-full max-h-52 rounded-lg border border-border bg-secondary">
        <div className="h-40 flex items-center justify-center border-y border-y-border mt-6">
          <div className="px-4 sm:px-6 border-x h-full w-full flex flex-col items-center justify-center gap-6 mx-6 bg-background">
            <h1 className="text-base text-muted-foreground text-center font-medium font-satoshi">
              {`"Thank your for siging up. Let's get started together."`}
            </h1>

            <div className="flex items-center gap-2">
              <Image
                src="/dp.jpg"
                alt="ruhan dp"
                height={720}
                width={720}
                className="object-cover w-10 h-10 rounded-full border border-border"
              />
              <span>
                <h5 className="text-sm font-medium">Ruhan</h5>
                <p className="text-xs font-normal text-muted-foreground">
                  Developer of Rulink
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* middle section */}
      <div className="grid gap-1">
        <h2 className="text-xl font-medium text-center font-satoshi">
          Welcome to Rulink 🎉
        </h2>
        <p className="text-center text-base text-muted-foreground">
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
