import React from "react";

const UserFooter = ({ username }: { username: string }) => {
  return (
    <div className="bg-secondary/60 rounded-md px-2 py-4 sm:px-6 sm:py-6 flex flex-col gap-4">
      <p className="text-sm font-medium text-muted-foreground text-center">
        © 2024 Rulink - @{username}{" "}
      </p>
    </div>
  );
};

export default UserFooter;
