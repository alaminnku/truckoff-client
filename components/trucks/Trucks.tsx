import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { locations } from "@utils";
import { formatPrice } from "@utils";
import SortTrucks from "./SortTrucks";
import { ITrucksProps } from "@types";
import FilterTrucks from "./FilterTrucks";
import { useData } from "@contexts/Data";
import styles from "@styles/trucks/Trucks.module.css";
import SectionLoader from "@components/layout/SectionLoader";
import ModalContainer from "@components/layout/ModalContainer";

export default function Trucks({ filters, setFilters }: ITrucksProps) {
  // Hooks
  const { trucks, filteredTrucks, setFilteredTrucks } = useData();
  const [sorted, setSorted] = useState({
    byMostRecent: false,
    byLowToHigh: false,
    byHighToLow: false,
  });
  const [showSortModal, setShowSortModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);

  return (
    <section className={styles.trucks}>
      {trucks.isLoading && <SectionLoader />}

      {!trucks.isLoading && trucks.data.length === 0 && (
        <h2>No trucks found</h2>
      )}

      {!trucks.isLoading && trucks.data.length > 0 && (
        <>
          <h1>
            {filteredTrucks.length}{" "}
            {filters.name && filters.brands.length === 0 ? filters.name : ""}
            {!filters.name && filters.brands.length === 1
              ? filters.brands[0]
              : ""}{" "}
            trucks for sale in{" "}
            {filters.locations.length === 1
              ? locations.find(
                  (location) =>
                    location[0].toLowerCase() === filters.locations[0]
                )![1]
              : "Australia"}
          </h1>

          <div className={styles.filter_and_trucks}>
            <div className={styles.side_sort_and_filter}>
              <SortTrucks
                setSorted={setSorted}
                filteredTrucks={filteredTrucks}
              />

              <FilterTrucks
                setFilters={setFilters}
                setFilteredTrucks={setFilteredTrucks}
              />
            </div>

            <div>
              <div className={styles.filter_and_sort}>
                <p onClick={() => setShowFilterModal(true)}>Filter</p>
                <p onClick={() => setShowSortModal(true)}>Sort</p>
              </div>

              <div className={styles.items}>
                {filteredTrucks.map((truck, index) => (
                  <div className={styles.item} key={index}>
                    <Link
                      href="/view-truck"
                      onClick={() =>
                        localStorage.setItem("origin", truck.origin)
                      }
                    >
                      <div className={styles.image}>
                        <Image
                          src={truck.images[0]}
                          width={800}
                          height={500}
                          alt="Truck image"
                        />

                        <p className={styles.location}>{truck.location}</p>
                      </div>
                    </Link>

                    <div className={styles.content}>
                      <p className={styles.price}>
                        ${formatPrice(truck.price)}
                      </p>

                      <p className={styles.description}>{truck.name}</p>

                      <Link
                        className={styles.view_truck_button}
                        href="/view-truck"
                        onClick={() =>
                          localStorage.setItem("origin", truck.origin)
                        }
                      >
                        View Truck
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      <ModalContainer
        component={
          <FilterTrucks
            setFilters={setFilters}
            setFilteredTrucks={setFilteredTrucks}
            setShowModalContainer={setShowFilterModal}
          />
        }
        showModalContainer={showFilterModal}
        setShowModalContainer={setShowFilterModal}
      />

      <ModalContainer
        component={
          <SortTrucks
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
