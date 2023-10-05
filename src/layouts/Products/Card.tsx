'use client';

import { IProduct } from "@/services/products/type";

import "./Card.scss"

interface CardProps
  extends IProduct { }
export default function Card({
  name,
  amount,
  attach,
  newPrice,
  oldPrice,
  url
}: CardProps) {
  return (
    <div className="Card">
      {/* <button className="Card__shopping-cart" onClick={handleIcon}>{iconCompras}</button> */}
      <img className="Card__image" src={url} alt={attach} loading="lazy" />
      <div className="Card__info">
        <h5 className="Card__info__name">{name.toLocaleUpperCase()} {amount}</h5>
        <hr />
        <p className="Card__info__price"> 
          de <span className="Card__info__price--normal">{oldPrice}</span> por {" "}
          <br />
          <span className="Card__info__price--discounted">{newPrice}</span>
        </p>
      </div>
    </div>
  )
}