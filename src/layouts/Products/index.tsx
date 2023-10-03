import "./produtos.scss";

import { useMemo, useState } from "react";

import { FaAngleRight } from "react-icons/fa";
import { BsCart } from 'react-icons/bs'
import { BsCartCheck } from 'react-icons/bs'

import Options from "./Options";

import ProductsService from "@/services/products";

import { IProduct } from '@/services/products/type'



export default function Produtos() {
  // Nessa const buttons eu não colocaria assim desse jeito, o porquê é nesse objeto Ele pussui nome, icon e uma funcionalidade que essa funcionalidade ela troca os produtos em tipo: creatina, hipercalorico e entre outras, teu código tá um pouco complexo, eu remonendo separar esse button em um componente isolado o buttons elet tem 3 funções o nome, icon e func a gente pode quebrar isso de forma melhor

  // Criei esse Attach, porque ele vai ficar responsável por trocar a exibição de produtos. no inicio vai ser nulo
  const [attach, setAttach] = useState<IProduct["attach"] | null>(null)

  // a questão do uso do useMemo é porqrue o getProductsByAttachment é um método que usa loops, para isso se você der uma olhada na doc do react sobre useMemo o use case perfeito é o useMemo, resumindo oq ele é quando a dependency que é o "attach" que tá no array, ela for diferente da passada ele reecalcula o products.
  const products = useMemo(() => {
    if(!attach) return ProductsService.getAll()

    const products = ProductsService.getProductsByAttachment(attach)
    return products
  }, [attach])

  // const [iconCompras, setIconCompras] = useState(BsCart)

  // const handleIcon = () => {
  //   setIconCompras(BsCartCheck)
  // }

  const handleProducts = (attach: IProduct["attach"] | null) => {
    setAttach(attach)
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

        <Options handleProducts={handleProducts} />

        <div className="text-produtos">
          <h1>confira nossos produtos</h1>
        </div>
        <div className="container-cards">
          {products.map((card, key) => (
            <div className="card" key={key}>
              {/* <button className="button-compras" onClick={handleIcon}>{iconCompras}</button> */}
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
              <img src={card.url} alt={card.attach} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
