import { Reddit } from "@thesvg/react";
import Link from "next/link";

type RedditCardProps = {
  username: string;
};

export function RedditCard({ username }: RedditCardProps) {
  const url = `https://www.reddit.com/user/${username}`;

  return (
    <Link
      href={url}
      target="_blank"
      className="bg-orange-900/10 border border-orange-900/10 rounded-3xl p-6 flex flex-col gap-2 hover:cursor-pointer hover:bg-orange-200 shadow-xs"
    >
      <div className="flex items-start justify-between gap-6">
        <Reddit className="size-9" />
        <button
          type="button"
          className="text-xs bg-orange-600 px-3 py-1.5 rounded-md text-white w-fit inline-flex lg:hidden"
        >
          Follow
        </button>
      </div>
      <span className="grid gap-1">
        <p className="text-sm font-medium text-ru-sub-heading truncate">
          @{username}
        </p>
        <p className="text-sm text-ru-body">reddit.com</p>
      </span>
      <button
        type="button"
        className="text-xs bg-orange-600 px-3 py-1.5 rounded-md text-white w-fit hidden lg:inline-flex"
      >
        Follow
      </button>
    </Link>
  );
}
