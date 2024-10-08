"use client";

import { useGetUserByEmailQuery } from "@/features/user-slice";
import { TUser } from "@/types";
import { useUser } from "@clerk/nextjs";

const useUserByEmail = () => {
  // === user from clerk ===
  const { user } = useUser();
  const email = user && user?.emailAddresses?.[0].emailAddress;

  // === get user by email api hook ===
  const { data, isLoading, refetch, isFetching } = useGetUserByEmailQuery({
    email,
  });
  const userFromDb: TUser = data?.data;

  return {
    // api loading and refetch
    isLoading,
    isFetching,
    refetch,

    // email from clerk
    clerk_email: email,

    // user info from database
    id: userFromDb?._id,
    name: userFromDb?.name,
    bio: userFromDb?.bio,
    email: userFromDb?.email,
    username: userFromDb?.username,
    isClaimedUsername: userFromDb?.is_claimed_username,
    role: userFromDb?.role,
    open_to_work: userFromDb?.open_to_work,
    professional_title: userFromDb?.professional_title,
    skills: userFromDb?.skills,
    socials: userFromDb?.socials,
    img: userFromDb?.img,
    resume_url: userFromDb?.resume_url,
    projects: userFromDb?.projects,
    experiences: userFromDb?.experiences,
  };
};

export default useUserByEmail;
