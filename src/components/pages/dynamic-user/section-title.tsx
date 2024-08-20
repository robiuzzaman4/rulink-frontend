import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      <div className="h-2 w-2 rounded-full bg-muted-foreground/40 shrink-0" />
      <p className="font-medium text-lg">{title}</p>
    </div>
  );
};

export default SectionTitle;
