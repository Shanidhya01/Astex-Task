import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20 gap-3">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-sm" />
            </div>
            <span className="text-xl font-bold text-gray-900">Moveto</span>
          </div>

          {/* Tablet/Desktop nav (no wrap, uses flexible middle width) */}
          <nav
            className="
              hidden md:flex flex-1 min-w-0
              items-center justify-center
              gap-x-4 lg:gap-x-6 xl:gap-x-8
              md:text-[14px] lg:text-[15px]
              whitespace-nowrap
            "
          >
            <a href="#" className="px-1 text-gray-700 hover:text-blue-600 transition-colors font-medium leading-tight">
              Home
            </a>

            <div className="relative group">
              <button className="px-1 flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors font-medium leading-tight">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="relative group">
              <button className="px-1 flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors font-medium leading-tight">
                Moving Planner
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <a href="#" className="px-1 text-gray-700 hover:text-blue-600 transition-colors font-medium leading-tight">
              Contact
            </a>

            <div className="relative group">
              <button className="px-1 flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors font-medium leading-tight">
                Pages
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </nav>

          {/* Right side: CTA (never shrinks) */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 lg:px-6 py-2.5 rounded-full font-medium hover:from-orange-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg">
              GET A QUOTE
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 flex flex-col gap-4">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Moving Planner</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Pages</a>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-full font-medium hover:from-orange-600 hover:to-orange-700 transition-all shadow-md">
              GET A QUOTE
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
