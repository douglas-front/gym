"use client";
import { motion } from "framer-motion";

interface CardProps {
  name: string,
  url: string,
  newPrice: number,
  amount: number,
  old
}

const CONFIG = {
  type: "spring",
  stiffness: 260,
  damping: 20,
};

export default function Card({name, newPrice, url, amount}: CardProps) {
  return (
    <motion.div
      className="card"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={CONFIG}
      whileHover={{ scale: 0.9 }}
      whileTap={{
        scale: 1,
      }}
    >
      <button
        className="button-compras"
        onClick={() => {
          add();
          addArray(`${name}`, `${url}`, `${newPrice}`);
        }}
      >
        <BsCart />
        {teste}
      </button>

      <div className="text-card">
        <h1>
          {card.name.toLocaleUpperCase()} {amount}
        </h1>

        <div className="price">
          <h1>
            de <span>{card.oldPrice}</span> por
          </h1>
          <h1 className="price-new">{newPrice}</h1>
        </div>
      </div>

      <img src={card.url} alt={card.attach} loading="lazy" />
    </motion.div>
  );
}
