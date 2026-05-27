import { Telegram } from "@thesvg/react";
import Link from "next/link";

type TelegramCardProps = {
  username: string;
};

export function TelegramCard({ username }: TelegramCardProps) {
  const handle = username.replace(/^@/, "");
  const url = `https://t.me/${handle}`;
  const label = username.startsWith("+") ? username : `@${handle}`;

  return (
    <Link
      href={url}
      target="_blank"
      className="bg-sky-900/10 border border-sky-900/10 rounded-3xl p-6 flex flex-col gap-2 hover:cursor-pointer hover:bg-sky-200 shadow-xs"
    >
      <div className="flex items-start justify-between gap-6">
        <Telegram className="size-9 [&_path:first-of-type]:fill-[#229ED9]" />
        <button
          type="button"
          className="text-xs bg-sky-500 px-3 py-1.5 rounded-md text-white w-fit inline-flex lg:hidden"
        >
          Message
        </button>
      </div>
      <span className="grid gap-1">
        <p className="text-sm font-medium text-ru-sub-heading truncate">
          {label}
        </p>
        <p className="text-sm text-ru-body">t.me</p>
      </span>
      <button
        type="button"
        className="text-xs bg-sky-500 px-3 py-1.5 rounded-md text-white w-fit hidden lg:inline-flex"
      >
        Message
      </button>
    </Link>
  );
}
