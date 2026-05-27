import { X } from "@thesvg/react";
import Link from "next/link";

type XCardProps = {
  username: string;
};

export function XCard({ username }: XCardProps) {
  const url = `https://x.com/${username}`;

  return (
    <Link
      href={url}
      target="_blank"
      className="bg-neutral-900/10 border border-neutral-900/10 rounded-3xl p-6 flex flex-col gap-2 hover:cursor-pointer hover:bg-neutral-900/20 shadow-xs"
    >
      <div className="flex items-start justify-between gap-6">
        <X className="size-9" />
        <button
          type="button"
          className="text-xs bg-neutral-950 px-3 py-1.5 rounded-md text-white w-fit inline-flex lg:hidden"
        >
          Follow
        </button>
      </div>
      <span className="grid gap-1">
        <p className="text-sm font-medium text-ru-sub-heading truncate">
          @{username}
        </p>
        <p className="text-sm text-ru-body">x.com</p>
      </span>
      <button
        type="button"
        className="text-xs bg-neutral-950 px-3 py-1.5 rounded-md text-white w-fit hidden lg:inline-flex"
      >
        Follow
      </button>
    </Link>
  );
}
