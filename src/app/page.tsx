import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="grid gap-4 container p-4">
      <div className="flex items-center gap-1">
        <Image
          src="/icon.png"
          alt="icon"
          height={720}
          width={720}
          className="h-6 w-6"
        />
        <p className="text-rulink-primary-dark font-bold text-base">Rulink</p>
      </div>
      <h1 className="text-4xl font-medium text-rulink-primary-dark">
        Hello Satoshi Font
      </h1>
      <h1 className="text-4xl font-medium font-serif  text-rulink-primary">
        Hello Playfair Display Font
      </h1>
      <p className="text-base font-medium  text-secondary-foreground">
        Hello Playfair Display Font
      </p>
      <p className="text-base font-medium  text-muted-foreground">
        Hello Playfair Display Font
      </p>
      <div className="flex items-center gap-4">
        <Button variant="rulink" className="min-w-84">
          Next
        </Button>
        <Button>Next</Button>
        <Button variant="rulink">Complete</Button>
      </div>
    </div>
  );
};

export default HomePage;
