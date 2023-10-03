import { useState } from "react";
import logo from "../../assets/img/logo.png";

import "./style.scss";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export default function NavBar() {
  const [classe, setClasse] = useState("");

  function adicionarClasse(){

    setClasse('nav_mobile_on')

    if(classe === 'nav_mobile_on'){
      setClasse('nav_mobile_off')
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
            <a href="#">Suplementos</a>
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

        <button className="mobile" onClick={adicionarClasse}>
          <BiMenuAltRight />
        </button>
      </nav>

      <div className={`nav-mobile ${classe}`}>
        <button className="exit" onClick={adicionarClasse}><AiOutlineClose/></button>
        <ul>
          <li className="focus">
            <a href="#">Suplementos</a>
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
