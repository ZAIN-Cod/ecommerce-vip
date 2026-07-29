import React from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import Product from './Product'


import Hero from './components/Hero'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {Product.map((product) => (
          <ProductCard key={product.id} name={product.name} price={product.price} />
        ))}
      </div>

    </div>
  )
}

export default App