import {BsCart} from 'react-icons/bs'
import { AiOutlineClose } from "react-icons/ai";
import { arrayCompras } from '@/services/push';

import './car.scss'
import { useState } from 'react';

import { motion } from 'framer-motion';

const Car = () => {

  // const [arrayBase , setArrayBase] = useState([...arrayCompras])
  const [classe , setClasse] = useState('')


  // console.log(arrayBase , 'base')
  function addClass (){
    setClasse(classe == 'car-on' ? 'car-off' : 'car-on')
  }

  
  return ( 
    <>
      <button className='car-button' onClick={addClass}><BsCart/></button>

      <div className={`car-shop ${classe}`}>

        <button className='close-car' onClick={addClass}><AiOutlineClose/></button>

        <div className='controler'>
          {arrayCompras.map((compra, key)=>(
            
          <div key={key}  className='card-shop'>
          <div className='bg'></div>
          <img src={compra.image} alt="" />
          <h1>{compra.name}</h1>
         
          <p>{compra.price}</p>

          <motion.div
           className='div-button-car'

           initial={{ translateX: 320}}
           animate={{ translateX: 1}}
           transition={{
            type: "spring",
            stiffness: 460,
            damping: 15
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{
            scale: 1.1,
          }}
           >
            <button>comprar</button>
          </motion.div>
          
        </div>
          ))}
        
        </div>


      </div>
    </>
   );
}
 
export default Car;