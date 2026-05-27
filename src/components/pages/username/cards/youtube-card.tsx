import { Youtube } from "@thesvg/react";
import Link from "next/link";

type YouTubeCardProps = {
  username: string;
};

export function YouTubeCard({ username }: YouTubeCardProps) {
  const url = `https://www.youtube.com/@${username}`;

  return (
    <Link
      href={url}
      target="_blank"
      className="bg-red-900/10 border border-red-900/10 rounded-3xl p-6 flex flex-col gap-2 hover:cursor-pointer hover:bg-red-200 shadow-xs"
    >
      <div className="flex items-start justify-between gap-6">
        <Youtube className="size-9" />
        <button
          type="button"
          className="text-xs bg-red-500 px-3 py-1.5 rounded-md text-white w-fit inline-flex lg:hidden"
        >
          Subscribe
        </button>
      </div>
      <span className="grid gap-1">
        <p className="text-sm font-medium text-ru-sub-heading truncate">
          @{username}
        </p>
        <p className="text-sm text-ru-body">youtube.com</p>
      </span>
      <button
        type="button"
        className="text-xs bg-red-500 px-3 py-1.5 rounded-md text-white w-fit hidden lg:inline-flex"
      >
        Subscribe
      </button>
    </Link>
  );
}
