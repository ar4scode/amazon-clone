import { useEffect, useState } from "react";
import rating from "../assets/ratings/rating-0.png" // for test

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('../products.json')
      .then(res => res.json())
      .then(setProducts)
      .catch(error => console.log("Can not fetch Data", error))
  }, [])

  
  return (
    <main className="grid grid-cols-5 gap-4">
      {products.map((product) => {
        return (
          <div className="flex flex-col">
            <img src={product.image} alt="" />
            <p>{product.name}</p>
            <div className="flex">
              <img src={rating} alt="" />
              <p>{product.rating.count}</p>
            </div>
            <p>{product.priceCents / 100}$</p>
            <select value="">
              <option name="one" id="">1</option>
              <option name="two" id="">2</option>
              <option name="three" id="">3</option>
            </select>
              <button>Add to Cart</button>
          </div>
        )
      })}
    </main>
  )
}

export default Products;