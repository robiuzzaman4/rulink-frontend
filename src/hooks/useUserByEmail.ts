"use client";

import { useGetUserByEmailQuery } from "@/features/user-slice";
import { useUser } from "@clerk/nextjs";

const useUserByEmail = () => {
  // === user from clerk ===
  const { user } = useUser();
  const email = user && user?.emailAddresses?.[0].emailAddress;

  // === get user by email api hook ===
  const { data, isLoading, refetch } = useGetUserByEmailQuery({ email });
  const userFromDb = data?.data;

  return {
    // api loading and refetch
    isLoading,
    refetch,

    // email from clerk
    clerk_email: email,

    // user info from database
    email: userFromDb?.email,
    username: userFromDb?.username,
    isClaimedUsername: userFromDb?.is_claimed_username,
    role: userFromDb?.role,
    open_to_work: userFromDb?.open_to_work,
    skills: userFromDb?.skills,
    socials: userFromDb?.socials,
    img: userFromDb?.img
  };
};

export default useUserByEmail;
