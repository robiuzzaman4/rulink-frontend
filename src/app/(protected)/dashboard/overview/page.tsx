"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

const OverviewPage = () => {
  const { user } = useUser();

  return (
    <div className="py-20 px-4 lg:px-6">
      <h3 className="text-base font-medium text-muted-foreground">
        Email: {user?.emailAddresses?.[0]?.emailAddress}
      </h3>
      <h3 className="text-base font-medium text-muted-foreground">
        UserId: {user?.id}
      </h3>
    </div>
  );
};

export default OverviewPage;

/**
 * Email: ruhan+clerk_test@example.com
 * UserId: user_2kVNbM2uznV5jReoJnJVmYDUs6w
 * UserId: user_2kVNbM2uznV5jReoJnJVmYDUs6w
 */
