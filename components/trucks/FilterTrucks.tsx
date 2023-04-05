import { useData } from "@contexts/Data";
import { brands, locations } from "@utils";
import styles from "@styles/trucks/FilterTrucks.module.css";
import { IFilterTrucksProps, IInitialTruckState } from "@types";
import React, { useState, ChangeEvent, FormEvent, CSSProperties } from "react";

export default function FilterTrucks({
  setFilters,
  setFilteredTrucks,
  setShowAllFilters,
}: IFilterTrucksProps) {
  // Initial states
  const initialTruckState = {
    name: "",
    minPrice: 0,
    maxPrice: 10000,
  };

  const initialLocationState = {
    NSW: false,
    VIC: false,
    QLD: false,
    WA: false,
    SA: false,
  };

  const initialBrandState = {
    ford: false,
    mack: false,
    fuso: false,
    hino: false,
    isuzu: false,
    iveco: false,
    volvo: false,
    toyota: false,
    western: false,
    kenworth: false,
    mercedes: false,
    mitsubishi: false,
    freightliner: false,
  };

  // Hooks
  const { trucks } = useData();
  const [truckData, setTruckData] =
    useState<IInitialTruckState>(initialTruckState);
  const [brandData, setBrandData] = useState<{ [key: string]: boolean }>(
    initialBrandState
  );
  const [locationData, setLocationData] = useState<{ [key: string]: boolean }>(
    initialLocationState
  );

  // Destructure data
  const { name, minPrice, maxPrice } = truckData;

  // Change truck data
  function changeTruckData(e: ChangeEvent<HTMLInputElement>) {
    setTruckData((currState) => ({
      ...currState,
      [e.target.id]: e.target.value,
    }));
  }

  // Change location data
  function changeLocationData(e: ChangeEvent<HTMLInputElement>) {
    setLocationData((currState) => ({
      ...currState,
      [e.target.id]: e.target.checked,
    }));
  }

  // Change brand data
  function changeBrandData(e: ChangeEvent<HTMLInputElement>) {
    setBrandData((currState) => ({
      ...currState,
      [e.target.id]: e.target.checked,
    }));
  }

  // Filter trucks
  function filterTrucks(e: FormEvent) {
    e.preventDefault();

    // Create empty array
    let filteredTrucks = trucks.data;

    // Create locations array
    const locations = Object.entries(locationData)
      .filter((data) => data[1] === true)
      .map((data) => data[0].toLowerCase());

    // Create brands array
    const brands = Object.entries(brandData)
      .filter((data) => data[1] === true)
      .map((data) => data[0].toLowerCase());

    // Filter by name
    if (name) {
      setFilters((currState) => ({ ...currState, name }));

      filteredTrucks = filteredTrucks.filter((truck) =>
        truck.name.toLowerCase().includes(name.toLowerCase())
      );
    } else {
      setFilters((currState) => ({ ...currState, name: "" }));
    }

    // Filter by minimum price
    if (minPrice) {
      filteredTrucks = filteredTrucks.filter(
        (truck) => +truck.price > +minPrice
      );
    }

    // Filter by maximum price
    if (maxPrice) {
      filteredTrucks = filteredTrucks.filter(
        (truck) => +truck.price < +maxPrice
      );
    }

    // Filter by locations
    if (locations.length > 0) {
      setFilters((currState) => ({ ...currState, locations }));

      filteredTrucks = filteredTrucks.filter((truck) =>
        locations.includes(truck.location?.toLowerCase())
      );
    } else {
      setFilters((currState) => ({ ...currState, locations: [] }));
    }

    // Filter by brands
    if (brands.length > 0) {
      setFilters((currState) => ({ ...currState, brands }));

      filteredTrucks = filteredTrucks.filter((truck) =>
        brands.some(
          (brand) =>
            brand === truck.make?.toLowerCase() ||
            truck.name.toLowerCase().includes(brand)
        )
      );
    } else {
      setFilters((currState) => ({ ...currState, brands: [] }));
    }

    // Update state
    setFilteredTrucks(filteredTrucks);

    // Close the UI
    setShowAllFilters && setShowAllFilters(false);
  }

  // Change slider range
  function handleChangeRange(e: ChangeEvent<HTMLInputElement>) {
    const gap = 3000;
    const id = e.target.id;
    const value = e.target.value;

    setTruckData((currState) => ({
      ...currState,
      [id]:
        id === "minPrice"
          ? currState.maxPrice - +value <= gap
            ? currState.maxPrice - gap
            : +value
          : +value - currState.minPrice <= gap
          ? currState.minPrice + gap
          : +value,
    }));
  }

  return (
    <div className={styles.filter_trucks}>
      <p className={styles.title}>Filters</p>

      <form onSubmit={filterTrucks} className={styles.name}>
        <input
          type="text"
          value={name}
          id="name"
          onChange={changeTruckData}
          placeholder="Search by keyword.."
        />
        <input type="submit" hidden />
      </form>

      <div className={styles.price_range}>
        <div className={styles.slider}>
          <div
            className={styles.progress}
            style={
              {
                "--progress_left": `${minPrice / 100}%`,
                "--progress_right": ` ${100 - maxPrice / 100}%`,
              } as CSSProperties
            }
          ></div>
        </div>

        <div className={styles.range}>
          <input
            type="range"
            id="minPrice"
            min={0}
            max={10000}
            step={1000}
            value={minPrice}
            onChange={handleChangeRange}
          />

          <input
            type="range"
            id="maxPrice"
            min={0}
            max={10000}
            step={1000}
            value={maxPrice}
            onChange={handleChangeRange}
          />
        </div>

        <div
          className={styles.prices}
          style={
            {
              "--margin_left": `${minPrice / 100 - 1}%`,
              "--margin_right": ` ${100 - maxPrice / 100 - 3}%`,
            } as CSSProperties
          }
        >
          <p>${minPrice / 1000}k</p>
          <p>${maxPrice / 1000}k</p>
        </div>
      </div>

      <div className={styles.filter}>
        <p className={styles.title}>Locations</p>

        <form className={styles.list}>
          {locations.map((location, index) => (
            <div className={styles.item} key={index}>
              <input
                type="checkbox"
                id={location[0]}
                checked={locationData[location[0]]}
                onChange={changeLocationData}
              />
              <label htmlFor={location[0]}>{location[1]}</label>
            </div>
          ))}
        </form>
      </div>

      <div className={styles.filter}>
        <p className={styles.title}>Brands</p>

        <form className={styles.list}>
          {brands.map((brand, index) => (
            <div className={styles.item} key={index}>
              <input
                type="checkbox"
                id={brand[0]}
                checked={brandData[brand[0]]}
                onChange={changeBrandData}
              />
              <label htmlFor={brand[0]}>{brand[1]}</label>
            </div>
          ))}
        </form>
      </div>

      <button onClick={filterTrucks}>Apply</button>
    </div>
  );
}
