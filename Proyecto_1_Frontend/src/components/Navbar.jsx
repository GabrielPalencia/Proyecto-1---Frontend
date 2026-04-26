import { NavLink } from 'react-router-dom';

const Navbar = ({ favoriteCount }) => {
  const navClass = ({ isActive }) => 
    `hover:text-cyan-400 transition-colors ${isActive ? 'text-cyan-400 font-bold' : 'text-gray-300'}`;

  return (
    <nav className="border-b border-white/10 py-4 sticky top-0 bg-slate-950/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2 text-xl font-bold tracking-tighter">
          {/* SVG Inline */}
          <svg className="w-8 h-8 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3" />
            <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5" />
          </svg>
          <span>SPACE-X</span>
        </NavLink>

        <div className="flex gap-6 text-sm uppercase tracking-widest">
          <NavLink to="/" className={navClass}>Inicio</NavLink>
          <NavLink to="/explore" className={navClass}>Explorar</NavLink>
          <NavLink to="/favorites" className={navClass}>
            Favoritos <span className="bg-cyan-500 text-slate-950 px-2 py-0.5 rounded-full text-xs font-black">{favoriteCount}</span>
          </NavLink>
          <NavLink to="/contact" className={navClass}>Contacto</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;