import image from '@/assets/img/creatina/Creatina Double Force 300g Body Action.webp'

export const arrayCompras = [{
  name: 'creatina double force',
  image: image,
  price: 'R$99,90'
}]

export function addArray(name: string , image: any , price: string){

  const objectArray={
    name,
    image,
    price
  }

  arrayCompras.push(objectArray)
}
