import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const menuRef = useRef(null);
  
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  
  useEffect(() => {
    gsap.fromTo(
      navbarRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    );
  }, []);
  
 
  useEffect(() => {
    if (menuRef.current) {
      if (isMobileMenuOpen) {
        gsap.to(menuRef.current, {
          height: 'auto',
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      } else {
        gsap.to(menuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in'
        });
      }
    }
  }, [isMobileMenuOpen]);
  
  const navLinks = [
    { name: 'Features', href: '#' },
    { name: 'How it Works', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'Demo', href: '#' }
  ];
  
  return (
    <nav 
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-soft' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          <a href="https://finolity.com/" className="flex items-center">
            <img src={logo} alt="Finolity Logo" className="h-10 mix-blend-multiply" />
          </a>
          
        
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <button className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
              Contact Us
            </button>
          </div>
          
         
          <button
            className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
      
        <div
          ref={menuRef}
          className="md:hidden overflow-hidden h-0 opacity-0"
        >
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white backdrop-blur-lg rounded-lg mt-2">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button 
                className="w-full px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-md shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;