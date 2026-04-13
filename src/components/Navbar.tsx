import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Music, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/'
        ? 'liquid-glass border-b'
        : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <Music className={`h-8 w-8 ${scrolled || location.pathname !== '/' ? 'text-primary' : 'text-white'}`} />
            <span className={`font-display font-bold text-xl tracking-wide ${scrolled || location.pathname !== '/' ? 'text-primary' : 'text-white'}`}>
              CORAL ÁGAPE
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`font-medium transition-colors hover:opacity-75 ${scrolled || location.pathname !== '/' ? 'text-primary' : 'text-white'}`}>
              Início
            </Link>
            <Link to="/events" className={`font-medium transition-colors hover:opacity-75 ${scrolled || location.pathname !== '/' ? 'text-primary' : 'text-white'}`}>
              Eventos
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled || location.pathname !== '/' ? 'text-primary' : 'text-white'}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden liquid-glass absolute w-full left-0 top-16 border-b z-40">
          <div className="px-4 pt-2 pb-6 space-y-4 shadow-lg">
            <Link to="/" onClick={closeMenu} className="block text-primary font-medium p-2 hover:bg-white/50 rounded transition-colors">
              Início
            </Link>
            <Link to="/events" onClick={closeMenu} className="block text-primary font-medium p-2 hover:bg-white/50 rounded transition-colors">
              Eventos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
