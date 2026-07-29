import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import products from './products'
import Footer from './components/Footer'

function App() {
  const [cart, setCart] = useState([])
  const [view, setView] = useState('home')

  const handleAddToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div>
      <Navbar cartCount={cart.length} setView={setView} />

      {view === 'home' && (
        <>
          <Hero />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                 image={product.image}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
        </>
      )}

      {view === 'cart' && (
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <div className="flex flex-col gap-4">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 w-full max-w-md">
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-gray-600">${item.price}</span>
                </div>
              ))}

              <div className="mt-6 flex flex-col gap-4 w-full max-w-md">
                <div className="flex justify-between font-bold text-lg border-t pt-4">
                  <span>Total:</span>
                  <span>${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</span>
                </div>
                <button className="bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-black active:scale-95 transition duration-300 cursor-pointer">
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <Footer />
    </div>
  )
}

export default App