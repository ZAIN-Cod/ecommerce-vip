import React from 'react'

const ProductCard = () => {
  return (
    <div  className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 w-64 ">
      <img src="https://via.placeholder.com/200" alt="Product "  className="rounded-md" />
      <h3 className="text-lg font-semibold mt-4">Product Name</h3>
      <p className="text-gray-600 mt-1">$29.99</p>
      <button  className="mt-4  bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-black active:scale-95 transition duration-300 cursor-pointer">Add to Cart</button>
    </div>
  )
}

export default ProductCard