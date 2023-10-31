import { motion } from "framer-motion";
import "./push.scss";

import { CarContext } from "@/Context/CarContext";
import { useContext } from "react";

// export const arrayCompras = [
//   {
//     name: 'creatina double force',
//     image: image,
//     price: 'R$99,90',
//   }
// ];

// export function addArray(name: string, image: any, price: string) {

//   const objectArray = {
//     name,
//     image,
//     price
//   };

//   arrayCompras.push(objectArray);

// }

const PushCar = () => {
  const carContext = useContext(CarContext); // consumindo o contexto

  

  if (!carContext) { // verificando se há contexto
    throw new Error("CarContext is not provided");
  }

  const { arrayBase , setAddArray } = carContext; // importando o arrayBase e a função de atualizar o array

  const removeToStorage = (name: string ) => { // função remove os itens que o usuario quiser , em seguida atualiza o arrayBase

    localStorage.removeItem(name)
    setAddArray()
  };

  if(arrayBase.length == 0){
    return(
      <h1 style={{color: '#fff' , textTransform: 'uppercase' , marginTop: '50%' , marginLeft: '20%'}}>Carrinho vazio :(</h1>
    )
  }
  return (
    <>
      {arrayBase.map((compra, key) => (
        <div key={key} className="card-shop">
          <div className="bg"></div>
          <button
            className="btn-delete-car"
            onClick={() => {
              removeToStorage(compra.name);
            }}
          >
            delete
          </button>
          <img src={compra.image} alt="" />
          <h1>{compra.name}</h1>
          <p>{compra.price}</p>
          <motion.div
            className="div-button-car"
            initial={{ translateX: 320 }}
            animate={{ translateX: 1 }}
            transition={{
              type: "spring",
              stiffness: 460,
              damping: 15,
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
          >
            <button>comprar</button>
          </motion.div>
        </div>
      ))}
    </>
  );
};

export default PushCar;
