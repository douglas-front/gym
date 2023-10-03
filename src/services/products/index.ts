import TProducts, { IProduct } from "./type";

import creatine1 from "@/assets/img/creatina/Creatina Double Force 300g Body Action.webp"
import creatine2 from '@/assets/img/creatina/Creatina Importada Universal.webp'
import creatine3 from '@/assets/img/creatina/Creatina Integral 300g.webp'
import creatine4 from '@/assets/img/creatina/Creatina Max Titanium 150g.webp'
import creatine5 from '@/assets/img/creatina/Creatina Max Titanium 300g.webp'

import barra1 from '@/assets/img/barras/BARRINHA DE PROTEÍNA 45G COOKIES INTEGRAL.jpg'
import barra2 from '@/assets/img/barras/BARRINHA DE PROTEÍNA 45G DOCE DE COCO.png'
// import barra3 from '@/assets/img/barras/BARRINHA DE PROTEÍNA 45G ROMEU E JULIETA INTEGRAL.jpg'
// import barra4 from '@/assets/img/barras/BARRINHA DE PROTEÍNA 45G TRUFA DE AVELÃ INTEGRAL.jpg'
// import barra5 from '@/assets/img/barras/BARRINHA DE PROTEÍNA 45G  LEITE NINHO C AVELÃ INTEGRAL.jpg'
// import barra6 from '@/assets/img/barras/BARRINHA DE PROTEÍNA 45G  DUO CRONCH.jpg'

import hiper1 from '@/assets/img/hipercalorico/Hipercalórico Atlhetica Chocolate.png'
import hiper2 from '@/assets/img/hipercalorico/Hipercalórico Atlhetica morango.webp'
import hiper3 from '@/assets/img/hipercalorico/Hipercalórico MAX Morango 3kg.webp'
import hiper4 from '@/assets/img/hipercalorico/Hipercalórico Max Baunilha 3kg.png'
import hiper5 from '@/assets/img/hipercalorico/Hipercalórico Max Chocolate 3kg.png'
import hiper6 from '@/assets/img/hipercalorico/Hipercalórico Sinister 3kg Chocolate.webp'
import hiper7 from '@/assets/img/hipercalorico/Super Gainers Max Titanium 3Kg Baunilha.webp'
import hiper8 from '@/assets/img/hipercalorico/Super Gainers Max Titanium 3Kg chocolate.jpg'
import hiper9 from '@/assets/img/hipercalorico/Super Gainers Max Titanium 3Kg morango.jpg'



import whey1 from '@/assets/img/whey/cem WHEY 900G REFIL PROBIÓTICA BAUNILHA.jpg'
import whey2 from '@/assets/img/whey/cem WHEY GOLD STANDARD OPTIMUM 907G BAUNILHA.jpg'

import pre1 from '@/assets/img/preTreino/Pre Treino Évora 300g Darknes Limao.jpg'
import pre2 from '@/assets/img/preTreino/BETA HD 240G UVA C MORANGO ATLHETICA.png'

