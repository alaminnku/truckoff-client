import { ITruck } from "@types";
import { useData } from "@contexts/Data";
import { FiFilter } from "react-icons/fi";
import { brands, locations } from "@utils";
import styles from "@styles/trucks/FilterModal.module.css";
import { Dispatch, useState, ChangeEvent, SetStateAction } from "react";

interface IFilterModalProps {
  setFilteredTrucks: Dispatch<SetStateAction<ITruck[]>>;
  setShowModalContainer?: Dispatch<SetStateAction<boolean>>;
}

export default function FilterModal({
  setFilteredTrucks,
  setShowModalContainer,
}: IFilterModalProps) {
  // Initial states
  const initialTruckState = {
    name: "",
    minPrice: "",
    maxPrice: "",
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
    fuso: false,
    hino: false,
    isuzu: false,
    freightliner: false,
    iveco: false,
    kenworth: false,
    mack: false,
    mercedesBenz: false,
    mitsubishi: false,
    toyota: false,
    volvo: false,
    westernStar: false,
  };

  // Hooks
  const { trucks } = useData();
  const [truckData, setTruckData] = useState<{ [key: string]: string }>(
    initialTruckState
  );
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
  function filterTrucks() {
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
      filteredTrucks = filteredTrucks.filter((truck) =>
        truck.name.toLowerCase().includes(name.toLowerCase())
      );
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

    console.log(locations);

    // Filter by locations
    if (locations.length > 0) {
      filteredTrucks = filteredTrucks.filter((truck) =>
        locations.includes(truck.location?.toLowerCase())
      );
    }

    // Filter by brands
    if (brands.length > 0) {
      filteredTrucks = filteredTrucks.filter((truck) =>
        brands.includes(truck.make?.toLowerCase())
      );
    }

    // Update state
    setFilteredTrucks(filteredTrucks);

    // Close the modal
    setShowModalContainer && setShowModalContainer(false);
  }

  return (
    <div className={styles.filter_modal}>
      <div className={styles.filter}>
        <p className={styles.title}>
          <FiFilter /> Filters
        </p>

        <form className={styles.name_and_price}>
          <input
            type="text"
            value={name}
            id="name"
            placeholder="Name"
            onChange={changeTruckData}
          />
          <div>
            <input
              type="text"
              id="minPrice"
              value={minPrice}
              placeholder="Min Price"
              onChange={changeTruckData}
            />
            <input
              type="text"
              id="maxPrice"
              value={maxPrice}
              placeholder="Max Price"
              onChange={changeTruckData}
            />
          </div>
        </form>
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
