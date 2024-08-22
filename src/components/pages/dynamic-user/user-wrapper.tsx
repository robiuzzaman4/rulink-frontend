"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { MOTION_LAYOUT_FADE_UP } from "@/constants/motion";

const UserWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={MOTION_LAYOUT_FADE_UP}
      className="w-full bg-background rounded-xl border border-border shadow p-2 mt-4 grid gap-2"
    >
      {children}
    </motion.div>
  );
};

export default UserWrapper;
