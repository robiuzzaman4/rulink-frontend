import React from "react";
import ClaimedUsernameProcess from "@/components/pages/overview/claimed-username-process";
import GeneratedUrl from "@/components/pages/overview/generated-url";
import ManageIndexes from "@/components/pages/overview/manage-indexes";

const OverviewPage = () => {
  return (
    <div className="py-20">
      <GeneratedUrl />
      <ManageIndexes />

      {/* claim user name process */}
      <div className="px-4 lg:px-6">
        <ClaimedUsernameProcess />
      </div>
    </div>
  );
};

export default OverviewPage;

