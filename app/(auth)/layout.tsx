"use client";

import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import SocialAuthForm from "@/components/forms/SocialAuthForm";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-center bg-[#F8F8FE] mx-4`}
    >
      <div className="mb-8 flex-center gap-4">
        <Image
          src="/images/site-logo.svg"
          alt="Coursify"
          width={32}
          height={32}
        />
        <h3 className="text-xl font-medium">Coursify</h3>
      </div>

      <div className="w-full max-w-[400px] bg-white rounded-2xl p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-center mb-1">Sign in</h1>
        <p className="text-center text-sm text-gray-600 mb-6">
          Don&apos;t have an account yet?{" "}
          <Link href="/sign-in" className="text-[#6C5DD3] hover:underline">
            Sign up here
          </Link>
        </p>
        <section>{children}</section>

        <SocialAuthForm />
      </div>
    </main>
  );
}
