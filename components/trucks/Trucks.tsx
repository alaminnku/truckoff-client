import Image from "next/image";
import Link from "next/link";
import { ITruck } from "@types";
import SortModal from "./SortModal";
import FilterModal from "./FilterModal";
import { useData } from "@contexts/Data";
import { useEffect, useState } from "react";
import styles from "@styles/trucks/Trucks.module.css";
import ModalContainer from "@components/layout/ModalContainer";
import { formatPrice } from "@utils";

export default function Trucks() {
  // Hooks
  const { trucks } = useData();
  const [sorted, setSorted] = useState({
    byMostRecent: false,
    byLowToHigh: false,
    byHighToLow: false,
  });
  const [showSortModal, setShowSortModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filteredTrucks, setFilteredTrucks] = useState<ITruck[]>([]);

  useEffect(() => {
    setFilteredTrucks(trucks.data);
  }, [trucks]);

  return (
    <section className={styles.trucks}>
      <h1>{filteredTrucks.length} trucks for sale in Australia</h1>

      <div className={styles.filter_and_trucks}>
        <div className={styles.side_sort_and_filter}>
          <SortModal filteredTrucks={filteredTrucks} setSorted={setSorted} />

          <FilterModal setFilteredTrucks={setFilteredTrucks} />
        </div>

        <div>
          <div className={styles.filter_and_sort}>
            <p onClick={() => setShowFilterModal(true)}>Filter</p>
            <p onClick={() => setShowSortModal(true)}>Sort</p>
          </div>

          <div className={styles.items}>
            {filteredTrucks.map((truck, index) => (
              <div className={styles.item} key={index}>
                <Image
                  src="/truckoff-hero.png"
                  width={800}
                  height={500}
                  alt="Truck image"
                />

                <div className={styles.content}>
                  <div className={styles.location_and_price}>
                    <p>{truck.location}</p>
                    <p>${formatPrice(truck.price)}</p>
                  </div>

                  <p className={styles.description}>{truck.name}</p>

                  <Link href="/view-truck">View Truck</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ModalContainer
        component={
          <FilterModal
            setFilteredTrucks={setFilteredTrucks}
            setShowModalContainer={setShowFilterModal}
          />
        }
        showModalContainer={showFilterModal}
        setShowModalContainer={setShowFilterModal}
      />

      <ModalContainer
        component={
          <SortModal
            filteredTrucks={filteredTrucks}
            setShowModalContainer={setShowSortModal}
          />
        }
        showModalContainer={showSortModal}
        setShowModalContainer={setShowSortModal}
      />
    </section>
  );
}
