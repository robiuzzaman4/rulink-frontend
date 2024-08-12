import IconButton from "@/components/shared/icon-button";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import React from "react";

interface UsernameClaimedSuccssCardProps {
  handleContinueToDashboard: () => void;
}

const UsernameClaimedSuccssCard = ({
  handleContinueToDashboard,
}: UsernameClaimedSuccssCardProps) => {
  return (
    <div className="w-full h-full flex flex-col gap-6 relative">
      {/* top section */}
      <div className="grid gap-4">
        <div className="w-fit mx-auto">
          <IconButton>
            <Link size={20} />
          </IconButton>
        </div>
        <div className="grid gap-1">
          <h2 className="text-xl font-medium text-center font-satoshi">
            welcome to the Dashboard
          </h2>
          <p className="text-center text-base text-muted-foreground font-satoshi">
            This will be your shareable rulink url.
          </p>
        </div>
      </div>
      {/* bottom section */}
      <div className="h-fit mt-auto w-full">
        <Button
          size="lg"
          onClick={handleContinueToDashboard}
          className="w-full"
        >
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default UsernameClaimedSuccssCard;
