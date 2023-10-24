import { createContext, useState, ReactNode } from "react";
// import image from '@/assets/img/creatina/Creatina Double Force 300g Body Action.webp';

type ArrayItem = {
  name: string;
  image: string;
  price: string;
};

type CarContextType = {
  arrayBase: ArrayItem[];
  addArray: (name: string, image: string, price: string) => void;
};

export const CarContext = createContext<CarContextType | undefined>(undefined);

export const CarProvider = ({ children }: { children: ReactNode }) => {
  const [arrayBase, setArrayBase] = useState<ArrayItem[]>([
    
  ]);



  function addArray(name: string, image: string, price: string) {
    setArrayBase([...arrayBase, { name, image, price }]);
  }

  if (CarContext.Provider === undefined) {
    throw new Error("useCarContext must be used within a CarProvider");
  }
  

  const contextValue: CarContextType = {
    arrayBase,
    addArray,
  };

  return (
    <CarContext.Provider value={contextValue}>
      {children}
    </CarContext.Provider>
  );
};
