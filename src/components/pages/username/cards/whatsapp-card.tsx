import { Whatsapp } from "@thesvg/react";
import Link from "next/link";

type WhatsappCardProps = {
  username: string;
};

export function WhatsappCard({ username }: WhatsappCardProps) {
  const phoneNumber = username.replace(/\D/g, "");
  const url = `https://wa.me/${phoneNumber}`;

  return (
    <Link
      href={url}
      target="_blank"
      className="bg-green-900/10 border border-green-900/10 rounded-3xl p-6 flex flex-col gap-2 hover:cursor-pointer hover:bg-green-200 shadow-xs"
    >
      <div className="flex items-start justify-between gap-6">
        <Whatsapp className="size-9" />
        <button
          type="button"
          className="text-xs bg-green-500 px-3 py-1.5 rounded-md text-white w-fit inline-flex lg:hidden"
        >
          Chat
        </button>
      </div>
      <span className="grid gap-1">
        <p className="text-sm font-medium text-ru-sub-heading truncate">
          {username}
        </p>
        <p className="text-sm text-ru-body">whatsapp.com</p>
      </span>
      <button
        type="button"
        className="text-xs bg-green-500 px-3 py-1.5 rounded-md text-white w-fit hidden lg:inline-flex"
      >
        Chat
      </button>
    </Link>
  );
}