export const productsAll = [
  {
    attach: "creatina",
    brand: "body action",
    amount: "300g",
    url: creatine1,
    oldPrice: 'R$ 119,90',
    name: 'Creatina Double Force Body Action',
    newPrice: 'R$ 99,90'
  },
  {
    attach: "creatina",
    brand: "universal",
    amount: "300g",
    url: creatine2,
    oldPrice: 'R$ 129,90',
    newPrice: 'R$ 119,90',
    name: 'Creatina Importada Universal'
  },
  {
    attach: "protein bar",
    brand: "integral medica",
    amount: "45g",
    url: barra1,
    oldPrice: 'R$ 10,50',
    newPrice: 'R$ 7,50',
    name: 'BARRINHA DE PROTEÍNA / COOKIES'
  },
  {
    attach: "protein bar",
    brand: "integral medica",
    amount: "45g",
    url: barra2,
    oldPrice: 'R$ 10,50',
    newPrice: 'R$ 7,50',
    name: 'BARRINHA DE PROTEÍNA/ DOCE DE COCO '
  },
  {
    attach: "hipercalorico",
    brand: "athletica",
    amount: "2.5kg",
    url: hiper1,
    oldPrice: 'R$ 110,00',
    newPrice: 'R$ 90,00',
    name: 'Hipercalórico Atlhetica/ Chocolate'
  },
  {
    attach: "hipercalorico",
    brand: "athletica",
    amount: "2.5kg",
    url: hiper2,
    oldPrice: 'R$ 110,00',
    newPrice: 'R$ 90,00',
    name: 'Hipercalórico Atlhetica/ morango'
  },
  {
    attach: "whey protein",
    brand: "probiotica",
    amount: "900g",
    url: whey1,
    oldPrice: 'R$ 150,00',
    newPrice: 'R$ 134,90',
    name: '100% WHEY REFIL PROBIÓTICA BAUNILHA'
  },
  {
    attach: "whey protein",
    brand: "optimum",
    amount: "907g",
    url: whey2,
    oldPrice: 'R$ 289,90',
    newPrice: 'R$ 279,90',
    name: '100% WHEY GOLD OPTIMUM/ BAUNILHA'
  },
  {
    attach: "pre treino",
    brand: "darkness",
    amount: "300g",
    url: pre1,
    oldPrice: 'R$ 170,90',
    newPrice: 'R$ 158,00',
    name: 'Pre Treino Évora Darknes/ Limao'
  },
  {
    attach: "pre treino",
    brand: "athletica",
    amount: "240g",
    url: pre2,
    oldPrice: 'R$ 82,99',
    newPrice: 'R$ 75,00',
    name: 'BETA HD ATLHETICA/ UVA Com MORANGO '
  },
] as TProducts;

export const creatine = [
  {
    attach: "creatina",
    brand: "body action",
    amount: "300g",
    url: creatine1,
    oldPrice: 'R$ 119,90',
    name: 'Creatina Double Force Body Action',
    newPrice: 'R$ 99,90'
  },
  {
    attach: "creatina",
    brand: "universal",
    amount: "300g",
    url: creatine2,
    oldPrice: 'R$ 129,90',
    newPrice: 'R$ 119,90',
    name: 'Creatina Importada Universal'
  },
  {
    attach: "creatina",
    brand: "universal",
    amount: "300g",
    url: creatine3,
    oldPrice: 'R$ 129,90',
    newPrice: 'R$ 119,90',
    name: 'Creatina Importada Universal'
  },
  {
    attach: "creatina",
    brand: "integral medica",
    amount: "300g",
    url: creatine3,
    oldPrice: 'R$ 129,90',
    newPrice: 'R$ 119,90',
    name: 'Creatina Integral'
  },
  {
    attach: "creatina",
    brand: "max titanium",
    amount: "150g",
    url: creatine4,
    oldPrice: 'R$ 99,90',
    newPrice: 'R$ 89,90',
    name: 'Creatina Max Titanium'
  },
  {
    attach: "creatina",
    brand: "max titanium",
    amount: "300g",
    url: creatine5,
    oldPrice: 'R$ 129,90',
    newPrice: 'R$ 119,90',
    name: 'Creatina Max Titanium'
  },
] as TProducts

