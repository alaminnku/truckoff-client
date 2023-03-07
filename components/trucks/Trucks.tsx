import styles from "@styles/trucks/Trucks.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Trucks() {
  return (
    <section className={styles.trucks}>
      <h1>6000 trucks for sale in Australia</h1>

      <div className={styles.filter_and_sort}>
        <p>Filter</p>
        <p>Sort</p>
      </div>

      <div className={styles.items}>
        <div className={styles.item}>
          <Image
            src="/truckoff-hero.png"
            width={800}
            height={500}
            alt="Truck image"
          />

          <div className={styles.content}>
            <div className={styles.name_and_price}>
              <p>Title</p>
              <p>$184000</p>
            </div>

            <p className={styles.description}>
              2008 U.D. GW400 6X4 HARDOX 376000KLM RWC$122800+GST SEE COND
            </p>

            <Link href="/view-truck">View Truck</Link>
          </div>
        </div>

        <div className={styles.item}>
          <Image
            src="/truckoff-hero.png"
            width={800}
            height={500}
            alt="Truck image"
          />

          <div className={styles.content}>
            <div className={styles.name_and_price}>
              <p>Title</p>
              <p>$184000</p>
            </div>

            <p className={styles.description}>
              2008 U.D. GW400 6X4 HARDOX 376000KLM RWC$122800+GST SEE COND
            </p>

            <Link href="/view-truck">View Truck</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
