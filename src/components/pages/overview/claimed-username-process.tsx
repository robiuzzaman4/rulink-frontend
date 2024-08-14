"use client";
import React, { useEffect, useState } from "react";
import WelcomeModal from "@/components/pages/overview/welcome-modal";
import { Loader } from "lucide-react";
import useUserByEmail from "@/hooks/useUserByEmail";

const ClaimedUsernameProcess = () => {
  // === user info from database ===
  const { clerk_email, isClaimedUsername, isLoading, refetch } =
    useUserByEmail();

  // === welcome modal state ===
  const [open, setOpen] = useState(false);

  // === set modal state ===
  useEffect(() => {
    if (
      !isLoading &&
      (isClaimedUsername === false || isClaimedUsername === undefined)
    ) {
      setOpen(true);
    } else if (isClaimedUsername === true) {
      setOpen(false);
    }
  }, [isLoading, isClaimedUsername]);

  // === prevent rendering if user is exist and claimed username ===
  if (isClaimedUsername === true) {
    return null;
  }

  // === handling loading state ===
  if (isLoading) {
    return (
      <div className="text-xl font-medium text-center w-full h-[calc(100vh-160px)] grid place-items-center text-foreground">
        <Loader size={24} className="animate-spin" />
      </div>
    );
  }

  return (
    <>
      <WelcomeModal
        open={open}
        setOpen={setOpen}
        isClaimedUsername={isClaimedUsername}
        email={clerk_email as string}
        refetchUserByEmail={refetch}
      />
    </>
  );
};

export default ClaimedUsernameProcess;
