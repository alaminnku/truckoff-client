import Link from "next/link";
import { brands } from "@utils";
import { MouseEvent, useEffect, useState } from "react";
import { useData } from "@contexts/Data";
import { useRouter } from "next/router";
import styles from "@styles/home/Categories.module.css";

export default function Categories() {
  // Hooks
  const router = useRouter();
  const { allTrucks, setTrucks } = useData();
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    window.innerWidth > 768 && setIsMobile(false);
  });

  // Search trucks
  function filterTrucks(
    e: MouseEvent<HTMLDivElement | HTMLParagraphElement, globalThis.MouseEvent>
  ) {
    // Get brand name
    const brandName = e.currentTarget.getElementsByTagName("p")[0].textContent;

    // Filter trucks
    setTrucks(() =>
      allTrucks.data.filter(
        (truck) => truck.brand.toLowerCase() === brandName?.toLowerCase()
      )
    );

    // Push to the trucks page
    router.push("/trucks");
  }

  return (
    <section className={styles.categories}>
      <h2>Browse by make</h2>

      <div className={styles.items}>
        {isMobile
          ? brands.slice(0, 4).map((brand, index) => (
              <div className={styles.item} onClick={filterTrucks} key={index}>
                <p>{brand[1]}</p>
              </div>
            ))
          : brands.map((brand, index) => (
              <div className={styles.item} onClick={filterTrucks} key={index}>
                <p>{brand[1]}</p>
              </div>
            ))}
      </div>

      <Link href="/trucks">See More</Link>
    </section>
  );
}
