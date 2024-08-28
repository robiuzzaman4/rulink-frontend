/* eslint-disable @next/next/no-img-element */
import { API_BASE_URL } from "@/constants/baseurl";
import { ImageResponse } from "next/og";

// Image metadata
export const alt = "User profile og";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: { username: string };
}) {
  const user = await fetch(`${API_BASE_URL}/users/username/${params.username}`);
  const response = await user.json();
  const userData = response?.data;

  return new ImageResponse(
    (
      <div tw="h-full w-full bg-white flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl text-center text-zinc-950">{userData?.name}</h1>
        <h3 className="text-xl text-center text-zinc-800">
          {userData?.professional_title}
        </h3>
      </div>
    ),
    {
      ...size,
    }
  );
}
