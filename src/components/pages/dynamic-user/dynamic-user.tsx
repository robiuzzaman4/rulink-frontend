"use client";

import { Button } from "@/components/ui/button";
import { useGetUserByUsernameQuery } from "@/features/user-slice";
import { TUser } from "@/types";
import Link from "next/link";
import React from "react";

interface DynamicUserProps {
  username: string;
}

const DynamicUser = ({ username }: DynamicUserProps) => {
  // === get user data by username ===
  const { data, isLoading, isFetching, isError, error } =
    useGetUserByUsernameQuery({
      username,
    });
  const user: TUser = data?.data;

  // === handling error state ===
  if (isError) {
    const userFindError = error as any;
    const ERROR_MESSAGE = userFindError?.data?.message as any;
    return (
      <div className="h-screen w-full bg-background grid place-items-center z-50">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-3xl font-medium text-center font-satoshi">
            {ERROR_MESSAGE}!
          </h2>
          <Button asChild variant="link">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </div>
    );
  }

  // === handling loading state ===
  if (isLoading || isFetching) {
    return (
      <div className="h-screen w-full bg-background grid place-items-center z-50">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-medium">{user?.name}</h1>
    </div>
  );
};

export default DynamicUser;
