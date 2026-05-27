import { Tiktok } from "@thesvg/react";
import Link from "next/link";

type TiktokCardProps = {
  username: string;
};

export function TiktokCard({ username }: TiktokCardProps) {
  const url = `https://www.tiktok.com/@${username}`;

  return (
    <Link
      href={url}
      target="_blank"
      className="bg-rose-900/10 border border-rose-900/10 rounded-3xl p-6 flex flex-col gap-2 hover:cursor-pointer hover:bg-rose-200 shadow-xs"
    >
      <div className="flex items-start justify-between gap-6">
        <Tiktok className="size-9 [&_.cls-3]:fill-[#25F4EE] [&_.cls-2]:fill-[#FE2C55] [&_path:not(.cls-2):not(.cls-3)]:fill-black" />
        <button
          type="button"
          className="text-xs bg-rose-500 px-3 py-1.5 rounded-md text-white w-fit inline-flex lg:hidden"
        >
          Follow
        </button>
      </div>
      <span className="grid gap-1">
        <p className="text-sm font-medium text-ru-sub-heading truncate">
          @{username}
        </p>
        <p className="text-sm text-ru-body">tiktok.com</p>
      </span>
      <button
        type="button"
        className="text-xs bg-rose-500 px-3 py-1.5 rounded-md text-white w-fit hidden lg:inline-flex"
      >
        Follow
      </button>
    </Link>
  );
}
