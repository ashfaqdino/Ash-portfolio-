import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import logo from '../../imports/logo_3.png';

export function Navbar() {
  const location = useLocation();
  
  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Portfolio Logo" className="h-10 w-auto" />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/category/websites"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Portfolio
            </Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}