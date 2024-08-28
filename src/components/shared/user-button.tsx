"use client";

import useUserByEmail from "@/hooks/useUserByEmail";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { useClerk } from "@clerk/nextjs";
import { toast } from "sonner";
import { Loader } from "lucide-react";

const UserButton = () => {
  // === get user info ===
  const { img, username, name, professional_title } = useUserByEmail();
  //   === cleck signout function and state ===
  const { signOut } = useClerk();
  const [isLoading, setIsLoading] = useState(false);

  // === handle sign out function ===
  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut({
        redirectUrl: "/",
      });
      setIsLoading(false);
    } catch (error) {
      toast.error("Failed to sign out.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="w-fit mx-6 mb-4 h-fit mt-auto">
          <Button
            variant="outline"
            className="flex items-center justify-start w-fit gap-2 h-10 px-2 rounded-full shadow-md"
          >
            <Avatar className="h-6 w-6 cursor-pointer">
              <AvatarImage src={img?.url} alt={`${username}'s picture`} />
              <AvatarFallback className="uppercase text-xs">
                {username?.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            {name && <p className="text-sm font-medium">{name}</p>}
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-48 w-auto rounded-xl">
        <DropdownMenuLabel className="px-2">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="grid gap-2 pt-2 pb-2 px-2">
          <Avatar className="h-10 w-10 cursor-pointer">
            <AvatarImage src={img?.url} alt={`${username}'s picture`} />
            <AvatarFallback className="uppercase text-xs">
              {username?.slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <span>
            <p className="text-sm font-medium">{name}</p>
            <p className="text-xs font-normal text-muted-foreground">
              {professional_title}
            </p>
          </span>
        </div>
        <div className="px-2 pb-2">
          <Button
            size="sm"
            disabled={isLoading}
            onClick={handleSignOut}
            variant="destructive"
            className="w-full"
          >
            Sign out
            {isLoading && <Loader size={12} className="animate-spin ml-2" />}
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
