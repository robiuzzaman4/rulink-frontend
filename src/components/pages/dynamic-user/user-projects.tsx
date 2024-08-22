import React from "react";
import SectionTitle from "@/components/pages/dynamic-user/section-title";
import { TProject } from "@/types";
import Image from "next/image";
import { getIconByPlatform } from "@/utils/getIconByPlatform";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MOTION_PULL_UP_CONTAINER,
  MOTION_PULL_UP_ITEM,
  MOTION_SCALE_UP,
} from "@/constants/motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface UserSocialsProps {
  projects: TProject[];
}

const UserProjects = ({ projects }: UserSocialsProps) => {
  return (
    <div className="bg-secondary rounded-md p-4 sm:p-6 flex flex-col gap-4">
      <SectionTitle title="Projects" />

      <div className="grid sm:grid-cols-2 gap-2">
        {projects?.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              variants={MOTION_SCALE_UP}
              className="bg-background p-4 rounded-xl shadow hover:shadow-lg flex flex-col gap-4"
            >
              <Image
                src={item?.thumbnail_url}
                alt="project thumbnail"
                width={720}
                height={720}
                className="h-40 w-full rounded-lg object-cover"
              />
              <div className="flex flex-col items-start gap-1">
                <h4 className="text-lg font-medium truncate">{item?.title}</h4>
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
    </div>
  );
};

export default UserProjects;
