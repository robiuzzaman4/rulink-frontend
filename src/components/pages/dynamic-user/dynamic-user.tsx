"use client";

import { Button } from "@/components/ui/button";
import { useGetUserByUsernameQuery } from "@/features/user-slice";
import { TProject, TSocial, TUser } from "@/types";
import Link from "next/link";
import React from "react";
import UserNavbar from "@/components/pages/dynamic-user/user-navbar";
import UserWrapper from "@/components/pages/dynamic-user/user-wrapper";
import UserHero from "@/components/pages/dynamic-user/user-hero";
import UserSkills from "@/components/pages/dynamic-user/user-skills";
import UserSocials from "@/components/pages/dynamic-user/user-socials";
import UserProjects from "@/components/pages/dynamic-user//user-projects";

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
    <section className="w-full max-w-xl mx-auto relative font-satoshi p-4">
      {/* navbar */}
      <UserNavbar user={user} />
      {/* wrapper */}
      <UserWrapper>
        {/* hero section */}
        <UserHero user={user} />
        {/* skills section */}
        {user?.skills && user?.skills?.length > 0 && (
          <UserSkills skills={user?.skills as string[]} />
        )}
        {/* projects section */}
        {user?.projects && user?.projects?.length > 0 && (
          <UserProjects projects={user?.projects as TProject[]} />
        )}
        {/* socials section */}
        {user?.socials && user?.socials?.length > 0 && (
          <UserSocials socials={user?.socials as TSocial[]} />
        )}
      </UserWrapper>
    </section>
  );
};

export default DynamicUser;
