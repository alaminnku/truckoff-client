import { MouseEvent } from "react";
import { useData } from "@contexts/Data";
import { useRouter } from "next/router";
import styles from "@styles/home/Categories.module.css";

export default function Categories() {
  // Hooks
  const router = useRouter();
  const { allTrucks, setTrucks } = useData();

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
        <div className={styles.item} onClick={filterTrucks}>
          <p>Ford</p>
        </div>
        <div className={styles.item} onClick={filterTrucks}>
          <p>Freightliner</p>
        </div>
        <div className={styles.item} onClick={filterTrucks}>
          <p>Fuso</p>
        </div>
        <div className={styles.item} onClick={filterTrucks}>
          <p>Hino</p>
        </div>
      </div>

      <button>See More</button>
    </section>
  );
}
