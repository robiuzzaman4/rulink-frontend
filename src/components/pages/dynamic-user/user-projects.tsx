import React from "react";
import UserSectionTitle from "@/components/pages/dynamic-user/user-section-title";
import { TProject } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MOTION_SCALE_UP } from "@/constants/motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface UserSocialsProps {
  projects: TProject[];
}

const UserProjects = ({ projects }: UserSocialsProps) => {
  return (
    <div className="bg-secondary/60 rounded-md p-4 sm:p-6 flex flex-col gap-4">
      <UserSectionTitle title="Projects" />

      {/* mobile cards */}
      <div className="grid md:hidden gap-2">
        {projects?.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              variants={MOTION_SCALE_UP}
              className="bg-background p-4 rounded-xl shadow-rulink border border-border flex flex-col gap-4"
            >
              <Image
                src={item?.thumbnail_url}
                alt="project thumbnail"
                width={720}
                height={720}
                className="h-40 w-full rounded-lg object-cover"
              />
              <div className="flex flex-col items-start gap-1">
                <h4 className="text-xl font-medium truncate">{item?.title}</h4>
                <p className="text-sm font-normal text-muted-foreground line-clamp-3 sm:line-clamp-2">
                  {item?.description}
                </p>
              </div>

              {item?.live_url && (
                <div className="h-fit mt-auto">
                  <Button asChild size="sm" variant="ghost">
                    <Link href={item?.live_url} target="_blank">
                      Visit now
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
      {/* desktop cards */}
      <div className="hidden md:grid gap-2">
        {projects?.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              variants={MOTION_SCALE_UP}
              className="bg-background p-4 rounded-xl shadow-rulink border border-border flex justify-between w-full gap-4"
            >
              <Image
                src={item?.thumbnail_url}
                alt="project thumbnail"
                width={720}
                height={720}
                className="h-full w-36 aspect-video rounded-lg object-cover"
              />
              <div className="flex flex-col items-start gap-1">
                <h4 className="text-xl font-medium truncate">{item?.title}</h4>
                <p className="text-sm font-normal text-muted-foreground line-clamp-3 sm:line-clamp-2">
                  {item?.description}
                </p>
                {item?.live_url && (
                  <div className="h-fit mt-auto">
                    <Button asChild size="sm" variant="secondary">
                      <Link href={item?.live_url} target="_blank">
                        Visit now
                        <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default UserProjects;
