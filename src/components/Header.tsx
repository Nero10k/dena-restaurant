'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-charcoal/95 backdrop-blur-sm shadow-gold' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-bold gold-text">
            Dena
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-cream hover:text-gold transition-elegant">
              Home
            </Link>
            <Link href="/menu" className="text-cream hover:text-gold transition-elegant">
              Menu
            </Link>
            <Link href="/about" className="text-cream hover:text-gold transition-elegant">
              About
            </Link>
            <Link href="/catering" className="text-cream hover:text-gold transition-elegant">
              Catering
            </Link>
            <Link href="/contact" className="text-cream hover:text-gold transition-elegant">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/reservations"
              className="px-6 py-2 bg-gold text-charcoal font-semibold rounded hover:bg-gold-light transition-elegant"
            >
              Book a Table
            </Link>
            <Link
              href="/order"
              className="px-6 py-2 border border-gold text-gold font-semibold rounded hover:bg-gold/10 transition-elegant"
            >
              Order Online
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cream hover:text-gold transition-elegant"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
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

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <nav className="py-4 space-y-4">
            <Link
              href="/"
              className="block text-cream hover:text-gold transition-elegant"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="block text-cream hover:text-gold transition-elegant"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              href="/about"
              className="block text-cream hover:text-gold transition-elegant"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/catering"
              className="block text-cream hover:text-gold transition-elegant"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Catering
            </Link>
            <Link
              href="/contact"
              className="block text-cream hover:text-gold transition-elegant"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 space-y-2">
              <Link
                href="/reservations"
                className="block w-full text-center px-6 py-2 bg-gold text-charcoal font-semibold rounded hover:bg-gold-light transition-elegant"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Table
              </Link>
              <Link
                href="/order"
                className="block w-full text-center px-6 py-2 border border-gold text-gold font-semibold rounded hover:bg-gold/10 transition-elegant"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Order Online
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 