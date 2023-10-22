import './header.scss'
import {motion} from 'framer-motion'
// import imagem from '@/assets'

export function Header() {

  
    return (
      <header>
        <div className="container-header">
          
          
          <div className='text-header'>

            <h1>Classic suplementos</h1>

            <motion.div 
            className="p-text"
            
            initial={{ translateX: 520}}
            animate={{ translateX: 1}}
            transition={{
             type: "spring",
             stiffness: 460,
             damping: 15,
             delay: 0.1
           }}
            >
              <p>confira nossa infinita possibilidades de suplementos</p>
              <p>promoções e preços baixos para você!</p>
            </motion.div>

            <motion.div
             className='div-button-header'

             initial={{ translateX: 320}}
             animate={{ translateX: 1}}
             transition={{
              type: "spring",
              stiffness: 460,
              damping: 15
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 1.1,
            }}
             >
              <button>Saiba mais!</button>
            </motion.div>

          </div>

          <div className='bg'></div>
          
        </div>
      </header>
    );
}
