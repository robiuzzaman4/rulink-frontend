import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TUser } from "@/types";
import { ArrowUpRight, Copy } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import SectionTitle from "./section-title";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { motion } from "framer-motion";
import { MOTION_SCALE_UP } from "@/constants/motion";

interface UserHeroProps {
  user: TUser;
}
const UserHero = ({ user }: UserHeroProps) => {
  // === copy to clipboard state and function ===
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(user?.email as string);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-col gap-8 p-2 sm:p-6">
      {/* professional_title & open_to_work */}
      <div className="flex items-center justify-between gap-2">
        <SectionTitle title={user?.professional_title as string} />
        <div className="flex items-center gap-2 text-emerald-500 bg-emerald-50 px-1.5 py-1.5 sm:px-3 rounded-full">
          <div className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
          <p className="text-xs font-medium uppercase hidden sm:block">
            {user?.open_to_work ? "open to work" : ""}
          </p>
        </div>
      </div>

      {/* name, bio, img */}
      <div className="grid sm:grid-cols-3 gap-4">
        {/* left section */}
        <div className="flex flex-col items-start justify-center gap-4 sm:col-span-2 order-2 sm:order-1">
          <span className="grid gap-2">
            <TextEffect
              per="word"
              as="h3"
              preset="blur"
              className="text-3xl font-bold text-center sm:text-start"
            >
              {user?.name as string}
            </TextEffect>
            <p className="text-sm text-center sm:text-start font-normal text-muted-foreground">
              {user?.bio}
            </p>
          </span>
          <div className="flex items-center justify-center sm:justify-start w-full gap-4">
            {user?.resume_url && (
              <Button asChild>
                <Link href={user?.resume_url as string} target="_blank">
                  View Resume
                  <ArrowUpRight className="ml-2" size={16} />
                </Link>
              </Button>
            )}
            <Button variant="outline" onClick={handleCopy}>
              {copied ? "Copied" : "Copy Email"}
              <Copy className="ml-2" size={14} />
            </Button>
          </div>
        </div>

        {/* right section */}
        <motion.div
          variants={MOTION_SCALE_UP}
          className="h-40 w-40 grid place-items-center rounded-full mx-auto order-1 sm:order-2 p-2"
        >
          <Avatar className="h-full w-full">
            <AvatarImage
              src={user?.img?.url}
              alt={`${user?.username}'s picture`}
            />
            <AvatarFallback className="uppercase text-3xl font-medium">
              N/A
            </AvatarFallback>
          </Avatar>
        </motion.div>
      </div>
    </div>
  );
};

export default UserHero;
