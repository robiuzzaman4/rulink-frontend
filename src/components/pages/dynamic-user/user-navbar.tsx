"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TUser } from "@/types";
import { getGreeting } from "@/utils/getGreeting";
import React from "react";

interface UserNavbarProps {
  user: TUser;
}

const UserNavbar = ({ user }: UserNavbarProps) => {
  const greeting = getGreeting();
  return (
    <nav className="w-full bg-background rounded-xl p-4 flex items-center justify-between gap-2 border border-border shadow sticky top-4">
      <Avatar className="h-8 w-8">
        <AvatarImage src={user?.img?.url} alt={`${user?.username}'s picture`} />
        <AvatarFallback className="uppercase text-xs">N/A</AvatarFallback>
      </Avatar>

      <h2 className="text-2xl font-medium hidden sm:block">{greeting}</h2>

      <Button>Contact Me</Button>
    </nav>
  );
};

export default UserNavbar;
