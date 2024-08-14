import React from "react";
import Container from "@/components/shared/container";
import ShineButton from "@/components/pages/home/shine-button";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-screen w-full grid place-items-center pt-24 pb-16">
      <Container className="grid lg:grid-cols-2 gap-8 md:gap-16">
        {/* left side */}
        <div className="w-full max-w-sm md:max-w-md lg:max-w-full mx-auto lg:mx-0 h-full flex flex-col gap-4 md:gap-8">
          <h1 className="font-satoshi text-center lg:text-start text-4xl md:text-5xl lg:text-6xl font-medium">
            Generate your website in minutes.
          </h1>
          <span className="grid gap-1">
            <p className="font-satoshi text-center lg:text-start font-medium text-lg md:text-xl">
              Streamline your digital identity.
            </p>
            <p className="text-center lg:text-start text-muted-foreground">
              Transform your rulink into a dynamic platform that highlights your
              brand, content, and projects—all within a sleek, user-friendly
              interface.
            </p>
          </span>
          <div className="w-full grid lg:grid-cols-2 gap-4 lg:gap-8">
            <ShineButton />
            <Button
              variant="ghost"
              asChild
              size="lg"
              className="hover:underline transition-all duration-300"
            >
              <Link href="/pricing">See Pricing</Link>
            </Button>
          </div>
        </div>
        {/* right side */}
        <div className="grid place-items-center w-full max-w-sm md:max-w-md lg:max-w-full mx-auto h-full relative">
          <Image
            src="/rulink-banner.png"
            alt="rulink banner"
            className="h-full w-full bg-cover rounded-3xl"
            height={1080}
            width={1080}
          />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
