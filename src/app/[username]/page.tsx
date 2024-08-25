import DynamicUser from "@/components/pages/dynamic-user/dynamic-user";
import { siteConfig } from "@/config/site";
import { API_BASE_URL } from "@/constants/baseurl";
import { Metadata } from "next";
import React from "react";

// === generate dynamic metadata ===
export async function generateMetadata({
  params,
}: {
  params: {
    username: string;
  };
}): Promise<Metadata> {
  const { username } = params;
  const user = await fetch(`${API_BASE_URL}/users/username/${username}`);
  const response = await user.json();
  const userData = response?.data;

  if (!userData) {
    return {};
  }

  return {
    title:
      `${userData?.name} - ${userData?.professional_title}` || "User profile",
    description: userData?.bio || "",
    openGraph: {
      title:
        `${userData?.name} - ${userData?.professional_title}` || "User profile",
      description: userData?.bio || "",
      type: "profile",
      url: `https://rulink.vercel.app/${userData?.username}`,
      // images: [
      //   {
      //     url: siteConfig.ogImage,
      //     width: 1200,
      //     height: 630,
      //     alt: siteConfig.name,
      //   },
      // ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        `${userData?.name} - ${userData?.professional_title}` || "User profile",
      description: userData?.bio || "",
      // images: [siteConfig.ogImage],
      creator: "@robiuzzaman4",
    },
  };
}

const SingleUserPage = ({ params }: { params: { username: string } }) => {
  return (
    <div className="min-h-screen bg-secondary w-full">
      <DynamicUser username={params.username} />
    </div>
  );
};

export default SingleUserPage;
