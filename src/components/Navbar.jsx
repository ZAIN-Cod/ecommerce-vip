import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyShop</h1>

        <ul className="hidden md:flex gap-6 list-none">
          <li className="cursor-pointer hover:text-blue-400 transition duration-300">Home</li>
          <li className="cursor-pointer hover:text-blue-400 transition duration-300">Shop</li>
          <li className="cursor-pointer hover:text-blue-400 transition duration-300">Cart</li>
        </ul>

        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden list-none">
          <li className="cursor-pointer hover:text-blue-400 transition duration-300">Home</li>
          <li className="cursor-pointer hover:text-blue-400 transition duration-300">Shop</li>
          <li className="cursor-pointer hover:text-blue-400 transition duration-300">Cart</li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar