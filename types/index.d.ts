import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IContextProviderProps {
  children: ReactNode;
}

export interface ITruck {
  name: string;
  year: string;
  kilometers: string;
  gvm: string;
  bodyType: string;
  price: string;
  location: string;
  make: string;
  model: string;
  images: string[];
  createdAt: string;
}

interface IIsLoading {
  isLoading: boolean;
}

export interface ITrucks extends IIsLoading {
  data: ITruck[];
}

export interface IDataContext {
  trucks: ITrucks;
  filteredTrucks: ITruck[];
  setTrucks: Dispatch<SetStateAction<ITrucks>>;
  setFilteredTrucks: Dispatch<SetStateAction<ITruck[]>>;
}

export interface ISortModalProps {
  filteredTrucks: ITruck[];
  setSorted?: Dispatch<
    SetStateAction<{
      byMostRecent: boolean;
      byLowToHigh: boolean;
      byHighToLow: boolean;
    }>
  >;
  setShowModalContainer?: Dispatch<SetStateAction<boolean>>;
}
