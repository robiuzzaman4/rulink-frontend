import { Button } from "@/components/ui/button";
import React from "react";

const HomePage = () => {
  return (
    <div className="grid gap-4 px-40 py-10">
      <h1 className="text-4xl font-medium text-rulink-primary">Hello Satoshi Font</h1>
      <h1 className="text-4xl font-medium font-serif ">Hello Playfair Display Font</h1>
      <div className="flex items-center gap-4">
        <Button variant="rulink" className="min-w-64">Next</Button>
        <Button>Button</Button>
      </div>
    </div>
  );
};

export default HomePage;
