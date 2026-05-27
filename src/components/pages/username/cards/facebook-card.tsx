import Image from "next/image";
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
      className="bg-blue-900/10 border border-blue-900/10 rounded-3xl p-6 flex flex-col gap-2 hover:cursor-pointer hover:bg-neutral-200 shadow-xs"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="size-9 rounded-md grid place-items-center bg-blue-700 border border-blue-800/50">
          <Image
            src={"/icons/facebook.svg"}
            alt="facebook icon"
            height={360}
            width={360}
            className="p-1.5"
          />
        </div>
        <button className="text-xs bg-blue-700 px-3 py-1.5 rounded-md text-white w-fit inline-flex lg:hidden">
          Add Friend
        </button>
      </div>
      <span className="grid gap-1">
        <p className="text-sm font-medium text-ru-sub-heading truncate">@{username}</p>
        <p className="text-sm text-ru-body">facebook.com</p>
      </span>
      <button className="text-xs bg-blue-700 px-3 py-1.5 rounded-md text-white w-fit hidden lg:inline-flex">
        Add Friend
      </button>
    </Link>
  );
}
