"use client";

import Container from "@/components/shared/container";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { MOTION_LAYOUT_SLIDE_UP } from "@/constants/motion";

const PROCESS_STEPS = [
  {
    step_number: 1,
    title: "Claim Username",
    description:
      "Choose a unique username that reflects your brand identity and provides a seamless experience for your recruiters and potential clients.",
    image_url: "/images/username-card.png",
    image_alt: "username claiming",
  },
  {
    step_number: 2,
    title: "Setup Content",
    description:
      "Setup your content like profile, skills, experience, projects, social etc from dashboard. Then you are ready to start sharing your personal website with your friends, recruiters or potential clients.",
    image_url: "/images/dashboard-overview.png",
    image_alt: "dashboard overview",
  },
];

const Steps = () => {
  return (
    <div className="bg-grainy py-24 border-y border-y-border w-full grid gap-24">
      {PROCESS_STEPS.map((step) => (
        <Container key={step?.step_number} className="w-full grid gap-8">
          <span className="flex flex-col gap-4 max-w-md md:max-w-lg lg:max-w-full mx-auto lg:mx-0 w-full">
            <h1 className="text-3xl md:text-4xl font-bold font-satoshi text-center">
              <span className="text-rulink-primary">
                Step {step?.step_number}:
              </span>{" "}
              {step?.title}
            </h1>
            <p className="text-center text-muted-foreground max-w-xl mx-auto">
              {step?.description}
            </p>
          </span>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={MOTION_LAYOUT_SLIDE_UP}
            className="max-w-md md:max-w-lg lg:max-w-full mx-auto lg:mx-0 w-full"
          >
            <Image
              src={step?.image_url}
              alt={step?.image_alt}
              height={1080}
              width={1080}
              className="w-full max-w-4xl mx-auto h-full max-h-[600px] object-cover border-4 border-rulink-primary rounded-xl"
            />
          </motion.div>
        </Container>
      ))}
    </div>
  );
};

export default Steps;
