'use client';

import { AiFillHome } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { SlEnergy } from "react-icons/sl";
import { TbMeat } from "react-icons/tb";

import { IProduct } from "@/services/products/type";

import "./Options.scss"

interface OptionsProps {
  handleProducts: (attach: IProduct["attach"] | null) => void
}

export default function Options({ handleProducts }: OptionsProps) {
  return (
    <div className="Options">
      <div className="Options__props">
        <button className="Options__props__innerButton" onClick={() => handleProducts(null)}>
          inicio{""}
          <AiFillHome />
        </button>
      </div>
      <div className="Options__props">
        <button className="Options__props__innerButton" onClick={() => handleProducts("creatina")}>
          Creatina{""}
          <SlEnergy />
        </button>
      </div>
      <div className="Options__props">
        <button className="Options__props__innerButton" onClick={() => handleProducts("whey protein")}>
          Whey Protein{""}
          <TbMeat />
        </button>
      </div>
      <div className="Options__props">
        <button className="Options__props__innerButton" onClick={() => handleProducts("hipercalorico")}>
          Hiper Calórico{""}
          <FaHamburger />
        </button>
      </div>
      <div className="Options__props">
        <button className="Options__props__innerButton">
          Outros{""}
          <GrAdd />
        </button>
      </div>
    </div>
  )
}