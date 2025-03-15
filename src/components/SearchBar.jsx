import { useState, useRef, useEffect } from "react";
import searchIcon from "../assets/icons/search-icon.png";

const SearchBar = ({ products }) => {
  const [query, setQuery] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  const productRefs = useRef(new Map()); // Store refs using Map()

  useEffect(() => {
    productRefs.current = new Map(); // Reset refs when list updates
  }, [products]);

  const handleProductClick = (id) => {
    const element = productRefs.current.get(id); // Get element from Map
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    setQuery(""); // Clear search
  };

  return (
    <div className="flex w-full pl-3 max-w-xs sm:max-w-md md:max-w-lg relative">
      <input
        type="text"
        className="bg-amber-50 w-3/4 h-9 md:h-10 pl-3 rounded-bl-md rounded-tl-md text-sm focus:outline-0 md:font-semibold"
        placeholder="Search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button className="bg-[#FEBD69] flex items-center rounded-br-md rounded-tr-md cursor-pointer focus:outline-0 h-9 md:h-10 p-2">
        <img className="w-4 md:w-8" src={searchIcon} alt="Search" />
      </button>
      {query && filteredProducts.length > 0 && (
        <ul className="flex flex-col gap-5 absolute bg-amber-50 top-10 md:top-13 rounded-md shadow-lg p-2 max-h-60 overflow-y-auto border-1 border-gray-300">
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              ref={(el) => productRefs.current.set(product.id, el)} // Store ref in Map
              className="p-2 w-70 md:w-full flex items-center gap-2 md:gap-5 max-h-8 md:max-h-10 text-sm md:font-semibold cursor-pointer mt-4 duration-200 hover:opacity-80"
              onClick={() => handleProductClick(product.id)}
            >
              {product.name} - <img className="max-w-7" src={product.image} alt="" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
