'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Programmes', href: '/programmes' },
    { name: 'About us', href: '/about' },
    { name: 'Resources', href: '/resources' },
  ]

  const productsLinks = [
    { name: 'AI Agents', href: '/products/ai-agents', external: false },
    { name: 'Skaeyl', href: 'https://skaeyl.com', external: true },
  ]

  const rightLinks = [
    { name: 'Hire Designers', href: '/hire-designers' },
    { name: 'Contact us', href: '/contact' },
  ]

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1300px] mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo.png"
              alt="Xperience Wave"
              width={150}
              height={50}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Center Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-text-body hover:text-primary transition-colors duration-200 text-base font-medium pb-1 ${
                  pathname === link.href
                    ? 'text-primary border-b-2 border-primary'
                    : ''
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Products Dropdown - Hidden */}
            <div className="relative group hidden">
              <button
                onMouseEnter={() => setIsProductsOpen(true)}
                className={`text-text-body hover:text-primary transition-colors duration-200 text-base font-medium pb-1 flex items-center gap-1 ${
                  pathname.startsWith('/products')
                    ? 'text-primary border-b-2 border-primary'
                    : ''
                }`}
              >
                Products
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isProductsOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isProductsOpen && (
                <div
                  className="absolute top-full left-0 pt-2 w-48"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                    {productsLinks.map((link) => (
                      link.external ? (
                        <a
                          key={link.name}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-4 py-2 text-text-body hover:text-primary hover:bg-gray-50 transition-colors duration-200 text-base font-medium"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          <span>{link.name}</span>
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      ) : (
                        <Link
                          key={link.name}
                          href={link.href}
                          className={`block px-4 py-2 text-text-body hover:text-primary hover:bg-gray-50 transition-colors duration-200 text-base font-medium ${
                            pathname === link.href ? 'text-primary bg-gray-50' : ''
                          }`}
                          onClick={() => setIsProductsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation - Right Links + CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            {rightLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-text-body hover:text-primary transition-colors duration-200 text-base font-medium"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={process.env.NEXT_PUBLIC_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white px-6 py-3 rounded-xl hover:bg-opacity-90 transition-all duration-200 text-base font-semibold hover:scale-105 hover:shadow-lg active:scale-95"
            >
              Book a strategy call
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-text-body hover:text-primary"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-4 py-3 rounded-md transition-colors duration-200 text-base font-medium ${
                  pathname === link.href
                    ? 'text-primary bg-primary bg-opacity-10'
                    : 'text-text-body hover:text-primary hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Products Dropdown - Mobile - Hidden */}
            <div className="space-y-1 hidden">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center justify-between w-full px-4 py-3 rounded-md text-text-body hover:text-primary hover:bg-gray-50 transition-colors duration-200 text-base font-medium"
              >
                Products
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isProductsOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isProductsOpen && (
                <div className="pl-4 space-y-1">
                  {productsLinks.map((link) => (
                    link.external ? (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-4 py-2 rounded-md text-text-body hover:text-primary hover:bg-gray-50 transition-colors duration-200 text-base font-medium"
                        onClick={() => {
                          setIsMenuOpen(false)
                          setIsProductsOpen(false)
                        }}
                      >
                        <span>{link.name}</span>
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={`block px-4 py-2 rounded-md transition-colors duration-200 text-base font-medium ${
                          pathname === link.href
                            ? 'text-primary bg-primary bg-opacity-10'
                            : 'text-text-body hover:text-primary hover:bg-gray-50'
                        }`}
                        onClick={() => {
                          setIsMenuOpen(false)
                          setIsProductsOpen(false)
                        }}
                      >
                        {link.name}
                      </Link>
                    )
                  ))}
                </div>
              )}
            </div>

            {rightLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-4 py-3 rounded-md transition-colors duration-200 text-base font-medium ${
                  pathname === link.href
                    ? 'text-primary bg-primary bg-opacity-10'
                    : 'text-text-body hover:text-primary hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={process.env.NEXT_PUBLIC_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-accent text-white px-4 py-3 rounded-xl hover:bg-opacity-90 transition-all duration-200 text-base font-semibold text-center mt-4 hover:scale-105 hover:shadow-lg active:scale-95"
            >
              Book a strategy call
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
