import IconButton from "@/components/shared/icon-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "lucide-react";
import React from "react";

interface UsernameInputCardProps {
  handleNextSlide: () => void;
}

const UsernameInputCard = ({ handleNextSlide }: UsernameInputCardProps) => {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      {/* top section */}
      <div className="grid gap-4">
        <div className="w-fit mx-auto">
          <IconButton>
            <Link size={20} />
          </IconButton>
        </div>
        <div className="grid gap-1">
          <h2 className="text-xl font-medium text-center font-satoshi">
            Chose your username
          </h2>
          <p className="text-center text-base text-muted-foreground font-satoshi">
            This will be your shareable rulink url.
          </p>
        </div>
        <div className="flex items-center">
          <Input
            type="text"
            placeholder="rulink/"
            className="rounded-r-none disabled:cursor-default disabled:opacity-100 border-r-0 w-[68px]"
            disabled
          />
          <Input
            type="text"
            placeholder="username"
            className="rounded-none w-full z-20"
          />
          <Input
            type="text"
            placeholder=".vercel.app"
            className="rounded-l-none disabled:cursor-default disabled:opacity-100 border-l-0 w-[100px]"
            disabled
          />
        </div>
      </div>
      {/* bottom section */}
      <div className="h-fit mt-auto w-full">
        <Button size="lg" onClick={handleNextSlide} className="w-full">
          Complete
        </Button>
      </div>
    </div>
  );
};

export default UsernameInputCard;
