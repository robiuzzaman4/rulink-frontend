// import { TransitionPanel } from "@/components/motion-primitives/transition-panel";
// import IconButton from "@/components/shared/icon-button";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent } from "@/components/ui/dialog";
// import { cn } from "@/lib/utils";
// import { Link } from "lucide-react";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import useMeasure from "react-use-measure";

// interface WelcomeModal {
//   open: boolean;
//   setOpen: (value: boolean) => void;
//   isClaimedUsername: boolean;
// }

// const WelcomeModal = ({ open, setOpen, isClaimedUsername }: WelcomeModal) => {
//   // === steps ===
//   const [step, setStep] = useState<"welcome" | "form" | "complete">("welcome");

//   // === handle modal close sate ===
//   const handleOpenChange = () => {
//     if (isClaimedUsername) {
//       setOpen(false);
//     }
//   };

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const [ref, bounds] = useMeasure();

//   // const handleSetActiveIndex = (newIndex: number) => {
//   //   setDirection(newIndex > activeIndex ? 1 : -1);
//   //   setActiveIndex(newIndex);
//   // };

//   // useEffect(() => {
//   //   if (activeIndex < 0) setActiveIndex(0);
//   //   if (activeIndex >= FEATURES.length) setActiveIndex(FEATURES.length - 1);
//   // }, [activeIndex]);

//   const variants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 364 : -364,
//       opacity: 0,
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction: number) => ({
//       zIndex: 0,
//       x: direction < 0 ? 364 : -364,
//       opacity: 0,
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//     }),
//   };

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogContent
//         isHideCloseButton={true}
//         className="w-full min-h-[64vh] max-h-fit max-w-md overflow-hidden"
//       >
//         <TransitionPanel
//           activeIndex={activeIndex}
//           variants={variants}
//           transition={{
//             x: { type: "spring", stiffness: 300, damping: 30 },
//             opacity: { duration: 0.2 },
//           }}
//         >
//           {step === "welcome" && (
// <div className="w-full h-full flex flex-col justify-between gap-6">
//   {/* top section */}
//   <div className="w-full h-full max-h-52">
//     <Image
//       src="/gradient.png"
//       alt="gradient"
//       height={720}
//       width={1080}
//       className="object-cover w-full h-full rounded-lg border border-border"
//     />
//   </div>

//   {/* middle section */}
//   <div className="grid gap-1">
//     <h2 className="text-xl font-medium text-center font-satoshi">
//       Welcome to Rulink 🎉
//     </h2>
//     <p className="text-center text-base text-muted-foreground font-satoshi">
//       I&apos;m glad to have you onboard. Let&apos;s get you up and
//       running.
//     </p>
//   </div>

//   {/* bottom section */}
//   <div className="grid gap-4">
//     <div className="w-full flex items-center justify-center gap-2">
//       <div
//         className={cn(
//           "w-2 h-2 rounded-full bg-muted-foreground/30",
//           {
//             "bg-foreground": step === "welcome",
//           }
//         )}
//       />
//       <div
//         className={cn(
//           "w-2 h-2 rounded-full bg-muted-foreground/30"
//         )}
//       />
//     </div>
//     <Button size="lg" onClick={() => setStep("form")}>
//       Next
//     </Button>
//   </div>
// </div>
//           )}

//           {step === "form" && (
// <div className="w-full h-full flex flex-col justify-between gap-6">
//   {/* top section */}
//   <div className="grid gap-4">
//     <div className="w-fit mx-auto">
//       <IconButton>
//         <Link size={20} />
//       </IconButton>
//     </div>
//     <div className="grid gap-1">
//       <h2 className="text-xl font-medium text-center font-satoshi">
//         Chose your username
//       </h2>
//       <p className="text-center text-base text-muted-foreground font-satoshi">
//         This will be your shareable rulink url.
//       </p>
//     </div>
//   </div>
//   {/* bottom section */}
//   <div className="grid gap-4">
//     <div className="w-full flex items-center justify-center gap-2">
//       <div
//         className={cn(
//           "w-2 h-2 rounded-full bg-muted-foreground/30"
//         )}
//       />
//       <div
//         className={cn(
//           "w-2 h-2 rounded-full bg-muted-foreground/30",
//           {
//             "bg-foreground": step === "form",
//           }
//         )}
//       />
//     </div>
//     <Button size="lg" onClick={() => setStep("complete")}>
//       Complete
//     </Button>
//   </div>
// </div>
//           )}

//           {step === "complete" && (
// <div className="w-full h-full flex flex-col justify-between gap-6">
//   <div className="w-full h-full max-h-52">
//     <Image
//       src="/gradient.png"
//       alt="gradient"
//       height={720}
//       width={1080}
//       className="object-cover w-full h-full rounded-lg border border-border"
//     />
//   </div>
//   <div className="grid gap-2">
//     <h2 className="text-xl font-medium text-center font-satoshi">
//       Welcome to Rulink 🎉
//     </h2>
//     <p className="text-center text-base text-muted-foreground font-satoshi">
//       I&apos;m glad to have you onboard. Let&apos;s get you up and
//       running.
//     </p>
//   </div>
//   {/* bottom section */}
//   <Button
//     size="lg"
//     onClick={() => {
//       setOpen(false);
//     }}
//   >
//     Continue to Dashboard
//   </Button>
// </div>
//           )}
//         </TransitionPanel>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default WelcomeModal;

import { TransitionPanel } from "@/components/motion-primitives/transition-panel";
import IconButton from "@/components/shared/icon-button";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { MOTION_SLIDES_TRANSITION, MOTION_SLIDES_VARIANTS } from "@/constants";
import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import React, { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import WelcomeCard from "@/components/pages/overview/welcome-card";
import UsernameInputCard from "@/components/pages/overview/username-input-card";
import UsernameClaimedSuccssCard from "./username-claimed-success-card";

interface WelcomeModal {
  open: boolean;
  setOpen: (value: boolean) => void;
  isClaimedUsername: boolean;
}

const WelcomeModal = ({ open, setOpen, isClaimedUsername }: WelcomeModal) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [ref] = useMeasure();

  // === handle next slide ===
  const handleNextSlide = () => {
    activeIndex === STEPS.length - 1
      ? null
      : handleSetActiveIndex(activeIndex + 1);
  };

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
      label: "take-username",
      content: <UsernameInputCard handleNextSlide={handleNextSlide} />,
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
