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
      className="w-full bg-background rounded-xl p-4 border border-border shadow"
    >
      {children}
    </motion.div>
  );
};

export default Wrapper;
