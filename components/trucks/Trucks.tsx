import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SortModal from "./SortModal";
import FilterModal from "./FilterModal";
import { useData } from "@contexts/Data";
import styles from "@styles/trucks/Trucks.module.css";
import ModalContainer from "@components/layout/ModalContainer";

export default function Trucks() {
  // Hooks
  const { allTrucks } = useData();
  const [trucks, setTrucks] = useState(allTrucks.data);
  const [showSortModal, setShowSortModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);

  return (
    <section className={styles.trucks}>
      <h1>{trucks.length} trucks for sale in Australia</h1>

      <div className={styles.filter_and_sort}>
        <p onClick={() => setShowFilterModal(true)}>Filter</p>
        <p onClick={() => setShowSortModal(true)}>Sort</p>
      </div>

      <div className={styles.items}>
        {trucks.map((truck, index) => (
          <div className={styles.item} key={index}>
            <Image
              src="/truckoff-hero.png"
              width={800}
              height={500}
              alt="Truck image"
            />

            <div className={styles.content}>
              <div className={styles.name_and_price}>
                <p>Truck name</p>
                <p>${truck.price}</p>
              </div>

              <p className={styles.description}>{truck.name}</p>

              <Link href="/view-truck">View Truck</Link>
            </div>
          </div>
        ))}
      </div>

      <ModalContainer
        component={
          <FilterModal
            setTrucks={setTrucks}
            setShowModalContainer={setShowSortModal}
          />
        }
        showModalContainer={showFilterModal}
        setShowModalContainer={setShowFilterModal}
      />

      <ModalContainer
        component={
          <SortModal trucks={trucks} setShowModalContainer={setShowSortModal} />
        }
        showModalContainer={showSortModal}
        setShowModalContainer={setShowSortModal}
      />
    </section>
  );
}
