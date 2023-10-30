type brand = 'max titanium' | 'probiotica' | 'integral medica' | 'atp' | 'body action' | 'athletica' | 'optimum' | 'darkness' | 'universal' | 'vitafor' | 'nutrata' | 'profit' | 'syntha' | 'DCX' | 'DUX'
type Attach = "creatina" | "whey protein" | "hipercalorico" | "protein bar" | 'pre treino'

interface Product {
  attach: Attach,
  brand: brand,
  amount: string,
  url: string,
  oldPrice: string,
  name: string,
  newPrice: string,
}

type Products = Product[]

export default Products

// tipagem dos arrays para as descrições ( em  services/products/index.ts)