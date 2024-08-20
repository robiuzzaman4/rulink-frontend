"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TUser } from "@/types";
import React from "react";

interface UserNavbarProps {
  user: TUser;
}

const UserNavbar = ({ user }: UserNavbarProps) => {
  return (
    <nav className="w-full bg-background rounded-xl p-4 flex items-center justify-between gap-2 border border-border shadow sticky top-0">
      <Avatar className="h-8 w-8">
        <AvatarImage src={user?.img?.url} alt={`${user?.username}'s picture`} />
        <AvatarFallback className="uppercase">
          {user?.username?.slice(0, 2)}
        </AvatarFallback>
      </Avatar>

      <h2 className="text-2xl font-medium">Hi! Good Moring</h2>

      <Button size="sm">Contact Me</Button>
    </nav>
  );
};

export default UserNavbar;
