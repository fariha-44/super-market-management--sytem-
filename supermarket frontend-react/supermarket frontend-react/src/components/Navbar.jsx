import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ShoppingCart,
  Menu,
  X,
  Search,
  User,
} from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-green-600 font-semibold"
      : "text-gray-700 hover:text-green-600 transition";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <ShoppingCart size={35} className="text-green-600" />

          <div>
            <h1 className="text-2xl font-bold text-green-600">
              SuperMart
            </h1>

            <p className="text-xs text-gray-500">
              Fresh Grocery Store
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">

          <li>
            <NavLink to="/" className={navLinkStyle}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/products" className={navLinkStyle}>
              Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/services" className={navLinkStyle}>
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navLinkStyle}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={navLinkStyle}>
              Contact
            </NavLink>
          </li>

        </ul>

        {/* Search + Login */}
        <div className="hidden lg:flex items-center gap-4">

          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">

            <Search
              size={18}
              className="text-gray-500"
            />

            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none ml-3 w-full text-sm"
            />

          </div>

          <Link
            to="/login"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl transition"
          >
            <User size={18} />
            Login
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="lg:hidden bg-white border-t shadow-md">

          <div className="flex flex-col px-6 py-5 gap-5">

            <NavLink
              to="/"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Products
            </NavLink>

            <NavLink
              to="/services"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </NavLink>

            <NavLink
              to="/about"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>

            <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">

              <Search
                size={18}
                className="text-gray-500"
              />

              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none ml-3 w-full"
              />

            </div>

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="flex justify-center items-center gap-2 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
            >
              <User size={18} />
              Login
            </Link>

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;