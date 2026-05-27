import { USER } from "@/data/user";
import Image from "next/image";
import { LinkedinCard } from "@/components/pages/username/cards/linkedin-card";
import { FacebookCard } from "@/components/pages/username/cards/facebook-card";

export default function UserNamePage({ username }: { username: string }) {
  console.log("username", username);

  return (
    <div className="bg-ru-background min-h-dvh w-full h-full">
      <div className="w-full max-w-7xl mx-auto grid xl:grid-cols-3 gap-18 py-12 px-6">
        {/* left part */}
        <div className="space-y-6">
          <Image
            src={USER.image}
            alt={`${USER.name}'s image`}
            height={720}
            width={720}
            className="size-44 rounded-full"
            loading="eager"
            unoptimized
          />
          <span className="grid gap-2">
            <h1 className="text-3xl font-semibold text-ru-heading">
              {USER.name}
            </h1>
            <p className="text-base text-ru-sub-heading">
              FullStack Developer | Competitive Programmer | Cloud & Data
              Science Enthusiast
            </p>
          </span>
        </div>

        {/* right part */}
        <div className="xl:col-span-2 grid md:grid-cols-2 xl:grid-cols-4 gap-6 h-fit">
          <LinkedinCard username={USER.linkedin} />
          <FacebookCard username={USER.facebook} />
          <div className="bg-neutral-100 ">Hello</div>
          <div className="bg-neutral-100 ">Hello</div>
          <div className="bg-neutral-100 ">Hello</div>
        </div>
      </div>
    </div>
  );
}
