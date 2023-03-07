import { trucks } from "@data/trucks";
import { IAllTrucks, IContextProviderProps, IDataContext } from "@types";
import { createContext, useContext, useState } from "react";

// Create context
const DataContext = createContext({} as IDataContext);

// Data hook
export const useData = () => useContext(DataContext);

// Provider function
export default function DataProvider({ children }: IContextProviderProps) {
  // Hooks
  const [allTrucks, setAllTrucks] = useState<IAllTrucks>({
    isLoading: true,
    data: trucks,
  });

  return (
    <DataContext.Provider value={{ allTrucks, setAllTrucks }}>
      {children}
    </DataContext.Provider>
  );
}
