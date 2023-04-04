import Hero from "@components/home/Hero";
import Brands from "@components/home/Brands";
import About from "@components/home/About";
import Locations from "@components/home/Locations";
import Processes from "@components/home/Processes";
import Stats from "@components/home/Stats";
import Promotion from "@components/home/Promotion";
import Partners from "@components/home/Partners";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Brands />
      <About />
      <Locations />
      <Processes />
      <Stats />
      <Promotion />
      <Partners />
    </main>
  );
}
