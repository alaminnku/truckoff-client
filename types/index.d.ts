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
  origin: string;
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

export interface ISortTrucksProps {
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

export interface IFilters {
  name: string;
  brands: string[];
  locations: string[];
}

export interface IFilterTrucksProps {
  setFilters: Dispatch<SetStateAction<IFilters>>;
  setShowAllFilters?: Dispatch<SetStateAction<boolean>>;
  setFilteredTrucks: Dispatch<SetStateAction<ITruck[]>>;
}

export interface ITrucksProps {
  filters: IFilters;
  setFilters: Dispatch<SetStateAction<IFilters>>;
}

export interface IHeadSectionProps {
  title: string;
  pageType: string;
  ogTitle: string;
}

export interface IInitialTruckState {
  name: string;
  minPrice: number;
  maxPrice: number;
}
