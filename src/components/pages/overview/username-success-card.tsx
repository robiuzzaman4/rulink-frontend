import { Button } from "@/components/ui/button";
import React from "react";
import Lottie from "lottie-react";
import handShakeAnimation from "@/lottie/hand-shake.json";

interface UsernameSuccssCardProps {
  handleContinueToDashboard: () => void;
}

const UsernameSuccssCard = ({
  handleContinueToDashboard,
}: UsernameSuccssCardProps) => {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      {/* top section */}
      <div className="w-full h-full max-h-40">
        <div className="w-fit h-fit mx-auto ml-20 -mt-4">
          <Lottie animationData={handShakeAnimation} />
        </div>
      </div>
      {/* middle section */}
      <div className="grid gap-1">
        <h2 className="text-xl font-medium text-center font-satoshi">
          You&apos;re all set
        </h2>
        <p className="text-center text-base text-muted-foreground font-satoshi">
          Now configure your application and share with your friends and
          potential clients.
        </p>
      </div>
      {/* bottom section */}
      <div className="h-fit mt-auto w-full">
        <Button
          size="lg"
          onClick={handleContinueToDashboard}
          className="w-full"
        >
          Continue to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default UsernameSuccssCard;
