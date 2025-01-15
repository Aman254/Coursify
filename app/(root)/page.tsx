import { auth } from "@/auth";
import CTA from "@/components/Home/Cta";
import Footer from "@/components/Home/Footer";
import HeroSection from "@/components/Home/HeroSection";

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <div className="w-full">
      <HeroSection />
      <CTA />
      <Footer />
    </div>
  );
}
