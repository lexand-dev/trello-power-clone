import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src="/logo.webp" alt="Taskify" width={30} height={30} />
        <p
          className={cn(
            "text-lg text-neutral-700 pt-3 pb-1",
            headingFont.className
          )}
        >
          Taskiflow
        </p>
      </div>
    </Link>
  );
};

export default Logo;
