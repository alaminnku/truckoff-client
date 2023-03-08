import { Dispatch, SetStateAction, useState } from "react";
import { ITruck } from "@types";
import { BiSortAlt2 } from "react-icons/bi";
import styles from "@styles/trucks/SortModal.module.css";

interface ISortModalProps {
  trucks: ITruck[];
  setShowModalContainer: Dispatch<SetStateAction<boolean>>;
}

export default function SortModal({
  trucks,
  setShowModalContainer,
}: ISortModalProps) {
  // Hooks
  const [sortBy, setSortBy] = useState("lowToHigh");

  // Sort trucks by price
  function sortTrucks() {
    if (sortBy === "lowToHigh") {
      trucks.sort((a, b) => +a.price - +b.price);
    } else {
      trucks.sort((a, b) => +b.price - +a.price);
    }

    // Close the modal
    setShowModalContainer(false);
  }

  return (
    <div>
      <p className={styles.title}>
        <BiSortAlt2 /> Sort options
      </p>

      <form className={styles.sort_form}>
        <div className={styles.item}>
          <input
            type="radio"
            id="lowToHigh"
            name="sortTrucks"
            value="lowToHigh"
            checked={sortBy === "lowToHigh"}
            onChange={(e) => setSortBy(e.target.value)}
          />
          <label htmlFor="lowToHigh">Low to high</label>
        </div>

        <div className={styles.item}>
          <input
            type="radio"
            id="highToLow"
            name="sortTrucks"
            value="highToLow"
            checked={sortBy === "highToLow"}
            onChange={(e) => setSortBy(e.target.value)}
          />
          <label htmlFor="highToLow">High to low</label>
        </div>
      </form>

      <div className={styles.buttons}>
        <button onClick={() => setShowModalContainer(false)}>Cancel</button>
        <button onClick={sortTrucks}>Apply</button>
      </div>
    </div>
  );
}