export const hipercalorico = [
  {
    attach: "hipercalorico",
    brand: "athletica",
    amount: "2.5kg",
    url: hiper1,
    oldPrice: 'R$ 110,00',
    newPrice: 'R$ 90,00',
    name: 'Hipercalórico Atlhetica/ Chocolate'
  },
  {
    attach: "hipercalorico",
    brand: "athletica",
    amount: "2.5kg",
    url: hiper2,
    oldPrice: 'R$ 110,00',
    newPrice: 'R$ 90,00',
    name: 'Hipercalórico Atlhetica/ morango'
  },
  {
    attach: "hipercalorico",
    brand: "max titanium",
    amount: "3kg",
    url: hiper3,
    oldPrice: 'R$ 130,00',
    newPrice: 'R$ 126,00',
    name: 'Hipercalórico MAX / morango'
  },
  {
    attach: "hipercalorico",
    brand: "max titanium",
    amount: "3kg",
    url: hiper4,
    oldPrice: 'R$ 130,00',
    newPrice: 'R$ 160,00',
    name: 'Hipercalórico MAX/ baunilha'
  },
  {
    attach: "hipercalorico",
    brand: "max titanium",
    amount: "3kg",
    url: hiper5,
    oldPrice: 'R$ 130,00',
    newPrice: 'R$ 126,00',
    name: 'Hipercalórico MAX/ chocolate'
  },
  {
    attach: "hipercalorico",
    brand: "integral medica",
    amount: "3kg",
    url: hiper6,
    oldPrice: 'R$ 140,00',
    newPrice: 'R$ 126,00',
    name: 'Hipercalórico Atlhetica/ chocolate'
  },
  {
    attach: "hipercalorico",
    brand: "integral medica",
    amount: "3kg",
    url: hiper6,
    oldPrice: 'R$ 140,00',
    newPrice: 'R$ 126,00',
    name: 'Hipercalórico Atlhetica/ baunilha'
  },
  {
    attach: "hipercalorico",
    brand: "integral medica",
    amount: "3kg",
    url: hiper6,
    oldPrice: 'R$ 140,00',
    newPrice: 'R$ 126,00',
    name: 'Hipercalórico Atlhetica/ morango'
  },
  {
    attach: "hipercalorico",
    brand: "max titanium",
    amount: "3kg",
    url: hiper7,
    oldPrice: 'R$ 150,00',
    newPrice: 'R$ 129,00',
    name: 'Super Gainers Max Titanium/ Baunilha'
  },
  {
    attach: "hipercalorico",
    brand: "max titanium",
    amount: "3kg",
    url: hiper8,
    oldPrice: 'R$ 150,00',
    newPrice: 'R$ 129,00',
    name: 'Super Gainers Max Titanium/ chocolate'
  },
  {
    attach: "hipercalorico",
    brand: "max titanium",
    amount: "3kg",
    url: hiper9,
    oldPrice: 'R$ 150,00',
    newPrice: 'R$ 129,00',
    name: 'Super Gainers Max Titanium/ morango'
  },
] as TProducts

export const whey = [
  {
    attach: "whey protein",
    brand: "probiotica",
    amount: "900g",
    url: whey1,
    oldPrice: 'R$ 150,00',
    newPrice: 'R$ 134,90',
    name: '100% WHEY REFIL PROBIÓTICA BAUNILHA'
  },
  {
    attach: "whey protein",
    brand: "optimum",
    amount: "907g",
    url: whey2,
    oldPrice: 'R$ 289,90',
    newPrice: 'R$ 279,90',
    name: '100% WHEY GOLD OPTIMUM/ BAUNILHA'
  },
] as TProducts

class Products {
  private products: TProducts = [
   ...creatine,
   ...hipercalorico,
   ...whey,
  ]
  constructor() { }
  public getProductsByAttachment(attach: IProduct["attach"]) {
    const products = this.products.filter(x => x.attach === attach)

    return products
  }

  public getAll() {
    return this.products
  }
}

export default new Products()

// export const barras = [
//   {
//     attach: "protein bar",
//     brand: "integral medica",
//     amount: "45g",
//     url: barra1,
//     oldPrice: 'R$ 10,50',
//     newPrice: 'R$ 7,50',
//     name:'BARRINHA DE PROTEÍNA / COOKIES'
//   },
//   {
//     attach: "protein bar",
//     brand: "integral medica",
//     amount: "45g",
//     url: barra2,
//     oldPrice: 'R$ 10,50',
//     newPrice: 'R$ 7,50',
//     name:'BARRINHA DE PROTEÍNA/ DOCE DE COCO '
//   },
//   {
//     attach: "protein bar",
//     brand: "integral medica",
//     amount: "45g",
//     url: barra3,
//     oldPrice: 'R$ 10,50',
//     newPrice: 'R$ 7,50',
//     name:'BARRINHA DE PROTEÍNA / romeu e julieta'
//   },
//   {
//     attach: "protein bar",
//     brand: "integral medica",
//     amount: "45g",
//     url: barra4,
//     oldPrice: 'R$ 10,50',
//     newPrice: 'R$ 7,50',
//     name:'BARRINHA DE PROTEÍNA/ trufa de avelã '
//   },
//   {
//     attach: "protein bar",
//     brand: "integral medica",
//     amount: "45g",
//     url: barra5,
//     oldPrice: 'R$ 10,50',
//     newPrice: 'R$ 7,50',
//     name:'BARRINHA DE PROTEÍNA / leite ninho com avelã'
//   },
//   {
//     attach: "protein bar",
//     brand: "integral medica",
//     amount: "45g",
//     url: barra6,
//     oldPrice: 'R$ 10,50',
//     newPrice: 'R$ 7,50',
//     name:'BARRINHA DE PROTEÍNA/ duo cronch '
//   },
// ]