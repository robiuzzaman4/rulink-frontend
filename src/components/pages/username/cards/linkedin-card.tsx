import { Linkedin } from "@thesvg/react";
import Link from "next/link";

type LinkedinCardProps = {
  username: string;
};

export function LinkedinCard({ username }: LinkedinCardProps) {
  const url = `https://www.linkedin.com/in/${username}`;
  return (
    <Link
      href={url}
      target="_blank"
      className="bg-sky-900/10 border border-sky-900/10 rounded-3xl p-6 flex flex-col gap-2 hover:cursor-pointer hover:bg-sky-200 shadow-xs"
    >
      <div className="flex items-start justify-between gap-6">
        <Linkedin className="size-9" />

        <button
          type="button"
          className="text-xs bg-sky-700 px-3 py-1.5 rounded-md text-white w-fit inline-flex lg:hidden"
        >
          Connect
        </button>
      </div>
      <span className="grid gap-1">
        <p className="text-sm font-medium text-ru-sub-heading truncate">
          @{username}
        </p>
        <p className="text-sm text-ru-body">linkedin.com</p>
      </span>
      <button
        type="button"
        className="text-xs bg-sky-700 px-3 py-1.5 rounded-md text-white w-fit hidden lg:inline-flex"
      >
        Connect
      </button>
    </Link>
  );
}
