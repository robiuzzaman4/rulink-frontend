import ManageProfileForm from "@/components/pages/profile/manage-profile-from";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Manage Profile",
  description: "Manage your profile",
};

const ProfilePage = () => {
  return (
    <div className="w-full min-h-[calc(100vh-56px)] mt-14 px-4 lg:px-6 py-14 grid place-items-center">
      <ManageProfileForm />
    </div>
  );
};

export default ProfilePage;
