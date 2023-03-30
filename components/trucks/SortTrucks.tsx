import { ISortTrucksProps } from "@types";
import { BiSortAlt2 } from "react-icons/bi";
import { useEffect, useState } from "react";
import styles from "@styles/trucks/SortTrucks.module.css";
import { useData } from "@contexts/Data";

export default function SortTrucks({
  setSorted,
  filteredTrucks,
  setShowModalContainer,
}: ISortTrucksProps) {
  // Hooks
  const [sortBy, setSortBy] = useState("");

  // Sort trucks
  useEffect(() => {
    if (sortBy === "mostRecent") {
      filteredTrucks.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    } else if (sortBy === "lowToHigh") {
      filteredTrucks.sort((a, b) => +a.price - +b.price);
    } else if (sortBy === "highToLow") {
      filteredTrucks.sort((a, b) => +b.price - +a.price);
    }

    // Trigger state update
    setSorted &&
      setSorted(() =>
        sortBy === "mostRecent"
          ? { byMostRecent: true, byHighToLow: false, byLowToHigh: false }
          : sortBy === "lowToHigh"
          ? { byLowToHigh: true, byMostRecent: false, byHighToLow: false }
          : { byHighToLow: true, byMostRecent: false, byLowToHigh: false }
      );

    // Close the modal
    setShowModalContainer && setShowModalContainer(false);
  }, [sortBy, filteredTrucks]);

  return (
    <div className={styles.sort_trucks}>
      <p className={styles.title}>
        <BiSortAlt2 /> Sort
      </p>

      <form className={styles.sort_form}>
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="Sort By" hidden>
            Sort By
          </option>
          <option value="mostRecent">Most recent</option>
          <option value="lowToHigh">Price: Low to high</option>
          <option value="highToLow">Price: High to low</option>
        </select>
      </form>
    </div>
  );
}
