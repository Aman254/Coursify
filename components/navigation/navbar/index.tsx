import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="relative z-50">
      {/* Main Navigation */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left side - Logo and Nav Links */}
            <div className="flex items-center gap-8">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/site-logo.svg"
                  alt="Coursify"
                  width={24}
                  height={24}
                />
                <span className="font-semibold md:text-xl text-xs">
                  Coursify
                </span>
              </Link>
            </div>

            {/* Right side - Auth Buttons */}
            <div className="flex items-center gap-4">
              <Link href="/sign-in" className="hidden md:block">
                <Button variant="ghost" className="hover:bg-faded-purple">
                  Sign in
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="primary-background text-white hover:primary-hover-background  sm:inline-flex md:px-[10px] px-[5px] text-xs md:text-[13px]">
                  Get started {">"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
