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
      <div
        style={{
          fontSize: 48,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div tw="flex">
          <div tw="flex items-center justify-center gap-4">
            <img
              src={userData?.img?.url}
              alt={alt}
              tw="h-[100px] w-[100px] rounded-full object-cover"
            />
            <div tw="h-[100px] w-px bg-[#09090b]"></div>
            <h3 tw="text-5xl text-center text-[#09090b] font-medium">
              {userData?.name}
            </h3>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
