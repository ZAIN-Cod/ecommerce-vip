import React from 'react'

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-gray-100 px-6 py-24">
      <h1 className="text-5xl font-bold text-gray-900">Best Deals On Fashion</h1>
      <p text-lg text-gray-600 mt-4>Discover the latest trends at unbeatable prices</p>
      <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer active:scale-95">
        Shop Now</button>
    </section>
  )
}


export default Hero