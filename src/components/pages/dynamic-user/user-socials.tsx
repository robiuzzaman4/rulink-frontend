import React from "react";
import SectionTitle from "@/components/pages/dynamic-user/section-title";
import { TSocial, TSocialPlatform } from "@/types";
import Image from "next/image";
import { getIconByPlatform } from "@/utils/getIconByPlatform";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MOTION_PULL_UP_CONTAINER,
  MOTION_PULL_UP_ITEM,
} from "@/constants/motion";

interface UserSocialsProps {
  socials: TSocial[];
}

const UserSocials = ({ socials }: UserSocialsProps) => {
  return (
    <div className="bg-secondary rounded-md p-4 sm:p-6 flex flex-col gap-4">
      <div className="w-full flex items-center justify-between gap-2">
        <SectionTitle title="Socials" />

        <motion.div
          variants={MOTION_PULL_UP_CONTAINER}
          initial="hidden"
          animate="show"
          className="flex items-center gap-2"
        >
          {socials?.map((item, index) => {
            // generate icon src
            const { src, alt } = getIconByPlatform(
              item?.platform as TSocialPlatform
            );
            return (
              <motion.div key={index} variants={MOTION_PULL_UP_ITEM}>
                <Link
                  href={item?.url}
                  className="h-9 w-9 rounded-full grid place-items-center bg-background border border-border shadow-sm"
                  target="_blank"
                >
                  <Image
                    src={src}
                    alt={alt}
                    height={200}
                    width={200}
                    className="w-full h-full object-cover p-2 opacity-70"
                  />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default UserSocials;
