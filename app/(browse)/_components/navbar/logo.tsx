import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white rounded-full mr-13 shrink-0 lg:mr-0 lg:shrink">
          <Image src="/logo2.svg" alt="logo" width={50} height={50}></Image>
        </div>
        <div className={cn(font.className, "hidden lg:block")}>
          <p className="text-lg font-semibold">SparkLive</p>
          <p className="text-xs text-muted-foreground">
            Live Streaming Platform
          </p>
        </div>
      </div>
    </Link>
  );
};
