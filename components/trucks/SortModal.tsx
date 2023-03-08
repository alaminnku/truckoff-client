import { ITruck } from "@types";
import { BiSortAlt2 } from "react-icons/bi";
import styles from "@styles/trucks/SortModal.module.css";
import { ChangeEvent, useState } from "react";

interface ISortModalProps {
  trucks: ITruck[];
}

export default function SortModal({ trucks }: ISortModalProps) {
  // Hooks
  const [sortBy, setSortBy] = useState("lowToHigh");

  // Sort trucks by price
  function sortTrucks() {
    if (sortBy === "lowToHigh") {
      trucks.sort((a, b) => +a.price - +b.price);
    } else {
      trucks.sort((a, b) => +b.price - +a.price);
    }
  }

  return (
    <div>
      <p className={styles.title}>
        <BiSortAlt2 /> Sort options
      </p>

      <div className={styles.sort_list}>
        <p className={styles.title}>Default</p>

        <form>
          <div>
            <input
              type="radio"
              name="sort"
              id="lowToHigh"
              value="lowToHigh"
              checked={sortBy === "lowToHigh"}
              onChange={(e) => setSortBy(e.target.value)}
            />
            <label htmlFor="lowToHigh">Low to high</label>
          </div>
          <div>
            <input
              type="radio"
              name="sort"
              id="highToLow"
              value="highToLow"
              checked={sortBy === "highToLow"}
              onChange={(e) => setSortBy(e.target.value)}
            />
            <label htmlFor="highToLow">High to low</label>
          </div>
        </form>
      </div>

      <div className={styles.buttons}>
        <button onClick={sortTrucks}>Cancel</button>
        <button onClick={sortTrucks}>Apply</button>
      </div>
    </div>
  );
}
