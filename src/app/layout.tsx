import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Satoshi from "next/font/local";
import "./globals.css";


const plafair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const satoshi = Satoshi({
  src: [
    {
      path: "../../public/fonts/satoshi/Satoshi-Light.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Medium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Bold.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Black.otf",
      weight: "900",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next app",
  description: "Next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${plafair.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
