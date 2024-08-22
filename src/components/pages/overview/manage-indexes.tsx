import { Button } from "@/components/ui/button";
import { NAVLINKS } from "@/constants/navlinks";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ManageIndexes = () => {
  return (
    <div className="px-4 lg:px-6 mt-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {NAVLINKS.manage.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="border border-border rounded-lg bg-secondary/50 shadow-lg w-full"
          >
            <div className="h-40 flex items-center justify-center border-y border-y-border mt-6">
              <div className="px-6 border-x h-full w-full grid place-items-center mx-6 bg-background">
                {item.label}
              </div>
            </div>
            <div className="hover:bg-secondary w-full h-12 rounded-b-lg flex items-center justify-center ">
              <Button
                asChild
                variant="link"
                className="w-full hover:no-underline hover:text-rulink-primary "
              >
                <div className="w-full flex items-center justify-center gap-1">
                  <p> Manage {item.label}</p>
                  <span>
                    <ChevronRight size={16} className="mt-0.5" />
                  </span>
                </div>
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ManageIndexes;
