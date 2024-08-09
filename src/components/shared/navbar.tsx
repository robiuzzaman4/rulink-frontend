import React from "react";
import Container from "./container";
import Image from "next/image";
import Link from "next/link";
import Navlink from "./navlink";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

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
          <p className="font-bold text-base">Rulink</p>
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4">
            {links.map((link, i) => (
              <Navlink key={i} label={link.label} href={link.href} />
            ))}
          </div>
          <Button asChild>
            <Link href="/sign-up" className="flex items-center gap-1">
              <span>Get Started</span>
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
