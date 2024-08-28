"use client";

import React from "react";
import Container from "@/components/shared/container";
import ShineButton from "@/components/pages/home/shine-button";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { motion } from "framer-motion";
import { MOTION_LAYOUT_FADE_UP, MOTION_SCALE_UP } from "@/constants/motion";

const Hero = () => {
  return (
    <div className="min-h-screen w-full grid place-items-center pt-24 pb-16 relative overflow-hidden bg-pattern">
      <Container className="grid lg:grid-cols-2 gap-8 md:gap-16 py-16 sm:py-8 md:py-4">
        {/* left side */}
        <div className="w-full max-w-md md:max-w-lg lg:max-w-full mx-auto lg:mx-0 h-full flex flex-col justify-center gap-4 md:gap-8">
          <TextEffect
            per="word"
            as="h3"
            preset="blur"
            className="font-satoshi text-center lg:text-start text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            Build your personal website in minutes.
          </TextEffect>
          <motion.span
            initial="hidden"
            animate="show"
            variants={MOTION_LAYOUT_FADE_UP}
            className="grid gap-1"
          >
            <p className="font-satoshi text-center lg:text-start font-medium text-lg md:text-xl">
              Streamline your digital identity.
            </p>
            <p className="text-center lg:text-start text-muted-foreground">
              Transform your rulink into a dynamic platform that highlights your
              brand, content, and projects—all within a sleek, user-friendly
              interface.
            </p>
          </motion.span>
          <motion.div
            initial="hidden"
            animate="show"
            variants={MOTION_LAYOUT_FADE_UP}
            className="w-full grid lg:grid-cols-2 gap-4 lg:gap-8"
          >
            <ShineButton />
            <Button
              variant="secondary"
              asChild
              size="lg"
              className="hover:underline transition-all duration-300"
            >
              <Link href="/pricing">See Pricing</Link>
            </Button>
          </motion.div>
        </div>
        {/* right side */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={MOTION_SCALE_UP}
          className="grid place-items-center w-full max-w-md md:max-w-lg lg:max-w-full mx-auto h-full relative"
        >
          <div className="bg-transparent">
            <Image
              src="/rulink_banner.png"
              alt="rulink banner"
              className="h-[300px] w-[300px] sm:h-[380px] sm:w-[380px] md:h-[400px] md:w-[400px] lg:h-[420px] lg:w-[420px] aspect-square rounded-xl shadow-2xl"
              height={1080}
              width={1080}
              quality={80}
            />
          </div>
          <Link
            href="https://rulink.vercel.app/me/robi"
            target="_blank"
            className="text-xs text-muted-foreground mt-1 hover:underline"
          >
            See Demo
          </Link>
        </motion.div>
      </Container>

      {/* gradients */}
      {/* <div className="absolute top-10 left-10 h-64 w-80 lg:w-96  rotate-45 rounded-xl bg-gradient-to-tr from-rose-500 to-indigo-800 filter blur-3xl opacity-20"></div> */}
      {/* <div className="absolute -bottom-4 -right-4 h-64 w-80 lg:w-96  rotate-45 rounded-xl bg-gradient-to-r from-rose-500 to-indigo-800 filter blur-3xl opacity-20"></div> */}
    </div>
  );
};

export default Hero;
