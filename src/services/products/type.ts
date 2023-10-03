type brand = 'max titanium' | 'probiotica' | 'integral medica' | 'atp' | 'body action' | 'athletica' | 'optimum' | 'darkness' | 'universal'
type Attach = "creatina" | "whey protein" | "hipercalorico" | "protein bar" | 'pre treino'

export interface IProduct {
  attach: Attach,
  brand: brand,
  amount: string,
  url: string,
  oldPrice: string,
  name: string,
  newPrice: string,
}

type TProducts = IProduct[]

export default TProducts