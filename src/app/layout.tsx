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
import { siteConfig } from "@/config/site";

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
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "Md. Robi-uz-zaman Ruhan",
      url: "https://github.com/robiuzzaman4",
    },
  ],
  creator: "@robiuzzaman4",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    // title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
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
    title: siteConfig.name,
    description: siteConfig.description,
    // images: [siteConfig.ogImage],
    creator: "@robiuzzaman4",
  },
  icons: {
    icon: "/logo-zinc.png",
    // shortcut: "/favicon-16x16.png",
    // apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <StoreProvider>
        <html lang="en" className="scroll-smooth">
          <head>
            <link rel="logo icon" href="/logo-zinc.png" type="image/png" />
          </head>
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
                error: (
                  <CrossCircledIcon className="text-rulink-danger h-5 w-5" />
                ),
                info: <InfoCircledIcon className="text-rulink-info h-5 w-5" />,
              }}
              className="text-sm font-sans"
            />
          </body>
        </html>
      </StoreProvider>
    </ClerkProvider>
  );
}
