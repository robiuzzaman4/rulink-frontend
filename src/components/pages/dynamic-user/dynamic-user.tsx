"use client";

import React from "react";

interface DynamicUserProps {
  username: string;
}

const DynamicUser = ({ username }: DynamicUserProps) => {
  return (
    <div>
      <h1>{username}</h1>
    </div>
  );
};

export default DynamicUser;
