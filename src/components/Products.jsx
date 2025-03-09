import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    fetch('../products.json')
      .then(res => res.json())
      .then(setProducts)
      .catch(error => console.log("Can not fetch Data", error))
  }, [])

  
  return (
    <main>
      
    </main>
  )
}

export default Products;