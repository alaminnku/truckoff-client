import { ISortModalProps, ITruck } from "@types";
import { BiSortAlt2 } from "react-icons/bi";
import styles from "@styles/trucks/SortModal.module.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function SortModal({
  setSorted,
  filteredTrucks,
  setShowModalContainer,
}: ISortModalProps) {
  // Hooks
  const [sortBy, setSortBy] = useState("mostRecent");

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
  }, [sortBy]);

  return (
    <div className={styles.sort_modal}>
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
