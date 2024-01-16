import { Medal } from "lucide-react";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="w-6 h-6 mr-2" />
          No 1 Task Management App
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Taskiflow help team more
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-sky-500 to-green-500 text-white rounded-md px-4 pb-2 pt-3 w-fit">
          work forward
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is
        unique—accomplish it all with Taskiflow.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get taskiflow for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
