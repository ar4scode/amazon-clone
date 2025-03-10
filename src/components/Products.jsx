import { useEffect, useState } from "react";
import Rating from "./Rating";

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('../products.json')
      .then(res => res.json())
      .then(setProducts)
      .catch(error => console.log("Can not fetch Data", error))
  }, [])

  
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:gap-30 lg:grid-cols-3 lg:gap-20 xl:grid-cols-5 xl:gap-6 gap-4 mt-15 p-5">
      {products.map((product) => {
        return (
          <div className="flex flex-col  shadow-sm shadow-gray-200 px-4" key={product.id}>
            <img className="max-w-40 m-auto" src={product.image} alt="" />
            <p className="pt-6 max-w-80 md:font-semibold">{product.name}</p>
            <div className="flex items-center mt-2">
              <Rating rating={product.rating.stars} />
              <p className="pl-2 text-blue-500 font-semibold">{product.rating.count}</p>
            </div>
            <p className="mt-2 font-semibold text-lg">${(product.priceCents / 100).toFixed(2)}</p>
            <select className="bg-gray-100 border-1 border-gray-300 w-15 p-1 rounded-md mt-2 cursor-pointer" value="1">
              <option name="one" id="">1</option>
              <option name="two" id="">2</option>
              <option name="three" id="">3</option>
              <option name="four" id="">4</option>
              <option name="five" id="">5</option>
              <option name="six" id="">6</option>
              <option name="seven" id="">7</option>
              <option name="eight" id="">8</option>
              <option name="nine" id="">9</option>
              <option name="ten" id="">10</option>
            </select>
              <button className="bg-amber-300 p-2 rounded-4xl my-10 cursor-pointer font-semibold shadow-md duration-200 hover:bg-amber-400">Add to Cart</button>
          </div>
        )
      })}
    </main>
  )
}

export default Products;