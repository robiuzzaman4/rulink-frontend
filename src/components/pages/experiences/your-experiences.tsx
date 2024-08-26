import React from "react";
import useUserByEmail from "@/hooks/useUserByEmail";
import { Loader } from "lucide-react";

const YourExperiences = () => {
  // === get user info from db ===
  const { isLoading, experiences } = useUserByEmail();

  console.log("experiences", experiences);
  

  return (
    <>
      <div className="w-full px-1 pb-1">
        <div className="w-full bg-background p-4 sm:p-6 rounded-xl border border-border shadow-sm flex flex-col gap-4">
          <h5 className="text-lg font-medium font-satoshi">Your Experiences</h5>
          {isLoading && (
            <>
              <Loader size={16} className="animate-spin w-fit mx-auto" />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default YourExperiences;
