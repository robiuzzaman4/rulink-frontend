import React from "react";
import UserSectionTitle from "@/components/pages/dynamic-user/user-section-title";
import { TExperience } from "@/types";
import Image from "next/image";
import { BriefcaseBusiness } from "lucide-react";
import IconButton from "@/components/shared/icon-button";
import { getCapitalizeWord } from "@/utils/getCapitalizeWord";
import { motion } from "framer-motion";
import { MOTION_SCALE_UP } from "@/constants/motion";

interface UserSocialsProps {
  experiences: TExperience[];
}

const UserExperiences = ({ experiences }: UserSocialsProps) => {
  return (
    <div className="bg-secondary rounded-md p-4 sm:p-6 flex flex-col gap-4">
      <UserSectionTitle title="Experiences" />

      <div className="grid gap-2">
        {experiences?.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="show"
            variants={MOTION_SCALE_UP}
            className="bg-background p-4 rounded-xl shadow hover:shadow-lg grid gap-2"
          >
            <IconButton>
              <BriefcaseBusiness size={16} />
            </IconButton>
            <span>
              <h4 className="text-xl font-medium truncate">
                Position: {item?.position}
              </h4>
              <p className="text-base font-normal text-muted-foreground">
                Company: {item?.company} {" - "}{" "}
                {getCapitalizeWord(item?.job_type)}
              </p>
              <p className="text-sm font-normal text-muted-foreground">
                Duration: {item?.start_date} {" - "}{" "}
                {getCapitalizeWord(item?.end_date)}
              </p>
              <p className="text-sm font-normal text-muted-foreground">
                Location Type: {getCapitalizeWord(item?.location_type)}
              </p>
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UserExperiences;
