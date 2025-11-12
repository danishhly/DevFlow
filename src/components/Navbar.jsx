import { navItems } from "../constants/index";
import {Menu, X, Code2} from "lucide-react";
import {useState, useEffect} from "react";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const closeMobileMenu = () => {
        setMobileDrawerOpen(false);
    };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
            ? 'py-3 backdrop-blur-xl bg-black/80 border-b border-neutral-800/80 shadow-lg shadow-black/20' 
            : 'py-5 backdrop-blur-md bg-black/40 border-b border-neutral-800/40'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
              <Code2 className="w-6 h-6 text-black" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
              DevFlow
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white rounded-lg hover:bg-neutral-800/50 transition-all duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a 
              href="#" 
              className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200"
            >
              Sign In
            </a>
            <a 
              href="#" 
              className="px-5 py-2.5 bg-white text-black rounded-lg text-sm font-semibold hover:bg-neutral-100 transition-all duration-200 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 hover:scale-105"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleNavbar} 
            className="lg:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800/50 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileDrawerOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-neutral-800/50 pt-6 animate-in slide-in-from-top-2 duration-200">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/50 rounded-lg transition-all duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-3 mt-6 pt-6 border-t border-neutral-800/50">
              <a 
                href="#" 
                onClick={closeMobileMenu}
                className="px-4 py-3 text-base font-medium text-neutral-300 hover:text-white text-center rounded-lg hover:bg-neutral-800/50 transition-all duration-200"
              >
                Sign In
              </a>
              <a 
                href="#" 
                onClick={closeMobileMenu}
                className="px-4 py-3 bg-white text-black rounded-lg text-base font-semibold text-center hover:bg-neutral-100 transition-all duration-200 shadow-lg"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
    );
};

export default Navbar;
