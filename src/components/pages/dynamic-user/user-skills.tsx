import React from "react";
import UserSectionTitle from "@/components/pages/dynamic-user/user-section-title";
import { motion } from "framer-motion";
import {
  MOTION_PULL_UP_CONTAINER,
  MOTION_PULL_UP_ITEM,
} from "@/constants/motion";

interface UserSkillsProps {
  skills: string[];
}

const UserSkills = ({ skills }: UserSkillsProps) => {
  return (
    <div className="bg-secondary rounded-md p-4 sm:p-6 flex flex-col gap-4">
      <div className="w-full flex items-center justify-between gap-2">
        <UserSectionTitle title="Skills" />
      </div>
      <motion.div
        variants={MOTION_PULL_UP_CONTAINER}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-2"
      >
        {skills?.map((skill: string, index: number) => (
          <motion.div
            variants={MOTION_PULL_UP_ITEM}
            key={index}
            className="px-2 py-1 rounded-md bg-background border border-border text-sm font-medium text-muted-foreground shadow-sm"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default UserSkills;
