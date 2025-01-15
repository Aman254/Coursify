import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const LinkClass = "text-sm primary-text primary-text-hover hover:underline";
  return (
    <footer className="bg-faded-purple px-10">
      <div className="mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm primary-text">
              We are dedicated to providing high-quality online courses to help
              you advance your career and achieve your goals.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className={LinkClass}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className={LinkClass}>
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#" className={LinkClass}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className={LinkClass}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://x.com/amanmishra_7" className={LinkClass}>
                <Image
                  src="/images/x-logo.svg"
                  height={20}
                  width={20}
                  alt="X"
                />
              </Link>

              <Link
                href="https://www.linkedin.com/in/aman-mishra-181350285/"
                className={LinkClass}
              >
                <Image
                  src="/images/linkedin-logo.svg"
                  height={20}
                  width={20}
                  alt="Linkedin"
                />
              </Link>
              <Link
                href="https://github.com/Aman254/Coursify"
                className={LinkClass}
              >
                <Image
                  src="/icons/github-mark.svg"
                  height={20}
                  width={20}
                  alt="Github"
                />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-2">
              Stay updated with our latest courses and offers.
            </p>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-grow"
              />
              <Button
                type="submit"
                className="primary-background hover:primary-hover-background"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            &copy; 2025 Coursify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
