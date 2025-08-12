"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Menu, X, Search, Newspaper } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import SearchBar from "./SearchBar"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  const handleSearch = (query) => {
    navigate(`/search?q=${encodeURIComponent(query)}`)
    setIsSearchOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Newspaper className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">NewsHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/categories"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Categories
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 slide-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/categories"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
            </div>
          </div>
        )}

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-200 dark:border-gray-700 fade-in">
            <SearchBar onSearch={handleSearch} />
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
