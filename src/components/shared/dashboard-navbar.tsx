"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { NAVLINKS } from "@/constants/navlinks";
import { cn } from "@/lib/utils";
import UserButton from "@/components/shared/user-button";

const DashboardNavbar = () => {
  const pathname = usePathname();
  const exactPathname = pathname && pathname?.split("/")?.[2];
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full fixed top-0 bg-background border-b border-b-border z-20 h-14 flex items-center">
        <div className="pl-4 lg:hidden">
          <Button onClick={() => setOpen(true)} variant="outline" size="icon">
            <Menu size={20} />
          </Button>
        </div>
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
                    className="capitalize font-medium text-foreground hover:text-foreground"
                  >
                    {exactPathname && exactPathname}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>

      {/* drawer for mobile */}
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className="min-h-[60vh]">
          <DrawerHeader className="sr-only">
            <DrawerTitle className="sr-only">Drawer Title</DrawerTitle>
            <DrawerDescription className="sr-only">
              Drawer Description
            </DrawerDescription>
          </DrawerHeader>
          {/* links */}
          <div className="grid gap-6 pt-6">
            {/* overview navlinks */}
            <div className="grid gap-2 px-6">
              <h5 className="text-xs font-semibold text-muted-foreground">
                Overview
              </h5>
              <div className="grid">
                {NAVLINKS.overview.map(({ label, href, icon }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={label}
                      href={href}
                      className={cn(
                        "h-9 px-3 py-1 rounded-md flex items-center gap-2 text-muted-foreground hover:text-foreground",
                        {
                          "bg-secondary text-foreground": isActive,
                        }
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {icon}
                      <p className="font-medium text-sm">{label}</p>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* manage navlinks */}
            <div className="grid gap-2 px-6">
              <h5 className="text-xs font-medium text-muted-foreground">
                Manage
              </h5>
              <div className="grid">
                {NAVLINKS.manage.map(({ label, href, icon }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={label}
                      href={href}
                      className={cn(
                        "h-9 px-3 py-1 rounded-md flex items-center gap-2 text-muted-foreground hover:text-foreground",
                        {
                          "bg-secondary text-foreground": isActive,
                        }
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {icon}
                      <p className="font-medium text-sm">{label}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* user button */}
          <UserButton />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DashboardNavbar;
