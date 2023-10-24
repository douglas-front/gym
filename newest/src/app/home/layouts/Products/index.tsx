'use client'; 

// import {motion} from 'framer-motion'

import styles from './styles.module.scss'

interface ProductsProps {}

export default function Products({}: ProductsProps) {
  
  
  return (
    <section className={styles.Produtos} id="Produtos">
      <div className={styles.container}>
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

        <div 
        // className="container-cards"
          className={styles.cards}
        >
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
  
  )
}