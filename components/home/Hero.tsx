import Image from "next/image";
import heroImage from "@public/truckoff-hero.png";
import styles from "@styles/home/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image src={heroImage} fill alt="TruckOff hero image" />

      <div className={styles.content}>
        <h1>Find your next truck</h1>
        <p>Australia’s fastest growing truck marketplace</p>

        <form className={styles.search}>
          <input type="text" placeholder="Search for trucks" />
          <button>Search</button>
        </form>
      </div>
    </section>
  );
}
