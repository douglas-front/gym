import './about.scss'
import image from '@/assets/img/logo.png'
import Button from '@/components/button'



export default function About(){


  return(
    <section id="About">
      <div className="container-about">
        <div className='bg'></div>

        <div className='image-about'>
          <img src={image} alt="" />
        </div>

        <div className='text-about'>
            <h1>Descubra o maior potencial da sua genetica</h1>
            <p>Nossa loja tem as melhores opções e variedades de suplementos da região</p>
            <p>Nos preocupamos em dar as melhores opções para você!</p>
            
              <ul>
                <li>°ganho de massa</li>
                <li>°emagrecimento</li>
                <li>°energia</li>
                <li>°força</li>
                {/* <li>°E muito mais</li> */}
              </ul>


              <Button text='Endereço' classe='btn'/>
              <Button text='Suplementos' classe='btn'/>
      
        </div>

      </div>
    </section>
  )
}