import './App.css'
import Header from './components/Header'
import Products from './components/Products'
import { useState, useEffect } from 'react'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('../products.json')
      .then(res => res.json())
      .then(setProducts)
      .catch(error => console.log("Can not fetch Data", error))
  }, [])

  
  return (
    <>
      <Header products={products} />      
      <Products products={products} />
    </>
  )
}

export default App
