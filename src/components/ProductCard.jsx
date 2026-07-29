import React from 'react'

import { useState, useEffect, useRef } from 'react'

const ProductCard = ({ name, price, onAddToCart }) => {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`flex flex-col items-center bg-white rounded-lg shadow-md p-4 w-64 hover:shadow-xl hover:-translate-y-2 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <img src="https://via.placeholder.com/200" alt="Product" className="rounded-md" />
      <h3 className="text-lg font-semibold mt-4">{name}</h3>
      <p className="text-gray-600 mt-1">${price}</p>
      <button
        onClick={onAddToCart}
        className="mt-4 bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-black active:scale-95 transition duration-300 cursor-pointer"
      >
        Add to Cart
      </button>
    </div>
  )
}




export default ProductCard