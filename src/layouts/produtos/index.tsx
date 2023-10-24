import "./produtos.scss";
import { motion } from "framer-motion"

import { AiFillHome } from "react-icons/ai";
import { SlEnergy } from "react-icons/sl";
import { TbMeat } from "react-icons/tb";
import { FaHamburger } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { FaAngleRight } from "react-icons/fa";
import {BsCart} from 'react-icons/bs'
// import {BsCartCheck} from 'react-icons/bs'


import {productsAll , creatine , hipercalorico , whey} from "@/services/products";
// import { addArray } from "@/services/push";  
import { useState, useContext } from "react";
import { CarContext } from "@/Context/CarContext";





export function Produtos() {

  const carContext = useContext(CarContext);
  
  if (!carContext) {
    throw new Error("CarContext is not provided");
  }

  const { addArray } = carContext;

  const buttons = [
    {
      nome: "inicio",
      icon: <AiFillHome />,
      func: productsAll,
      scale1: 0,
      scale2: 1,
    },
    {
      nome: "creatina",
      icon: <SlEnergy />,
      func: creatine,
      scale1: 0.2,
      scale2: 0.9
    },
    {
      nome: "whey",
      icon: <TbMeat />,
      func: whey,
      scale1: 0.1,
      scale2: 1.01
    },
    {
      nome: "hipercalorico",
      icon: <FaHamburger />,
      func: hipercalorico,
      scale1: 0.3,
      scale2: 1.02
    },
    {
      nome: "mais...",
      icon: <GrAdd />,
    },
  ];

  
  const [teste , setTeste] = useState(0)
  const [arrayBase , setArrayBase] = useState([...productsAll])

  // const handleIcon = ()=>{
  //   setIconCompras(BsCartCheck)
  // }
 
  const handleChoice = (array: any)=>{
    setArrayBase([...array])
  }

 const add = ()=>[
  setTeste((prev)=> prev+1)
 ]

  return (
    <section className="produtos" id="Produtos">
      <div className="container-produtos">
        <h1 className="h1-produtos">produtos</h1>

        <span className="indication">
          <FaAngleRight />
        </span>
        <span className="indication2">
          <FaAngleRight />
        </span>

        <div className="container-aside">
          {buttons.map((button, key) => (
            <div className="aside-props" key={key}>
              <button className="btn-aside-props" onClick={()=> {
                handleChoice(button.func)
                }}>
                {button.nome}
                {button.icon}
              </button>
            </div>
          ))}
        </div>

        <div className="text-produtos">
          <h1>confira nossos produtos</h1>
        </div>

        <div className="container-cards">
          {arrayBase.map((card, key) => (
            <motion.div 
            className="card"
             key={key}
             initial={{ scale: 0}}
             animate={{ scale: 1}}
             transition={{
               type: "spring",
               stiffness: 260,
               damping: 20
             }}
             whileHover={{ scale: .9 }}
             whileTap={{
               scale: 1,
             }}
             >

              <button className="button-compras" onClick={()=>{
                add()
                addArray(`${card.name}`, `${card.url}`, `${card.newPrice}`)
              }}><BsCart/>{teste}</button>

              <div className="text-card">
                <h1>
                  {card.name.toLocaleUpperCase()} {card.amount}
                </h1>

                <div className="price">
                  <h1>
                    de <span>{card.oldPrice}</span> por
                  </h1>
                  <h1 className="price-new">{card.newPrice}</h1>
                </div>

              </div>

              <img src={card.url} alt={card.attach} loading="lazy"/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
