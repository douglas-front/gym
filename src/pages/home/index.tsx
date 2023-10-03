import Navbar from "@/components/Navbar"

import WhatsappIcon from "@/components/WhatsappIcon"

import "./page.scss"

import Hero from '@/layouts/Hero'
import Produtos from "@/layouts/Products"

export function Home() {
  return (
    <>
      <Navbar />
      {/* Aqui tu pode ver que eu coloquei um id só pra formatar o layout da página */}
      <main id="Home">
        <Hero />
        <WhatsappIcon />
        <Produtos />
      </main>
    </>
  )
}