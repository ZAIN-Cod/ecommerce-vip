const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-8 px-6">
      <p className="text-sm text-gray-400">© 2026 MyShop. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-4">
        <span className="cursor-pointer hover:text-blue-400 transition duration-300">Home</span>
        <span className="cursor-pointer hover:text-blue-400 transition duration-300">Shop</span>
        <span className="cursor-pointer hover:text-blue-400 transition duration-300">Contact</span>
      </div>
    </footer>
  )
}

export default Footer