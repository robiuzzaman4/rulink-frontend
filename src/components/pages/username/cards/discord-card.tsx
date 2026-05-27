import { Discord } from "@thesvg/react";
import Link from "next/link";

type DiscordCardProps = {
  username: string;
};

export function DiscordCard({ username }: DiscordCardProps) {
  const handle = username.replace(/^@/, "");
  const url = `https://discord.com/users/${handle}`;

  return (
    <Link
      href={url}
      target="_blank"
      className="bg-indigo-900/10 border border-indigo-900/10 rounded-3xl p-6 flex flex-col gap-2 hover:cursor-pointer hover:bg-indigo-200 shadow-xs"
    >
      <div className="flex items-start justify-between gap-6">
        <Discord className="size-9" />
        <button
          type="button"
          className="text-xs bg-indigo-500 px-3 py-1.5 rounded-md text-white w-fit inline-flex lg:hidden"
        >
          Connect
        </button>
      </div>
      <span className="grid gap-1">
        <p className="text-sm font-medium text-ru-sub-heading truncate">
          @{handle}
        </p>
        <p className="text-sm text-ru-body">discord.com</p>
      </span>
      <button
        type="button"
        className="text-xs bg-indigo-500 px-3 py-1.5 rounded-md text-white w-fit hidden lg:inline-flex"
      >
        Connect
      </button>
    </Link>
  );
}
