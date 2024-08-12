import React, { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import confetti from "canvas-confetti";
import { cn } from "@/lib/utils";
import { MOTION_SLIDES_TRANSITION, MOTION_SLIDES_VARIANTS } from "@/constants";
import { TransitionPanel } from "@/components/motion-primitives/transition-panel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import WelcomeCard from "@/components/pages/overview/welcome-card";
import UsernameInputCard from "@/components/pages/overview/username-input-card";
import UsernameClaimedSuccssCard from "@/components/pages/overview/username-claimed-success-card";
import { useCheckUsernameAvailabilityQuery } from "@/features/user-slice";
import useDebounce from "@/hooks/useDebounce";

interface WelcomeModal {
  open: boolean;
  setOpen: (value: boolean) => void;
  isClaimedUsername: boolean;
}

const WelcomeModal = ({ open, setOpen, isClaimedUsername }: WelcomeModal) => {
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

  console.log("data", checkUsernameResponse);

  // === handle next slide ===
  const handleNextSlide = () => {
    activeIndex === STEPS.length - 1
      ? null
      : handleSetActiveIndex(activeIndex + 1);
  };

  // === handle claim username ===
  const handleClaimUsername = () => {
    // handleNextSlide();

    confetti({
      particleCount: 200,
      spread: 140,
      origin: { y: 0.6 },
    });
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
    setActiveIndex(0);
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
        />
      ),
    },
    {
      label: "success",
      content: (
        <UsernameClaimedSuccssCard
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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
