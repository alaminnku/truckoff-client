import { ITruck } from "@types";
import { useData } from "@contexts/Data";
import { FiFilter } from "react-icons/fi";
import styles from "@styles/trucks/FilterModal.module.css";
import { Dispatch, useState, ChangeEvent, SetStateAction } from "react";
import { brands } from "@utils";

interface IFilterModalProps {
  setTrucks: Dispatch<SetStateAction<ITruck[]>>;
  setShowModalContainer?: Dispatch<SetStateAction<boolean>>;
}

export default function FilterModal({
  setTrucks,
  setShowModalContainer,
}: IFilterModalProps) {
  // Initial states
  const initialTruckState = {
    name: "",
    minPrice: "",
    maxPrice: "",
  };

  const initialLocationState = {
    victoria: false,
    queensland: false,
    newSouthWales: false,
    southAustralia: false,
    westernAustralia: false,
  };

  const initialBrandState = {
    ford: false,
    fuso: false,
    hino: false,
    isuzu: false,
    helfightliner: false,
  };

  // Hooks
  const { allTrucks } = useData();
  const [truckData, setTruckData] = useState(initialTruckState);
  const [brandData, setBrandData] = useState(initialBrandState);
  const [locationData, setLocationData] = useState(initialLocationState);

  // Destructure data
  const { name, minPrice, maxPrice } = truckData;
  const {
    newSouthWales,
    westernAustralia,
    victoria,
    southAustralia,
    queensland,
  } = locationData;
  const { ford, fuso, hino, isuzu, helfightliner } = brandData;

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
    let filteredTrucks = allTrucks.data;

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

    // Filter by locations
    if (locations.length > 0) {
      filteredTrucks = filteredTrucks.filter((truck) =>
        locations.includes(truck.location.split(" ").join("").toLowerCase())
      );
    }

    // Filter by brands
    if (brands.length > 0) {
      filteredTrucks = filteredTrucks.filter((truck) =>
        brands.includes(truck.brand.toLowerCase())
      );
    }

    // Update state
    setTrucks(filteredTrucks);

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
          <div className={styles.item}>
            <input
              type="checkbox"
              id="newSouthWales"
              checked={newSouthWales}
              onChange={changeLocationData}
            />
            <label htmlFor="newSouthWales">New South Wales</label>
          </div>
          <div className={styles.item}>
            <input
              type="checkbox"
              id="westernAustralia"
              checked={westernAustralia}
              onChange={changeLocationData}
            />
            <label htmlFor="westernAustralia">Western Australia</label>
          </div>
          <div className={styles.item}>
            <input
              type="checkbox"
              id="victoria"
              checked={victoria}
              onChange={changeLocationData}
            />
            <label htmlFor="victoria">Victoria</label>
          </div>
          <div className={styles.item}>
            <input
              type="checkbox"
              id="southAustralia"
              checked={southAustralia}
              onChange={changeLocationData}
            />
            <label htmlFor="southAustralia">South Australia</label>
          </div>
          <div className={styles.item}>
            <input
              type="checkbox"
              id="queensland"
              checked={queensland}
              onChange={changeLocationData}
            />
            <label htmlFor="queensland">Queensland</label>
          </div>
        </form>
      </div>

      <div className={styles.filter}>
        <p className={styles.title}>Brands</p>

        <form className={styles.list}>
          {brands.map((brand, index) => (
            <div className={styles.item} key={index}>
              <input
                type="checkbox"
                id="ford"
                checked={ford}
                onChange={changeBrandData}
              />
              <label htmlFor="ford">{brand}</label>
            </div>
          ))}
        </form>
      </div>

      <button onClick={filterTrucks}>Apply</button>
    </div>
  );
}
