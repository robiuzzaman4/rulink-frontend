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
          fontSize: "48px",
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "32px",
            }}
          >
            <img
              src={userData?.img?.url}
              alt={alt}
              style={{
                height: "200px",
                width: "200px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <h3
              style={{
                fontSize: "5rem",
                textAlign: "center",
                color: "#09090b",
                fontWeight: "500",
              }}
            >
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
