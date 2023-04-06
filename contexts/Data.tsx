import { ITrucks, IContextProviderProps, IDataContext, ITruck } from "@types";
import { createContext, useContext, useEffect, useState } from "react";

// Create context
const DataContext = createContext({} as IDataContext);

// Data hook
export const useData = () => useContext(DataContext);

// Provider function
export default function DataProvider({ children }: IContextProviderProps) {
  // Hooks
  const [trucks, setTrucks] = useState<ITrucks>({
    data: [],
    isLoading: true,
  });
  const [filteredTrucks, setFilteredTrucks] = useState<ITruck[]>([]);

  // Get all trucks
  useEffect(() => {
    async function getTrucks() {
      try {
        // Make request to the backend
        const trucks: ITruck[] = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/trucks`
        ).then((res) => res.json());

        // Update state
        setFilteredTrucks(trucks);
        setTrucks({ isLoading: false, data: trucks });
      } catch (err) {
        // Log error
        console.log(err);

        // Update state
        setTrucks((currState) => ({ ...currState, isLoading: false }));
      }
    }

    // Call the function
    getTrucks();
  }, []);

  return (
    <DataContext.Provider
      value={{ trucks, setTrucks, filteredTrucks, setFilteredTrucks }}
    >
      {children}
    </DataContext.Provider>
  );
}
