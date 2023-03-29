import { useState } from "react";
import { IFilters } from "@types";
import { useData } from "@contexts/Data";
import Trucks from "@components/trucks/Trucks";
import HeadSection from "@components/layout/HeadSection";

export default function TrucksPage() {
  // Hooks
  const { filteredTrucks } = useData();
  const [filters, setFilters] = useState<IFilters>({
    name: "",
    brands: [],
    locations: [],
  });

  return (
    <>
      <HeadSection
        pageType="website"
        ogTitle="Trucks for sales in Australia"
        title={`${filteredTrucks.length} ${
          filters.name && filters.brands.length === 0 ? filters.name : ""
        } ${
          !filters.name && filters.brands.length === 1 ? filters.brands[0] : ""
        } trucks for sale in ${
          filters.locations.length === 1
            ? filters.locations[0].toUpperCase()
            : "Australia"
        }`}
      />

      <main>
        <Trucks filters={filters} setFilters={setFilters} />
      </main>
    </>
  );
}
