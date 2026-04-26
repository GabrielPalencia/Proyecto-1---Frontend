import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Card = ({ item, isFavorite, toggleFavorite }) => {
  return (
    <div className="bg-slate-900 border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all group">
      <img 
        src={item.links.patch.small || 'https://via.placeholder.com/200'} 
        alt={item.name}
        className="w-full h-48 object-contain bg-slate-800 p-4 group-hover:scale-105 transition-transform"
      />
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg truncate">{item.name}</h3>
          <button 
            onClick={() => toggleFavorite(item)}
            className={`p-2 rounded-full transition-colors ${isFavorite ? 'bg-red-500/20 text-red-500' : 'bg-white/5 text-gray-400 hover:text-white'}`}
            aria-label="Agregar a favoritos"
          >
            <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
          </button>
        </div>
        <p className="text-sm text-gray-400 mb-4 line-clamp-2">
          {item.details || "Sin descripción disponible."}
        </p>
        <Link 
          to={`/item/${item.id}`}
          className="block text-center bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
};
export default Card;