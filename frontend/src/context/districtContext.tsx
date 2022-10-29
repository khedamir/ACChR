import React, { PropsWithChildren, useState } from "react";
import districts from "./district.json";

export interface StateType {
  activeDisctrict?: iDistrict;
  setActiveDistrict: (value?: iDistrict) => void;
  districts: iDistrict[];
}

export interface iDistrict {
  name: string;
  coordinates: number[][][];
  constructions: iConstructions[];
}

export interface iConstructions {
  name: string;
  count: number;
  cost: number;
}

const menuContext = React.createContext<StateType>({
  districts: districts,
  setActiveDistrict: (value) => {
    console.log("defoult Value idOpenTab");
  },
});

const DisctrictsProvider = (props: PropsWithChildren<any>) => {
  const [activeDistrict, setActiveDistrict] = useState<iDistrict>();
  return (
    <menuContext.Provider
      value={{
        activeDisctrict: activeDistrict,
        setActiveDistrict: setActiveDistrict,
        districts: districts,
      }}
      {...props}
    />
  );
};

const useDistrictsContext = () => React.useContext(menuContext);

export { DisctrictsProvider, useDistrictsContext };
