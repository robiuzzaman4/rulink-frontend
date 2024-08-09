import React from "react";
import Container from "../shared/container";
import ShineButton from "./shine-button";
import Link from "next/link";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full grid place-items-center">
      <Container className="grid md:grid-cols-2 gap-8 md:gap-16">
        {/* left side */}
        <div className="w-full h-full flex flex-col gap-4 md:gap-8">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Generate your website in minutes.
          </h1>
          <span className="grid gap-1">
            <p className="font-medium text-lg md:text-xl">
              Streamline your digital identity.
            </p>
            <p className="text-muted-foreground">
              Transform your rulink into a dynamic platform that highlights your
              brand, content, and projects—all within a sleek, user-friendly
              interface.
            </p>
          </span>
          <div className="w-full grid md:grid-cols-2 gap-4 md:gap-8">
            <ShineButton />
            <Button variant="ghost" asChild size="lg">
              <Link href="/pricing">See Pricing</Link>
            </Button>
          </div>
        </div>
        {/* right side */}
        <div className="bg-secondary w-full h-full">Right Side</div>
      </Container>
    </div>
  );
};

export default Hero;
