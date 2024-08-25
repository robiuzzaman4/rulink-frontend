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
          background:
            "radial-gradient(circle at top, rgba(255, 255, 255, 1) 0%, rgba(113, 113, 122, 1) 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div tw="flex">
          <div tw="h-full w-full flex flex-col items-center justify-center gap-4">
            <img
              src={userData?.img?.url}
              alt={alt}
              tw="h-[100px] w-[100px] rounded-full object-cover"
            />
            <span tw="flex flex-col items-center gap-2">
              <h3 tw="text-5xl text-center text-[#09090b] font-medium">
                {userData?.name}
              </h3>
              <h5 tw="text-4xl text-center text-[#27272A] font-medium">
                @{userData?.username}
              </h5>
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
