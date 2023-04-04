import Hero from "@components/home/Hero";
import Categories from "@components/home/Categories";
import Brands from "@components/home/Brands";
import About from "@components/home/About";
import Locations from "@components/home/Locations";
import Processes from "@components/home/Processes";
import Stats from "@components/home/Stats";
import Promotion from "@components/home/Promotion";

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
    </main>
  );
}
