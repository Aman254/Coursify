import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="primary-background text-white shadow-xl overflow-hidden">
      <div className="px-6 py-12 md:px-12 md:py-16 max-w-7xl mx-auto">
        <div className="transition-all duration-1000 ease-out transform">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Unlock Your Potential with Our Courses
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl">
            Embark on a journey of knowledge and skill enhancement. Our
            expert-led courses are designed to propel your career forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link href="/courses">
              <Button
                size="lg"
                className="primary-background text-white hover:primary-hover-background hover:text-white border-2 border-white hover:border-white transition-colors duration-300 w-full sm:w-auto"
              >
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <span className="text-sm md:text-base">
              Join 1,000+ learners today!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
