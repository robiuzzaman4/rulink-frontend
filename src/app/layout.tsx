import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Satoshi from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import StoreProvider from "@/provider/store-provider";
import { Toaster } from "sonner";
import {
  CheckCircledIcon,
  CrossCircledIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
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
  title: "Rulink",
  description: "Build your own site in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <StoreProvider>
        <html lang="en">
          <body
            className={`${satoshi.variable} ${plafair.variable} ${inter.variable} font-sans`}
          >
            {children}
            <Toaster
              position="top-center"
              icons={{
                success: (
                  <CheckCircledIcon className="text-rulink-primary h-5 w-5" />
                ),
                error: <CrossCircledIcon className="text-rose-600 h-5 w-5" />,
                info: <InfoCircledIcon className="text-orange-600 h-5 w-5" />,
              }}
              className="text-sm font-sans"
            />
          </body>
        </html>
      </StoreProvider>
    </ClerkProvider>
  );
}
