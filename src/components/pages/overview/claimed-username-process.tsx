"use client";

import React, { useEffect, useState } from "react";
import WelcomeModal from "@/components/pages/overview/welcome-modal";
import useUserByEmail from "@/hooks/useUserByEmail";

const ClaimedUsernameProcess = () => {
  // === user info from database ===
  const { clerk_email, isClaimedUsername, isLoading, isFetching, refetch } =
    useUserByEmail();

  // === welcome modal state ===
  const [open, setOpen] = useState(false);

  // === set modal state ===
  useEffect(() => {
    if (
      (!isLoading || !isFetching) &&
      (isClaimedUsername === false || isClaimedUsername === undefined)
    ) {
      setOpen(true);
    } else if (isClaimedUsername === true) {
      setOpen(false);
    }
  }, [isLoading, isFetching, isClaimedUsername]);

  // === prevent rendering if user is exist and claimed username ===
  if (isClaimedUsername === true) {
    return null;
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
