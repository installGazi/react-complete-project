// Navbar Component - Clean, Modern, Responsive
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/60 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        
        {/* Logo - Custom SVG instead of text */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
          </div>
          <span className="text-xl md:text-2xl text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            Gazi Saiful
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          <Link
            to="/"
            className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
          >
            Home
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
          >
            Login
          </Link>
          <Link
            to="/profile"
            className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
          >
            Profile
          </Link>
          <Link
            to="/uploadmedia"
            className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
          >
            Upload
          </Link>
          <Link
            to="/myuploads"
            className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
          >
            My Files
          </Link>
          <Link
            to="/adminpanel"
            className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
          >
            Admin
          </Link>
          <Link
            to="/forgotpassword"
            className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
          >
            Forgot
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none p-2 rounded-lg hover:bg-blue-50 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200/60 px-4 py-4 space-y-2 shadow-lg">
          <Link
            to="/"
            onClick={closeMenu}
            className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            to="/register"
            onClick={closeMenu}
            className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            Register
          </Link>
          <Link
            to="/login"
            onClick={closeMenu}
            className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            Login
          </Link>
          <Link
            to="/profile"
            onClick={closeMenu}
            className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            Profile
          </Link>
          <Link
            to="/uploadmedia"
            onClick={closeMenu}
            className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            Upload
          </Link>
          <Link
            to="/myuploads"
            onClick={closeMenu}
            className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            My Files
          </Link>
          <Link
            to="/adminpanel"
            onClick={closeMenu}
            className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            Admin
          </Link>
          <Link
            to="/forgotpassword"
            onClick={closeMenu}
            className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            Forgot
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;