import { Nav } from "../../components/nav"
import { WhatsIcon } from "../../components/whatsapp-Icon"
import { Header } from "../../layouts/Header"
import { Produtos } from "../../layouts/produtos"

export function Home (){
  return(
    <>
      <Nav/>
      <main>
        <Header/>
        <WhatsIcon/>
        <Produtos/>
      
      </main>
    </>
  )
}