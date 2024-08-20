import { TUser } from "@/types";
import React from "react";

interface UserHeroProps {
  user: TUser;
}
const UserHero = ({ user }: UserHeroProps) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">{user.name}</h1>
    </div>
  );
};

export default UserHero;
