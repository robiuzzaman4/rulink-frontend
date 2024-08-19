import DynamicUser from "@/components/pages/dynamic-user/dynamic-user";
import React from "react";

const SingleUserPage = ({ params }: { params: { username: string } }) => {
  return (
    <div className="min-h-screen bg-secondary w-full">
      <DynamicUser username={params.username} />
    </div>
  );
};

export default SingleUserPage;
