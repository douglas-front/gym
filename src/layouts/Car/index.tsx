import {BsCart} from 'react-icons/bs'
import { AiOutlineClose } from "react-icons/ai";
// import { arrayCompras } from '@/services/push';
import PushCar from '@/services/push';
import './car.scss'
import { useState, useContext } from 'react';
import { CarContext } from '@/Context/CarContext';

// import { motion } from 'framer-motion';

const Car = () => {

  
  const carContext = useContext(CarContext); // consumindo o contexto
  
  if (!carContext) { // verificando se há de fato um contexto
    throw new Error("CarContext is not provided");
  }

  const { arrayBase } = carContext; // importando o arrayBase do contexto

  
  const [classe , setClasse] = useState('') // state para adicionar classe ao carrinho


  function addClass (){ // função para adicionar a classe
    setClasse(classe == 'car-on' ? 'car-off' : 'car-on')
  }

  
  return ( 
    <>
      <button className='car-button' onClick={addClass}><BsCart/> <span>{arrayBase.length}</span></button>

      
      <div className={`car-shop ${classe}`}>

        <button className='close-car' onClick={addClass}><AiOutlineClose/></button>

        <div className='controler'>
          <PushCar/>
        </div>


      </div>
    </>
   );
}
 
export default Car;