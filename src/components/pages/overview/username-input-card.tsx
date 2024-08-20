import IconButton from "@/components/shared/icon-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Link, Loader } from "lucide-react";
import React from "react";

interface UsernameInputCardProps {
  handleClaimUsername: () => void;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  isAvailableUsername: boolean | null;
  isUsernameLoading: boolean;
  isCreateUserLoading: boolean;
}

const UsernameInputCard = ({
  handleClaimUsername,
  username,
  setUsername,
  isAvailableUsername,
  isUsernameLoading,
  isCreateUserLoading,
}: UsernameInputCardProps) => {
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
            Choose your username
          </h2>
          <p className="text-center text-base text-muted-foreground font-satoshi">
            This will be your shareable rulink url.
          </p>
        </div>
        {/* input */}
        <div className="flex items-center">
          <Input
            type="text"
            placeholder="rulink.vercel.app/"
            className="rounded-r-none disabled:cursor-default disabled:opacity-100 border-r-0 w-36"
            disabled
          />
          <div className="w-full z-20 relative">
            <Input
              type="text"
              placeholder="username"
              className="rounded-l-none w-full z-20"
              onChange={(e) => setUsername(e.target.value)}
            />
            {isUsernameLoading && (
              <Loader
                size={16}
                className="absolute top-2.5 right-1 animate-spin text-muted-foreground"
              />
            )}
            {!isUsernameLoading && username !== "" && isAvailableUsername && (
              <div className="absolute top-2.5 right-1 h-4 w-4 grid place-items-center border border-green-500 bg-green-50 rounded-full">
                <Check size={10} className="text-green-500" />
              </div>
            )}
          </div>
        </div>
        {/* messages */}
        {isUsernameLoading && (
          <p className="text-xs text-muted-foreground">Checking username...</p>
        )}
        {username !== "" &&
          !isUsernameLoading &&
          isAvailableUsername &&
          isAvailableUsername !== null && (
            <p className="text-xs text-green-500">Username is available</p>
          )}
        {username !== "" &&
          !isUsernameLoading &&
          !isAvailableUsername &&
          isAvailableUsername !== null && (
            <p className="text-xs text-red-500">Username is already taken</p>
          )}
      </div>
      {/* bottom section */}
      <div className="h-fit mt-auto w-full">
        <Button
          size="lg"
          onClick={handleClaimUsername}
          className="w-full"
          disabled={
            isUsernameLoading ||
            !isAvailableUsername ||
            !username ||
            isCreateUserLoading
          }
        >
          {isCreateUserLoading ? (
            <Loader size={16} className="animate-spin" />
          ) : (
            <>Complete</>
          )}
        </Button>
        {/* <Button size="lg" onClick={temp} className="w-full">
          Complete
        </Button> */}
      </div>
    </div>
  );
};

export default UsernameInputCard;
