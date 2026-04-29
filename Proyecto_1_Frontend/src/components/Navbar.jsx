import { NavLink } from 'react-router-dom';

const Navbar = ({ favoriteCount }) => {
  const navClass = ({ isActive }) => 
    `hover:text-cyan-400 transition-colors ${isActive ? 'text-cyan-400 font-bold' : 'text-gray-300'}`;

  return (
    <nav className="border-b border-white/10 py-4 sticky top-0 bg-slate-950/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2 text-xl font-bold tracking-tighter">

          <span>SPACE-X</span>
        </NavLink>

        <div className="flex gap-6 text-sm uppercase tracking-widest">
          <NavLink to="/" className={navClass}>Inicio</NavLink>
          <NavLink to="/explore" className={navClass}>Explorar</NavLink>
          <NavLink to="/favorites" className={navClass}>
            Favoritos <span className="bg-cyan-500 text-slate-950 px-2 py-0.5 rounded-full text-xs font-black">{favoriteCount}</span>
          </NavLink>
          <NavLink to="/about" className={navClass}>Contacto</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;