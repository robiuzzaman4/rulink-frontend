"use client";

import React, { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import confetti from "canvas-confetti";
import { cn } from "@/lib/utils";
import { MOTION_SLIDES_TRANSITION, MOTION_SLIDES_VARIANTS } from "@/constants/motion";
import { TransitionPanel } from "@/components/motion-primitives/transition-panel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import WelcomeCard from "@/components/pages/overview/welcome-card";
import UsernameInputCard from "@/components/pages/overview/username-input-card";
import UsernameSuccssCard from "@/components/pages/overview/username-success-card";
import {
  useCheckUsernameAvailabilityQuery,
  useCreateUserMutation,
} from "@/features/user-slice";
import useDebounce from "@/hooks/useDebounce";
import { toast } from "sonner";

interface WelcomeModal {
  open: boolean;
  setOpen: (value: boolean) => void;
  isClaimedUsername: boolean;
  email: string;
  refetchUserByEmail: () => void;
}

const WelcomeModal = ({
  open,
  setOpen,
  isClaimedUsername,
  email,
  refetchUserByEmail,
}: WelcomeModal) => {
  // === animation states ===
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [ref] = useMeasure();

  // === username input states ===
  const [isAvailableUsername, setIsAvailableUsername] = useState<
    null | boolean
  >(null);
  const [username, setUsername] = useState("");
  const debouncedUsername = useDebounce(username);

  // === check username api hooks ===
  const {
    data: checkUsernameResponse,
    isLoading: isUsernameLoading,
    isFetching: isUsernameFetching,
  } = useCheckUsernameAvailabilityQuery({
    username: debouncedUsername,
  });

  // === create user api mutation hook ===
  const [createUser, { isLoading: isCreateUserLoading }] =
    useCreateUserMutation();

  // === handle next slide ===
  const handleNextSlide = () => {
    activeIndex === STEPS.length - 1
      ? null
      : handleSetActiveIndex(activeIndex + 1);
  };

  // === handle claim username ===
  const handleClaimUsername = async () => {
    const payload = {
      email,
      username: debouncedUsername,
    };
    try {
      const res: any = await createUser({ payload });
      console.log("res", res);
      if (res?.data?.success) {
        // generate confetti
        confetti({
          particleCount: 200,
          spread: 140,
          origin: { y: 0.6 },
        });
        // show toast
        toast.success("Claimed username and profile created successfully!");
        // go to next slide
        handleNextSlide();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  // === keep username on state ===
  useEffect(() => {
    if (checkUsernameResponse) {
      if (checkUsernameResponse?.message === "Username is already taken") {
        setIsAvailableUsername(false);
      } else if (checkUsernameResponse?.message === "Username is available") {
        setIsAvailableUsername(true);
      } else {
        setIsAvailableUsername(null);
      }
    }
  }, [checkUsernameResponse, checkUsernameResponse?.message]);

  // === handle continue to dashboard ===
  const handleContinueToDashboard = () => {
    setOpen(false);
    // setActiveIndex(0);
    refetchUserByEmail();
  };

  // === steps ===
  const STEPS = [
    {
      label: "welcome",
      content: <WelcomeCard handleNextSlide={handleNextSlide} />,
    },
    {
      label: "claim-username",
      content: (
        <UsernameInputCard
          username={username}
          setUsername={setUsername}
          isAvailableUsername={isAvailableUsername}
          isUsernameLoading={isUsernameLoading || isUsernameFetching}
          handleClaimUsername={handleClaimUsername}
          isCreateUserLoading={isCreateUserLoading}
        />
      ),
    },
    {
      label: "success",
      content: (
        <UsernameSuccssCard
          handleContinueToDashboard={handleContinueToDashboard}
        />
      ),
    },
  ];

  // === handle active index ===
  const handleSetActiveIndex = (newIndex: number) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };
  useEffect(() => {
    if (activeIndex < 0) setActiveIndex(0);
    if (activeIndex >= STEPS.length) setActiveIndex(STEPS.length - 1);
  }, [activeIndex, STEPS.length]);

  //  === handling open modal ===
  const handleOnChangeModal = () => {
    if (isClaimedUsername === false || isClaimedUsername === undefined) {
      setOpen(true);
    }
  };
  return (
    <Dialog open={open} onOpenChange={handleOnChangeModal}>
      <DialogContent
        isHideCloseButton={true}
        className="overflow-hidden max-w-[400px] w-full"
      >
        <DialogTitle className="sr-only">Claim your username</DialogTitle>
        <TransitionPanel
          activeIndex={activeIndex}
          variants={MOTION_SLIDES_VARIANTS}
          transition={MOTION_SLIDES_TRANSITION}
          custom={direction}
        >
          {STEPS.map((step) => (
            <div key={step.label} ref={ref} className="w-full h-[400px]">
              {step.content}
            </div>
          ))}
        </TransitionPanel>

        {/* Pagination or navigation dots */}
        <div className="w-full flex items-center justify-center gap-2 mt-auto pt-2">
          {STEPS.map((_, index) => (
            <div
              key={index}
              className={cn("w-2 h-2 rounded-full bg-muted-foreground/30", {
                "bg-foreground": index === activeIndex,
              })}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeModal;
