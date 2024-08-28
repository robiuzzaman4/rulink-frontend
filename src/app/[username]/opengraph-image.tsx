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
      <div tw="h-full w-full bg-zinc-100 flex flex-col items-center justify-center">
        <div tw="h-full flex items-center justify-center border-y border-y-zinc-200 mt-6">
          <div tw="px-4 sm:px-6 border-x h-full w-full flex flex-col items-center justify-center gap-6 mx-6 bg-white">
            <div tw="h-40 w-40 rounded-full grid place-items-center bg-white border border-zinc-200 shadow-rulink">
              <svg
                width="718"
                height="718"
                viewBox="0 0 718 718"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M359 692.334C543.095 692.334 692.333 543.095 692.333 359C692.333 174.905 543.095 25.667 359 25.667C174.905 25.667 25.6665 174.905 25.6665 359C25.6665 543.095 174.905 692.334 359 692.334Z"
                  stroke="#09090B"
                  stroke-width="50"
                />
              </svg>
            </div>

            <span tw="flex flex-col items-center justify-center gap-1">
              <h1 tw="text-5xl text-center text-zinc-950">{userData?.name}</h1>
              <h3 tw="text-2xl text-center text-zinc-800">
                {userData?.professional_title}
              </h3>
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
