import { FiFilter } from "react-icons/fi";
import styles from "@styles/trucks/FilterModal.module.css";
import { ChangeEvent, useState } from "react";

export default function FilterModal() {
  // Initial states
  const initialTruckState = {
    name: "",
    minPrice: "",
    maxPrice: "",
  };

  const initialLocationState = {
    newSouthWales: false,
    westernAustralia: false,
    victoria: false,
    southAustralia: false,
    queensland: false,
  };

  const initialBrandState = {
    ford: false,
    helfightliner: false,
    fuso: false,
    hino: false,
    isuzu: false,
  };

  // Hooks
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
  function handleChangeTruckData(e: ChangeEvent<HTMLInputElement>) {
    setTruckData((currState) => ({
      ...currState,
      [e.target.id]: e.target.value,
    }));
  }

  // Change location data
  function handleChangeLocationData(e: ChangeEvent<HTMLInputElement>) {
    setLocationData((currState) => ({
      ...currState,
      [e.target.id]: e.target.checked,
    }));
  }

  // Change brand data
  function handleChangeBrandData(e: ChangeEvent<HTMLInputElement>) {
    setBrandData((currState) => ({
      ...currState,
      [e.target.id]: e.target.checked,
    }));
  }

  console.log({ ...truckData, ...locationData, ...brandData });

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
            onChange={handleChangeTruckData}
          />
          <div>
            <input
              type="text"
              id="minPrice"
              value={minPrice}
              placeholder="Min Price"
              onChange={handleChangeTruckData}
            />
            <input
              type="text"
              id="maxPrice"
              placeholder="Max Price"
              onChange={handleChangeTruckData}
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
              onChange={handleChangeLocationData}
            />
            <label htmlFor="newSouthWales">New South Wales</label>
          </div>
          <div className={styles.item}>
            <input
              type="checkbox"
              id="westernAustralia"
              checked={westernAustralia}
              onChange={handleChangeLocationData}
            />
            <label htmlFor="westernAustralia">Western Australia</label>
          </div>
          <div className={styles.item}>
            <input
              type="checkbox"
              id="victoria"
              checked={victoria}
              onChange={handleChangeLocationData}
            />
            <label htmlFor="victoria">Victoria</label>
          </div>
          <div className={styles.item}>
            <input
              type="checkbox"
              id="southAustralia"
              checked={southAustralia}
              onChange={handleChangeLocationData}
            />
            <label htmlFor="southAustralia">South Australia</label>
          </div>
          <div className={styles.item}>
            <input
              type="checkbox"
              id="queensland"
              checked={queensland}
              onChange={handleChangeLocationData}
            />
            <label htmlFor="queensland">Queensland</label>
          </div>
        </form>
      </div>

      <div className={styles.filter}>
        <p className={styles.title}>Locations</p>

        <form className={styles.list}>
          <div className={styles.item}>
            <input
              type="checkbox"
              id="ford"
              checked={ford}
              onChange={handleChangeBrandData}
            />
            <label htmlFor="ford">Ford</label>
          </div>
          <div className={styles.item}>
            <input
              type="checkbox"
              id="helfightliner"
              checked={helfightliner}
              onChange={handleChangeBrandData}
            />
            <label htmlFor="helfightliner">Helfightliner</label>
          </div>
          <div className={styles.item}>
            <input
              type="checkbox"
              id="fuso"
              checked={fuso}
              onChange={handleChangeBrandData}
            />
            <label htmlFor="fuso">Fuso</label>
          </div>
          <div className={styles.item}>
            <input
              type="checkbox"
              id="hino"
              checked={hino}
              onChange={handleChangeBrandData}
            />
            <label htmlFor="hino">Hino</label>
          </div>
          <div className={styles.item}>
            <input
              type="checkbox"
              id="isuzu"
              checked={isuzu}
              onChange={handleChangeBrandData}
            />
            <label htmlFor="isuzu">Isuzu</label>
          </div>
        </form>
      </div>

      <button>Apply</button>
    </div>
  );
}
