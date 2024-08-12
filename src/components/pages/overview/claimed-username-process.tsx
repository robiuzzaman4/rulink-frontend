"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import WelcomeModal from "@/components/pages/overview/welcome-modal";
import { useGetUserByEmailQuery } from "@/features/user-slice";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ClaimedUsernameProcess = () => {
  // === user from cl ===
  const { user } = useUser();
  const email = user?.emailAddresses?.[0].emailAddress;

  // === welcome modal state ===
  const [open, setOpen] = useState(false);

  // === get user by email api hook ===
  const { data, isLoading } = useGetUserByEmailQuery({ email });
  const isClaimedUsername = data?.data?.is_claimed_username;

  // === set modal state ===
  useEffect(() => {
    if (!isLoading && data && isClaimedUsername === false) {
      setOpen(true);
    }
  }, [isLoading, data, isClaimedUsername]);

  if (isLoading) {
    return (
      <div className="text-xl font-medium text-center w-full h-[calc(100vh-160px)] grid place-items-center text-foreground">
        <LoaderCircle size={24} className="animate-spin" />
      </div>
    );
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <WelcomeModal
        open={open}
        setOpen={setOpen}
        isClaimedUsername={isClaimedUsername}
      />
    </>
  );
};

export default ClaimedUsernameProcess;
