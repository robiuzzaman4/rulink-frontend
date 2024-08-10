"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const DashboardPage = () => {
  const pathname = usePathname();
  const router = useRouter();
  if (pathname === "/dashboard") {
    router.replace("/dashboard/overview");
  }

  return <></>;
};

export default DashboardPage;
