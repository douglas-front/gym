import { Nav } from "../../components/nav"
import { WhatsIcon } from "../../components/whatsapp-Icon"
import { Header } from "../../layouts/Header"
import { Produtos } from "../../layouts/produtos"
import About from "@/layouts/About"
import SocialMedia from "@/layouts/SocialMedia"
export function Home (){
  return(
    <>
      <Nav/>
      <main>
        <Header/>
        <WhatsIcon/>
        <Produtos/>
        <About/>
        <SocialMedia/>

        <h1>coming soon</h1>
        <h1>coming soon</h1>
        <h1>coming soon</h1>
      </main>
    </>
  )
}