import './social.scss'
import Button from '@/components/button'
import {IoLogoWhatsapp} from 'react-icons/io'
import {AiFillInstagram, AiFillFacebook} from 'react-icons/ai'
export default function SocialMedia(){


  function tolink(link: string){
    window.open(link, "_blank");
  }


  return(
    <section id="Social">
      <div className="container-social">
        <h1 className='bg'>Redes Sociais</h1>

        <div className='text-social'>
          <h1>acesse nossas redes sociais e fique por dentro de promoções exclusivas!</h1>
        </div>

        <div className='cards-social'>
          
          <div className='card' onClick={()=> tolink("https://api.whatsapp.com/send?phone=5581984671732&text=Olá!")}>
            <span><IoLogoWhatsapp/></span> 
            <Button classe='' text='Acessar'/>
          </div>

          <div className='card' onClick={()=> tolink('http://localhost:5173/gym#Produtos')}>
             <span><AiFillInstagram/></span>
            <Button classe='' text='Acessar'/>
          </div>

          <div className='card'>
            <span><AiFillFacebook/></span>
            <Button classe='' text='Acessar'/>
          </div>
        </div>
      </div>
    </section>
  )
}