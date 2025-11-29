import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Our Story", path: "/story" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="absolute top-0 w-full z-50 p-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <div className="w-32 md:w-40 transform hover:scale-110 transition duration-300">
            <img 
              src="/images/logo.svg" 
              alt="Cookie Love Logo" 
              className="drop-shadow-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/200x100?text=Cookie+Love';
              }}
            />
          </div>
        </Link>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex space-x-8 font-display font-bold text-gray-900 text-lg items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="hover:text-amber-800 hover:underline decoration-wavy decoration-2 underline-offset-4 transition"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="#contact" 
            className="bg-amber-800 text-white px-5 py-2 rounded-full hover:bg-gray-900 transition shadow-md"
          >
            Order Now
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-2xl text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-lg text-base font-medium transition mb-2 ${
                isActive(link.path)
                  ? "bg-yellow-100 text-amber-800"
                  : "text-gray-900 hover:bg-yellow-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="#contact" 
            className="block text-center bg-amber-800 text-white px-5 py-2 rounded-full hover:bg-gray-900 transition shadow-md mt-4"
          >
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
