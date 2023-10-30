import { createContext, useState, ReactNode, useEffect } from "react";

// tipo do array do carrinho
interface CarItem {
  name: string;
  image: string;
  price: string;
}

// tipo do contexto , funções e etc
interface CarContextType {
  arrayBase: CarItem[];
  addArray: (name: string, image: string, price: string) => void;
  setAddArray: () => void; 
}

// contexto criado e exportado
export const CarContext = createContext<CarContextType | undefined>(undefined);


export const CarProvider = ({ children }: { children: ReactNode }) => {

  const [arrayBase, setArrayBase] = useState<CarItem[]>([]); // array do carrinho

  useEffect(() => {
    const allKeys = Object.keys(localStorage); // acessando todos as chaves do local storage
    const cartItems: CarItem[] = []; // array vazio para adicionar os valores
  
    for (const key of allKeys) {
      const itemString: string | null = localStorage.getItem(key); // pegando uma unica chave de acordo com o loop
  
      if (itemString) { // verificando se existe chave
        const item: CarItem = JSON.parse(itemString); // transformando de string para objeto
        cartItems.push(item); // adicionando cada item no array que tava vazio
      }
    }
  
    setArrayBase(cartItems); // por fim setando no arrayBase
  }, []);
  // Executar apenas uma vez na inicialização

  function addArray(name: string, image: string, price: string) {
    const itemExists = arrayBase.some((item) => item.name === name); // verificando se há item com o mesmo nome

    if (!itemExists) { // caso nao exista item com o msm nome passará pela condição
      const newItem = { name, image, price }; // criando o objeto para colocar no array
      const updatedArray = [...arrayBase, newItem]; // criando um array para atualizar o arrayBase
      setArrayBase(updatedArray); // atualizando o arrayBase
      localStorage.setItem(`${name}`, JSON.stringify(newItem)); // por fim salvando no local storage de acordo com o nome
    } else {
      window.alert("Você ja adicionou esse produto ao carrinho"); // caso o usuario salve o mesmo produto exibirá um alert e não salvará no localStorage
    }
  }

  function setAddArray(){ // função para atualizar o carrinho ( o mesmo do useEffect )
    const allKeys = Object.keys(localStorage);
    const cartItems: CarItem[] = [];
  
    for (const key of allKeys) {
      const itemString: string | null = localStorage.getItem(key);
  
      if (itemString) {
        const item: CarItem = JSON.parse(itemString);
        cartItems.push(item);
      }
    }
  
    setArrayBase(cartItems);
  }

  const contextValue: CarContextType = { // exportando as funções e o arrayBase
    arrayBase,
    addArray,
    setAddArray
  };

  return (
    <CarContext.Provider value={contextValue}>{children}</CarContext.Provider>
  );
};
