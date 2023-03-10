import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IContextProviderProps {
  children: ReactNode;
}

export interface ITruck {
  name: string;
  year: string;
  type: string;
  kilometres: string;
  colour: string;
  transmission: string;
  engine: string;
  power: string;
  GCM: string;
  GVM: string;
  driveType: string;
  body: string;
  suspension: string;
  VIN: string;
  Reg: string;
  stock: string;
  price: string;
  location: string;
  brand: string;
  createdAt: string;
}

interface IIsLoading {
  isLoading: boolean;
}

export interface IAllTrucks extends IIsLoading {
  data: ITruck[];
}

export interface IDataContext {
  trucks: ITruck[];
  allTrucks: IAllTrucks;
  setTrucks: Dispatch<SetStateAction<ITruck[]>>;
  setAllTrucks: Dispatch<SetStateAction<IAllTrucks>>;
}
