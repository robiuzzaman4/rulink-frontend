"use client";

import Container from "@/components/shared/container";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  MOTION_LAYOUT_FADE_UP,
  MOTION_LAYOUT_SLIDE_UP,
  MOTION_SCALE_UP,
} from "@/constants/motion";

const StepOne = () => {
  return (
    <div className="bg-grainy py-24 border-y border-y-border w-full">
      <Container className="w-full grid gap-8">
        <span className="grid gap-4 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold font-satoshi text-center">
            <span className="text-rulink-primary">Step 1:</span> Claim Username
          </h1>
          <p className="text-center text-muted-foreground">
            Choose a unique username that reflects your brand identity and
            provides a seamless experience for your recruiters and potential
            clients.
          </p>
        </span>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={MOTION_LAYOUT_SLIDE_UP}
        >
          <Image
            src="/images/username-card.png"
            alt="username claiming"
            height={1080}
            width={1080}
            className="w-full max-w-4xl mx-auto h-full max-h-[600px] object-cover border-4 border-rulink-primary rounded-xl"
          />
        </motion.div>
      </Container>
    </div>
  );
};

export default StepOne;
