import { Facebook } from "@thesvg/react";
import Link from "next/link";

type FacebookCardProps = {
  username: string;
};

export function FacebookCard({ username }: FacebookCardProps) {
  const url = `https://www.facebook.com/${username}`;
  return (
    <Link
      href={url}
      target="_blank"
      className="bg-blue-900/10 border border-blue-900/10 rounded-3xl p-6 flex flex-col gap-2 hover:cursor-pointer hover:bg-blue-200 shadow-xs"
    >
      <div className="flex items-start justify-between gap-6">
        <Facebook className="size-9 [&_path:first-of-type]:fill-[#1877F2] [&_path:last-of-type]:fill-white" />
        <button
          type="button"
          className="text-xs bg-blue-600 px-3 py-1.5 rounded-md text-white w-fit inline-flex lg:hidden"
        >
          Add Friend
        </button>
      </div>
      <span className="grid gap-1">
        <p className="text-sm font-medium text-ru-sub-heading truncate">
          @{username}
        </p>
        <p className="text-sm text-ru-body">facebook.com</p>
      </span>
      <button
        type="button"
        className="text-xs bg-blue-600 px-3 py-1.5 rounded-md text-white w-fit hidden lg:inline-flex"
      >
        Add Friend
      </button>
    </Link>
  );
}
