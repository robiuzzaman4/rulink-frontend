"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

const ClaimedUsernameProcess = () => {
  const { user } = useUser();
  return (
    <div>
      <h3 className="text-base font-medium text-muted-foreground">
        Email: {user?.emailAddresses?.[0]?.emailAddress}
      </h3>
      <h3 className="text-base font-medium text-muted-foreground">
        UserId: {user?.id}
      </h3>
    </div>
  );
};

export default ClaimedUsernameProcess;
