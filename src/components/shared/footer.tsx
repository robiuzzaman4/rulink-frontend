import React from "react";
import Container from "@/components/shared/container";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-background w-full py-12">
      <Container className="flex flex-col md:flex-row md:justify-between items-center gap-4 text-muted-foreground text-sm">
        <span className="flex flex-col sm:flex-row gap-1 sm:gap-2">
          <p className="text-center">All right reserved @rulink.</p>
          <p className="text-center">Copyright & Ⓒ2024.</p>
        </span>
        <p className="text-center">
          Design, develop and maintained by:{" "}
          <Link
            href="https://github.com/robiuzzaman4"
            target="_blank"
            className="underline text-rulink-primary"
          >
            @robiuzzaman4
          </Link>
        </p>
      </Container>
    </div>
  );
};

export default Footer;
