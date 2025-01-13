"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";

const SocialAuthForm = () => {
  const ButtonClassName =
    "flex items-center justify-center px-4 py-2 border border-gray-100 rounded-lg hover:bg-[#6C5DD3] transition-colors invert-colors px-4 text-black py-3 bg-white hover:text-white";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: false,
      });
    } catch (error) {
      console.log(error);

      toast({
        title: "Sign-in Failed",
        description:
          error instanceof Error
            ? error.message
            : "An error occured during sign-in",
        variant: "destructive",
      });
    }
  };
  return (
    <div className="mt-6">
      <div className="mt-6 grid md:grid-cols-2 grid-cols-1 gap-4 ">
        <Button
          className={ButtonClassName}
          onClick={() => {
            handleSignIn("github");
          }}
        >
          <Image
            src="/icons/github-mark.svg"
            height={20}
            width={20}
            alt="Github"
            className="object-contain"
          />
          <span className="text-xs">Sign with Google</span>{" "}
        </Button>
        <Button
          className={ButtonClassName}
          onClick={() => handleSignIn("google")}
        >
          <Image src="/icons/google.svg" height={20} width={20} alt="Google" />
          <span className="text-xs">Sign with Google</span>{" "}
        </Button>
      </div>
    </div>
  );
};

export default SocialAuthForm;
