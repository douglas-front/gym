import { useState } from "react";
import logo from "../../assets/img/logo.png";
import "./nav.scss";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import Car from "@/layouts/Car";


export function Nav() {
  const [classe, setClasse] = useState("");

  function adicionarClasse() {
    if (classe === 'nav_mobile_on') {
      setClasse('nav_mobile_off');
      document.body.classList.remove('nav-on');
    } else {
      setClasse('nav_mobile_on');
      document.body.classList.add('nav-on');
    }
  }

  return (
    <>
      <nav>
        <div className="logo-div">
          <img src={logo} alt="logo classic" />
        </div>

        <ul>
          <li className="focus">
            <a href="#Produtos">Suplementos</a>
          </li>
          <li>
            <a href="#">Endereço</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <Car/>
          </li>
        </ul>

        {/* botao mobile */}
        <div className="nav-mobile-btns">
          <Car/>
          <button className="mobile" onClick={adicionarClasse}>
            <BiMenuAltRight />
          </button>
        </div>

      </nav>

      {/* div mobile */}
      <div className={`nav-mobile ${classe}`} >

        <button className="exit" onClick={adicionarClasse}><AiOutlineClose/></button>


        <ul>
          <li className="focus">
            <a href="#Produtos">Suplementos</a>
          </li>
          <li>
            <a href="#">Endereço</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          
        </ul>

      </div>

    </>
  );
}
