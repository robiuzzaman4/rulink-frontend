import { Button } from "@/components/ui/button";
import React from "react";

const HomePage = () => {
  return (
    <div className="grid gap-4 px-40 py-10">
      <h1 className="text-4xl font-medium">This is Home page</h1>
      <div className="flex items-center gap-4">
        <Button variant="rulink" className="min-w-64">Next</Button>
        <Button>Button</Button>
      </div>
    </div>
  );
};

export default HomePage;
