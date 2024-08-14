"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import WelcomeModal from "@/components/pages/overview/welcome-modal";
import { useGetUserByEmailQuery } from "@/features/user-slice";
import { Loader } from "lucide-react";

const ClaimedUsernameProcess = () => {
  // === user from clerk ===
  const { user } = useUser();
  const email = user && user?.emailAddresses?.[0].emailAddress;

  // === welcome modal state ===
  const [open, setOpen] = useState(false);

  // === get user by email api hook ===
  const { data, isLoading, refetch } = useGetUserByEmailQuery({ email });
  const userFromDb = data?.data;
  const isClaimedUsername = userFromDb?.is_claimed_username;

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
  if (userFromDb && isClaimedUsername === true) {
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
        email={email as string}
        refetchUserByEmail={refetch}
      />
    </>
  );
};

export default ClaimedUsernameProcess;
