import IconButton from "@/components/shared/icon-button";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface WelcomeModal {
  open: boolean;
  setOpen: (value: boolean) => void;
  isClaimedUsername: boolean;
}

const WelcomeModal = ({ open, setOpen, isClaimedUsername }: WelcomeModal) => {
  // === steps ===
  const [step, setStep] = useState<"welcome" | "form" | "complete">("welcome");

  // === handle modal close sate ===
  const handleOpenChange = () => {
    if (isClaimedUsername) {
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        isHideCloseButton={true}
        className="w-full min-h-[64vh] max-h-fit max-w-md"
      >
        {step === "welcome" && (
          <div className="w-full h-full flex flex-col justify-between gap-6">
            {/* top section */}
            <div className="w-full h-full max-h-52">
              <Image
                src="/gradient.png"
                alt="gradient"
                height={720}
                width={1080}
                className="object-cover w-full h-full rounded-lg border border-border"
              />
            </div>

            {/* middle section */}
            <div className="grid gap-1">
              <h2 className="text-xl font-medium text-center font-satoshi">
                Welcome to Rulink 🎉
              </h2>
              <p className="text-center text-base text-muted-foreground font-satoshi">
                I&apos;m glad to have you onboard. Let&apos;s get you up and
                running.
              </p>
            </div>

            {/* bottom section */}
            <div className="grid gap-4">
              <div className="w-full flex items-center justify-center gap-2">
                <div
                  className={cn("w-2 h-2 rounded-full bg-muted-foreground/30", {
                    "bg-foreground": step === "welcome",
                  })}
                />
                <div
                  className={cn("w-2 h-2 rounded-full bg-muted-foreground/30")}
                />
              </div>
              <Button size="lg" onClick={() => setStep("form")}>
                Next
              </Button>
            </div>
          </div>
        )}
        {step === "form" && (
          <div className="w-full h-full flex flex-col justify-between gap-6">
            {/* top section */}
            <div className="grid gap-4">
              <div className="w-fit mx-auto">
                <IconButton>
                  <Link size={20} />
                </IconButton>
              </div>
              <div className="grid gap-1">
                <h2 className="text-xl font-medium text-center font-satoshi">
                  Chose your username
                </h2>
                <p className="text-center text-base text-muted-foreground font-satoshi">
                  This will be your shareable rulink url.
                </p>
              </div>
            </div>
            {/* bottom section */}
            <div className="grid gap-4">
              <div className="w-full flex items-center justify-center gap-2">
                <div
                  className={cn("w-2 h-2 rounded-full bg-muted-foreground/30")}
                />
                <div
                  className={cn("w-2 h-2 rounded-full bg-muted-foreground/30", {
                    "bg-foreground": step === "form",
                  })}
                />
              </div>
              <Button size="lg" onClick={() => setStep("complete")}>
                Complete
              </Button>
            </div>
          </div>
        )}
        {step === "complete" && (
          <div className="w-full h-full flex flex-col justify-between gap-6">
            <div className="w-full h-full max-h-52">
              <Image
                src="/gradient.png"
                alt="gradient"
                height={720}
                width={1080}
                className="object-cover w-full h-full rounded-lg border border-border"
              />
            </div>
            <div className="grid gap-2">
              <h2 className="text-xl font-medium text-center font-satoshi">
                Welcome to Rulink 🎉
              </h2>
              <p className="text-center text-base text-muted-foreground font-satoshi">
                I&apos;m glad to have you onboard. Let&apos;s get you up and
                running.
              </p>
            </div>
            {/* bottom section */}
            <Button
              size="lg"
              onClick={() => {
                setOpen(false);
              }}
            >
              Continue to Dashboard
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeModal;
