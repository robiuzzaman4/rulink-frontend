"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/constants/motion";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={FADE_UP_ANIMATION_VARIANTS}
      className="w-full bg-background rounded-xl border border-border shadow p-2 mt-4 grid gap-2"
    >
      {children}
    </motion.div>
  );
};

export default Wrapper;
