import React from "react";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-68px)] mt-[68px]">
      <SignIn />
    </div>
  );
};

export default SignInPage;
