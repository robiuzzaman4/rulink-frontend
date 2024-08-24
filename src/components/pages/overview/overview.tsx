"use client";

import React from "react";
import ClaimedUsernameProcess from "@/components/pages/overview/claimed-username-process";
import GeneratedUrl from "@/components/pages/overview/generated-url";
import ManageIndexes from "@/components/pages/overview/manage-indexes";
import useUserByEmail from "@/hooks/useUserByEmail";
import { Loader } from "lucide-react";

const Overview = () => {
  // === user info from database ===
  const { isLoading, isFetching } = useUserByEmail();

  // === handling loading state ===
  if (isLoading || isFetching) {
    return (
      <div className="text-xl font-medium text-center w-full h-[calc(100vh-168px)] grid place-items-center text-foreground">
        <Loader size={24} className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      <GeneratedUrl />
      <ManageIndexes />

      {/* claim user name process */}
      <ClaimedUsernameProcess />
    </div>
  );
};

export default Overview;
