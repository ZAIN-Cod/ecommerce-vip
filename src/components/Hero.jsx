import { useState, useEffect } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gray-100 px-6 py-24 gap-8">
      <div
        className={`flex flex-col items-center md:items-start text-center md:text-left transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
      >
        <h1 className="text-5xl font-bold text-gray-900">Best Deals On Fashion</h1>
        <p className="text-lg text-gray-600 mt-4">Discover the latest trends at unbeatable prices</p>
        <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 active:scale-95 transition duration-300 cursor-pointer">
          Shop Now
        </button>
      </div>

      <img
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600"
        alt="Fashion Hero"
        className={`rounded-lg shadow-lg w-full md:w-1/2 object-cover hover:scale-105 hover:shadow-2xl transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}
      />
    </section>
  )
}

export default Hero