import './header.scss'
import {motion} from 'framer-motion'
// import imagem from '@/assets'
import Button from '@/components/button';

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

           <Button text='Saiba Mais!'/>
           
          </div>

          <div className='bg'></div>
          
        </div>
      </header>
    );
}
