"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import Link from "next/link";

const DashboardNavbar = () => {
  const pathname = usePathname();
  const exactPathname = pathname && pathname?.split("/")?.[2];

  return (
    <nav className="w-full fixed top-0 bg-background border-b border-b-border z-20 py-[18px]">
      <div className="px-4 lg:px-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/dashboard">Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href={pathname}
                  className="capitalize font-medium text-orange-500 hover:text-orange-500"
                >
                  {exactPathname && exactPathname}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
