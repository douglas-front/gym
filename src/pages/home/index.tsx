import { Nav } from "../../components/nav"
import { WhatsIcon } from "../../components/whatsapp-Icon"
import { Header } from "../../layouts/Header"
import { Produtos } from "../../layouts/produtos"
import About from "@/layouts/About"
export function Home (){
  return(
    <>
      <Nav/>
      <main>
        <Header/>
        <WhatsIcon/>
        <Produtos/>
        <About/>

        <h1>coming soon</h1>
        <h1>coming soon</h1>
        <h1>coming soon</h1>
      </main>
    </>
  )
}