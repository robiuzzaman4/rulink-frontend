import React from "react";
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-68px)] mt-[68px]">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
