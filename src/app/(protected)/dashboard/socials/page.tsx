import ManageSocials from "@/components/pages/socials/manage-socials";
import React from "react";

export const metadata = {
  title: "Rulink - Manage Socials",
  openGraph: {
    title: "Rulink - Manage Socials",
  },
};

const SocialsPage = () => {
  return (
    <div className="w-full min-h-[calc(100vh-56px)] mt-14 px-4 lg:px-6 py-14 grid place-items-center">
      <ManageSocials />
    </div>
  );
};

export default SocialsPage;
