"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import Link from "next/link";

const DashboardNavbar = () => {
  const pathname = usePathname();
  const exectPathname = pathname && pathname?.split("/")?.[2];
  console.log("exectPathname", exectPathname, pathname);

  return (
    <nav className="w-full fixed top-0 bg-background border-b border-b-border z-20 py-[18px]">
      <div className="px-4 lg:px-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={pathname}>Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="capitalize font-medium text-rulink-primary">
                {exectPathname && exectPathname}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
