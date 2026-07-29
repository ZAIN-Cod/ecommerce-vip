import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import products from './products'

function App() {
  const [cart, setCart] = useState([])

  const handleAddToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <Hero />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  )
}

export default App