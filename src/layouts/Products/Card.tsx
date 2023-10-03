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
      {/* <button className="button-compras" onClick={handleIcon}>{iconCompras}</button> */}
      <div className="Card__info">
        <h1 className="Card__info__name">{name.toLocaleUpperCase()} {amount}</h1>

        <div className="Card__info__price">
          <h1>de <span>{oldPrice}</span> por</h1>
          <h1 className="Card__info__price--discounted">{newPrice}</h1>
        </div>
      </div>
      <img src={url} alt={attach} loading="lazy" />
    </div>
  )
}