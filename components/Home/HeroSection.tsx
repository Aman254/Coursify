import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-[#F5F7FF]">
      <BackgroundBeamsWithCollision>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTAgMGgyMDB2MjAwSDB6IiBmaWxsPSJ1cmwoI2EpIi8+CiAgPGRlZnM+CiAgICA8cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj4KICAgICAgPHBhdGggZD0iTTAgMjBoMjBMMCAweiIgZmlsbD0icmdiYSgwLDAsMCwwLjAyKSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KPC9zdmc+Cg==')]" />

        <div className="relative">
          <div className="flex flex-col items-center justify-center space-y-10 py-20 text-center md:py-32">
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Code your DREAMS
              <br />
              into REALITY
            </h1>
            <p className="max-w-4xl md:px-0 px-4 text-sm text-muted-foreground sm:text-xl">
              Need more than just a sign-in box? Clerk is a complete suite of
              embeddable UIs, flexible APIs, and admin dashboards to
              authenticate and manage your users.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Link href="/courses">
                <Button
                  className="primary-background text-white hover:primary-hover-background"
                  size="lg"
                >
                  Explore Courses
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="gap-2">
                <PlayCircle className="h-4 w-4" />
                Start Free Trial
                <span className="text-muted-foreground">3 Days</span>
              </Button>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Top companies choose Couri Business to build in-demand career
                skills.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {[
                  {
                    src: "/images/netflix-3.svg",
                    alt: "Browserbase",
                    width: 120,
                  },
                  {
                    src: "/images/amazon-icon.svg",
                    alt: "Ingest",
                    width: 100,
                  },
                  {
                    src: "/images/Microsoft_logo.svg",
                    alt: "Braintrust",
                    width: 130,
                  },
                  {
                    src: "/images/meta-icon.svg",
                    alt: "Suno",
                    width: 90,
                  },
                  {
                    src: "/images/google-logo.svg",
                    alt: "Fincry",
                    width: 100,
                  },
                  {
                    src: "/images/apple-logo.svg",
                    alt: "BaseHub",
                    width: 110,
                  },
                ].map((logo) => (
                  <div key={logo.alt} className="relative h-6  mt-2">
                    <Image
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      width={logo.width}
                      height={32}
                      className="h-full w-auto "
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
