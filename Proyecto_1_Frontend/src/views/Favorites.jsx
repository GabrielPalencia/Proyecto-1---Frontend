import { Link } from 'react-router-dom';
import { Trash2, ExternalLink } from 'lucide-react';

const Favorites = ({ favorites, toggleFavorite }) => {
  if (favorites.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl text-gray-400">No tienes misiones guardadas.</h2>
        <Link to="/explore" className="text-cyan-400 hover:underline mt-4 inline-block">
          Explorar lanzamientos
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Mis Favoritos ({favorites.length})</h1>
      
      <div className="grid gap-4">
        {favorites.map((item) => (
          <div 
            key={item.id} 
            className="flex items-center justify-between bg-slate-900 p-4 rounded-lg border border-white/10"
          >
            <div className="flex items-center gap-4">
              <img 
                src={item.links.patch.small} 
                alt={item.name} 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-400 font-mono">
                  {new Date(item.date_utc).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <Link 
                to={`/item/${item.id}`} 
                className="p-2 hover:bg-white/10 rounded-full text-cyan-400"
                title="Ver detalle"
              >
                <ExternalLink size={20} />
              </Link>
              <button 
                onClick={() => toggleFavorite(item)}
                className="p-2 hover:bg-red-500/20 rounded-full text-red-500"
                title="Eliminar"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;