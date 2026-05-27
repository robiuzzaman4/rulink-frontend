import Link from "next/link";
import { Bluesky } from "@thesvg/react";

type BskyCardProps = {
  username: string;
};

export function BskyCard({ username }: BskyCardProps) {
  const url = `https://bsky.app/profile/${username}`;

  return (
    <Link
      href={url}
      target="_blank"
      className="bg-blue-900/10 border border-blue-900/10 rounded-3xl p-6 flex flex-col gap-2 hover:cursor-pointer hover:bg-blue-200 shadow-xs"
    >
      <div className="flex items-start justify-between gap-6">
        <Bluesky className="size-9" />
        <button className="text-xs bg-blue-500 px-3 py-1.5 rounded-md text-white w-fit inline-flex lg:hidden">
          Follow
        </button>
      </div>
      <span className="grid gap-1">
        <p className="text-sm font-medium text-ru-sub-heading truncate">
          @{username}
        </p>
        <p className="text-sm text-ru-body">bsky.app</p>
      </span>
      <button className="text-xs bg-blue-500 px-3 py-1.5 rounded-md text-white w-fit hidden lg:inline-flex">
        Follow
      </button>
    </Link>
  );
}
