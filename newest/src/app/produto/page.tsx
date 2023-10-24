
export default async function ProductPage() {
  const res = (await fetch("http://localhost:3000/api/get-product"))
  const message = (await res.json()).message
  
  // https://nextjs.org/docs/app/building-your-application/routing/route-handlers#cookies
  

  console.log(message)
  
  return ( 
    <h1>{message}</h1>
   );
}