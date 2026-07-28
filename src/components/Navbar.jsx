import React from 'react'


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white px-6 py-4">
        <h1 className='text-xl font-semibold'>My shop</h1>
    <ul  className="flex gap-6  list-none">
        <li className='cursor-pointer hover:text-blue-400 transition-duration-300'>Home</li>
        <li className='cursor-pointer hover:text-blue-400 transition-duration-300'>Shop</li>
        <li className='cursor-pointer hover:text-blue-400 transition-duration-300'>Cart</li>
        </ul>
        </nav>


  )
}

export default Navbar