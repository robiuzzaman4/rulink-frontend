import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TUser } from "@/types";
import { ArrowUpRight, Copy } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MOTION_BLUR_IN } from "@/constants/motion";
import SectionTitle from "./section-title";

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
    <div className="flex flex-col gap-8 p-2">
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
        <div className="flex flex-col items-start gap-4 sm:col-span-2 order-2 sm:order-1">
          <span className="grid gap-2">
            <motion.h1
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
              variants={MOTION_BLUR_IN}
              className="text-3xl font-bold"
            >
              {user?.name}
            </motion.h1>
            <p className="text-sm font-normal text-muted-foreground">
              {user?.bio}
            </p>
          </span>
          <div className="flex items-center gap-4">
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
        <div className="h-40 w-40 grid place-items-center rounded-full mx-auto order-1 sm:order-2 p-2">
          <Avatar className="h-full w-full">
            <AvatarImage
              src={user?.img?.url}
              alt={`${user?.username}'s picture`}
            />
            <AvatarFallback className="uppercase text-3xl font-medium">
              N/A
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default UserHero;
