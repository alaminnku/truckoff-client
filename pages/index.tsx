import Hero from "@components/home/Hero";
import Categories from "@components/home/Categories";
import Brands from "@components/home/Brands";
import About from "@components/home/About";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Brands />
      <About />
      <Categories />
    </main>
  );
}
