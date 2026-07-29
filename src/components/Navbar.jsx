import { useState } from 'react'

const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyShop</h1>

        <ul className="hidden md:flex gap-6 list-none items-center">
          <li className="cursor-pointer hover:text-blue-400 transition duration-300">Home</li>
          <li className="cursor-pointer hover:text-blue-400 transition duration-300">Shop</li>
          <li className="cursor-pointer hover:text-blue-400 transition duration-300 relative">
            Cart 🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
                {cartCount}
              </span>
            )}
          </li>
        </ul>

        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden list-none">
          <li className="cursor-pointer hover:text-blue-400 transition duration-300">Home</li>
          <li className="cursor-pointer hover:text-blue-400 transition duration-300">Shop</li>
          <li className="cursor-pointer hover:text-blue-400 transition duration-300">Cart ({cartCount})</li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar