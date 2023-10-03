import "./produtos.scss";

import { AiFillHome } from "react-icons/ai";
import { SlEnergy } from "react-icons/sl";
import { TbMeat } from "react-icons/tb";
import { FaHamburger } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { FaAngleRight } from "react-icons/fa";
import {BsCart} from 'react-icons/bs'
import {BsCartCheck} from 'react-icons/bs'


import {productsAll , creatine , hipercalorico , whey} from "@/services/products";
import { useState } from "react";



export function Produtos() {



  const buttons = [
    {
      nome: "inicio",
      icon: <AiFillHome />,
      func: productsAll
    },
    {
      nome: "creatina",
      icon: <SlEnergy />,
      func: creatine
    },
    {
      nome: "whey",
      icon: <TbMeat />,
      func: whey
    },
    {
      nome: "hipercalorico",
      icon: <FaHamburger />,
      func: hipercalorico
    },
    {
      nome: "mais...",
      icon: <GrAdd />,
    },
  ];

  const [iconCompras , setIconCompras] = useState(BsCart)

  const [arrayBase , setArrayBase] = useState([...productsAll])

  const handleIcon = ()=>{
    setIconCompras(BsCartCheck)
  }
 
  const handleChoice = (array: any)=>{
    setArrayBase([...array])
  }

  return (
    <section className="produtos">
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
              <button className="btn-aside-props" onClick={()=> handleChoice(button.func)}>
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
            <div className="card" key={key}>

              <button className="button-compras" onClick={handleIcon}>{iconCompras}</button>

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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
