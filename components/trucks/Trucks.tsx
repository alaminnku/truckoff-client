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
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Trucks({ filters, setFilters }: ITrucksProps) {
  // Hooks
  const { trucks, filteredTrucks, setFilteredTrucks } = useData();
  const [sorted, setSorted] = useState({
    byMostRecent: false,
    byLowToHigh: false,
    byHighToLow: false,
  });
  const [showAllFilters, setShowAllFilters] = useState(false);

  return (
    <section
      className={`${styles.trucks} ${showAllFilters && styles.show_filters}`}
    >
      {trucks.isLoading && <SectionLoader />}

      {!trucks.isLoading && trucks.data.length === 0 && (
        <h2>No trucks found</h2>
      )}

      {!trucks.isLoading && trucks.data.length > 0 && (
        <div className={styles.filters_and_trucks}>
          {/* Side filters */}
          <div className={styles.side_filters}>
            <SortTrucks setSorted={setSorted} filteredTrucks={filteredTrucks} />

            <FilterTrucks
              setFilters={setFilters}
              setFilteredTrucks={setFilteredTrucks}
            />
          </div>

          {/* Filters controller */}
          <div
            className={`${styles.filters_controller} ${
              showAllFilters && styles.show_filters
            }`}
            onClick={() => setShowAllFilters((currState) => !currState)}
          >
            <p>All Filters</p>

            {showAllFilters ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>

          {/* Middle filters */}
          <div
            className={`${styles.middle_filters} ${
              showAllFilters && styles.show_filters
            }`}
          >
            <SortTrucks setSorted={setSorted} filteredTrucks={filteredTrucks} />

            <FilterTrucks
              setFilters={setFilters}
              setShowAllFilters={setShowAllFilters}
              setFilteredTrucks={setFilteredTrucks}
            />
          </div>

          <div>
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

            <div className={styles.items}>
              {filteredTrucks.map((truck, index) => (
                <div className={styles.item} key={index}>
                  <Link
                    href="/view-truck"
                    onClick={() => localStorage.setItem("origin", truck.origin)}
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
                    <p className={styles.price}>${formatPrice(truck.price)}</p>

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
      )}
    </section>
  );
}
