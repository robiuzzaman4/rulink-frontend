import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface ShineButton {
  children: ReactNode;
}

const ShineButton = () => {
  return (
    <button className="group relative inline-flex transform items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-10 rounded-md bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:ring-2 hover:ring-ring hover:ring-offset-2 focus:ring-offset-2 overflow-hidden">
      <Link
        href="/sign-up"
        className="h-full w-full flex items-center justify-center px-8 gap-1"
      >
        <p>Try for free</p>
        <ArrowRight size={16} className="group-hover:transform group-hover:translate-x-1 transition-all duration-300" />
      </Link>
      <div className="ease-in-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-[35deg] bg-background opacity-25 transition-all duration-500 group-hover:left-[120%]"></div>
    </button>
  );
};
export default ShineButton;
