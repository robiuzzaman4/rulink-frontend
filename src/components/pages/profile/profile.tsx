import React from "react";
import ManageProfileForm from "@/components/pages/profile/manage-profile-from";

const Profile = () => {
  return (
    <div className="w-full min-h-[calc(100vh-160px)] grid place-items-center py-16 sm:py-8 md:py-4">
      <ManageProfileForm/>
    </div>
  );
};

export default Profile;
