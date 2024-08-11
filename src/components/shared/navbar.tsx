"use client";

import React from "react";
import Container from "./container";
import Image from "next/image";
import Link from "next/link";
import Navlink from "./navlink";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useUser } from "@clerk/nextjs";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Sign in",
    href: "/sign-in",
  },
];

const Navbar = () => {
  const { user, isLoaded } = useUser();

  return (
    <nav className="w-full fixed top-0 bg-background/40 backdrop-blur-xl border-b border-b-border z-20">
      <Container className="flex items-center justify-between py-4">
        {/* lgoo */}
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/logo-zinc.png"
            alt="logo"
            height={720}
            width={720}
            className="h-6 w-6"
          />
          <p className="font-bold text-base font-satoshi">Rulink</p>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-6">
            {links.map((link, i) => (
              <Navlink
                key={i}
                label={link.label}
                href={link.href}
                user={isLoaded && user}
              />
            ))}
          </div>
          {isLoaded && user ? (
            <Button asChild>
              <Link href="/dashboard" className="flex items-center gap-1">
                <span>Dashboard</span>
                <ArrowRight size={16} />
              </Link>
            </Button>
          ) : (
            <Button asChild>
              <Link href="/sign-up" className="flex items-center gap-1">
                <span>Get Started</span>
                <ArrowRight size={16} />
              </Link>
            </Button>
          )}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
