import { Preloader } from "@/components/layout/Preloader";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { Marquee } from "@/components/home/Marquee";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HorizontalProjects } from "@/components/home/HorizontalProjects";
import { StickyAbout } from "@/components/home/StickyAbout";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Preloader />
      <Hero />
      <Intro />
      <FeaturedProjects />
      <Marquee />
      <HorizontalProjects />
      <StickyAbout />
    </div>
  );
}
