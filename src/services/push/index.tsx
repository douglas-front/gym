
import { motion } from 'framer-motion';
import './push.scss';

import { CarContext } from '@/Context/CarContext';
import { useContext } from 'react';

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
  
  const carContext = useContext(CarContext);
  
  if (!carContext) {
    throw new Error("CarContext is not provided");
  }

  const { arrayBase } = carContext;

  return (
    <>
      {arrayBase.map((compra, key) => (
        
        <div key={key} className='card-shop'>
         
          <div className='bg'></div>
          <img src={compra.image} alt='' />
          <h1>{compra.name}</h1>
          <p>{compra.price}</p>
          <motion.div
            className='div-button-car'
            initial={{ translateX: 320 }}
            animate={{ translateX: 1 }}
            transition={{
              type: 'spring',
              stiffness: 460,
              damping: 15
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
