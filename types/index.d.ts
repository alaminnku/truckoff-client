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
  setTrucks: Dispatch<SetStateAction<ITrucks>>;
}
