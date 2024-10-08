import React from "react";

const UserSectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      <div className="h-2 w-2 rounded-full bg-muted-foreground/40 shrink-0" />
      <p className="font-medium text-base sm:text-lg">{title}</p>
    </div>
  );
};

export default UserSectionTitle;
