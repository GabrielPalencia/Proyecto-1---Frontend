import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ favoriteCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `hover:text-cyan-400 transition-colors uppercase tracking-widest text-sm ${
      isActive ? 'text-cyan-400 font-bold' : 'text-gray-300'
    }`;

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="border-b border-white/10 sticky top-0 bg-slate-950 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <NavLink to="/" onClick={closeMenu} className="flex items-center gap-2 text-xl font-bold tracking-tighter text-white">
            <svg className="w-8 h-8 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3" />
              <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5" />
            </svg>
            <span>SPACE-X</span>
          </NavLink>

          <button className="sm:hidden text-gray-300" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>

          <div className="hidden sm:flex gap-6">
            <NavLink to="/" className={navClass}>Inicio</NavLink>
            <NavLink to="/explore" className={navClass}>Explorar</NavLink>
            <NavLink to="/favorites" className={navClass}>
              Favoritos <span className="bg-cyan-500 text-black px-2 py-0.5 rounded-full text-xs ml-1">{favoriteCount}</span>
            </NavLink>
            <NavLink to="/about" className={navClass}>Contacto</NavLink>
          </div>
        </div>

        <div className={`${isOpen ? 'flex' : 'hidden'} sm:hidden flex-col pb-6 gap-4 border-t border-white/5 pt-4`}>
          <NavLink to="/" onClick={closeMenu} className={navClass}>Inicio</NavLink>
          <NavLink to="/explore" onClick={closeMenu} className={navClass}>Explorar</NavLink>
          <NavLink to="/favorites" onClick={closeMenu} className={navClass}>
            Favoritos ({favoriteCount})
          </NavLink>
          <NavLink to="/about" onClick={closeMenu} className={navClass}>Contacto</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;