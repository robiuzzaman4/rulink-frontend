import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full bg-sky-50 grid place-items-center">
      <Link href={"/ruhan"} className="text-zinc-950 text-2xl font-semibold underline"> /ruhan </Link>
    </div>
  );
}
