import { ITruck } from "@types";
import { BiSortAlt2 } from "react-icons/bi";
import styles from "@styles/trucks/SortModal.module.css";
import { Dispatch, SetStateAction, useState } from "react";

interface ISortModalProps {
  trucks: ITruck[];
  setSorted?: Dispatch<
    SetStateAction<{
      byMostRecent: boolean;
      byLowToHigh: boolean;
      byHighToLow: boolean;
    }>
  >;
  setShowModalContainer?: Dispatch<SetStateAction<boolean>>;
}

export default function SortModal({
  trucks,
  setSorted,
  setShowModalContainer,
}: ISortModalProps) {
  // Hooks
  const [sortBy, setSortBy] = useState("mostRecent");

  // Sort trucks by price
  function sortTrucks() {
    if (sortBy === "mostRecent") {
      trucks.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    } else if (sortBy === "lowToHigh") {
      trucks.sort((a, b) => +a.price - +b.price);
    } else if (sortBy === "highToLow") {
      trucks.sort((a, b) => +b.price - +a.price);
    }

    console.log(trucks);

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
  }

  return (
    <div className={styles.sort_modal}>
      <p className={styles.title}>
        <BiSortAlt2 /> Sort options
      </p>

      <form className={styles.sort_form}>
        <div className={styles.item}>
          <input
            type="radio"
            id="mostRecent"
            name="sortTrucks"
            value="mostRecent"
            checked={sortBy === "mostRecent"}
            onChange={(e) => setSortBy(e.target.value)}
          />
          <label htmlFor="mostRecent">Most recent</label>
        </div>

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

      <button onClick={sortTrucks}>Apply</button>
    </div>
  );
}
