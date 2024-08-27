import React from "react";

const UserFooter = ({ username }: { username: string }) => {
  return (
    <div className="bg-secondary rounded-md p-4 sm:p-6 flex flex-col gap-4">
      <p className="text-sm font-medium text-muted-foreground text-center">
        © 2024 Rulink - @{username}{" "}
      </p>
    </div>
  );
};

export default UserFooter;
