import Image from "next/image";
import { useRouter } from "next/router";
import { useData } from "@contexts/Data";
import { FormEvent, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import heroImage from "@public/truckoff-hero.png";
import styles from "@styles/home/Hero.module.css";

export default function Hero() {
  // Hooks
  const router = useRouter();
  const [search, setSearch] = useState("");
  const { trucks, setFilteredTrucks } = useData();

  // Search trucks
  function searchTrucks(e: FormEvent) {
    e.preventDefault();

    // Filter trucks
    setFilteredTrucks(() =>
      trucks.data.filter((truck) =>
        truck.name.toLowerCase().includes(search.toLowerCase())
      )
    );

    // Push to the trucks page
    router.push("/trucks");
  }

  return (
    <section className={styles.hero}>
      <Image src={heroImage} fill alt="TruckOff hero image" />

      <div className={styles.content}>
        <h1>Find your next truck</h1>

        <form className={styles.search}>
          <input
            type="text"
            value={search}
            placeholder="Search by keyword..."
            onChange={(e) => setSearch(e.target.value)}
          />

          <button disabled={!search || trucks.isLoading} onClick={searchTrucks}>
            <AiOutlineSearch />
          </button>
        </form>

        <p>Australia’s fastest growing truck marketplace.</p>
      </div>
    </section>
  );
}
