import React from "react";
import ClaimedUsernameProcess from "@/components/pages/overview/claimed-username-process";
import GeneratedUrl from "@/components/pages/overview/generated-url";

const OverviewPage = () => {
  return (
    <div className="py-20">
      <GeneratedUrl />

      {/* claim user name process */}
      <div className="px-4 lg:px-6">
        <ClaimedUsernameProcess />
      </div>
    </div>
  );
};

export default OverviewPage;

/**
 * Email: ruhan+clerk_test@example.com
 * UserId: user_2kVNbM2uznV5jReoJnJVmYDUs6w
 * UserId: user_2kVNbM2uznV5jReoJnJVmYDUs6w
 */
