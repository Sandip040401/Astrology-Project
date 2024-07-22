
export const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center">
              {/* Logo or brand */}
              <div className="flex-shrink-0">
                <a href="#" className="text-white text-2xl font-bold">
                  Astrology App
                </a>
              </div>
    
              {/* Navbar links */}
              <div className="hidden md:flex space-x-4">
                <a href="#" className="text-white hover:text-gray-300">
                  Home
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  Horoscopes
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  Zodiac Signs
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  About
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  Contact
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  Login
                </a>
              </div>
            </div>
          </div>
        </nav>
      );
}