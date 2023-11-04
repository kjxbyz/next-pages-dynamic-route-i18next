"use client";

import Image from "next/image";
import Link from "next/link";
import LngDropdown from "./lng-dropdown";
import { useScroll } from "@/lib/hooks";

export default function NavBar() {
  const scrolled = useScroll(50);

  return (
    <>
      <div
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-900"
            : "bg-white/0 dark:bg-black/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="font-display flex items-center text-2xl">
            <Image
              src="/next.svg"
              alt="Precedent logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>i18next</p>
          </Link>
          <div className="flex items-center">
            <LngDropdown />
          </div>
        </div>
      </div>
    </>
  );
}
