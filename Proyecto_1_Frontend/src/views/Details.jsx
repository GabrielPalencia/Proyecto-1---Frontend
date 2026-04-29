import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, ChevronLeft } from 'lucide-react';
import toast from 'react-hot-toast';
import Loader from '../components/Loader';

const Details = ({ favorites, toggleFavorite }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [launch, setLaunch] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLaunch = async () => {
      try {
        const res = await fetch(`https://api.spacexdata.com/v4/launches/${id}`);
        if (!res.ok) throw new Error('No se encontró el lanzamiento');
        const data = await res.json();
        setLaunch(data);
      } catch (err) {
        toast.error(err.message);
        navigate('/404');
      } finally {
        setLoading(false);
      }
    };
    fetchLaunch();
  }, [id, navigate]);

  if (loading) return <Loader />;
  if (!launch) return null;

  const isFavorite = favorites.some(fav => fav.id === launch.id);

  return (
    <div className="max-w-4xl mx-auto">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 mb-6 transition-colors"
      >
        <ChevronLeft size={20} /> Volver
      </button>

      <div className="grid md:grid-cols-2 gap-10 bg-slate-900 p-8 rounded-2xl border border-white/10">
        <div className="flex justify-center bg-slate-800 rounded-xl p-6">
          <img 
            src={launch.links.patch.large || launch.links.patch.small} 
            alt={launch.name} 
            className="max-h-80 object-contain shadow-2xl"
          />
        </div>

        <div>
          <div className="flex justify-between items-start">
            <h1 className="text-4xl font-black uppercase mb-4 tracking-tighter">{launch.name}</h1>
            <button 
              onClick={() => toggleFavorite(launch)}
              className={`p-3 rounded-full ${isFavorite ? 'bg-red-500 text-white' : 'bg-white/5 text-gray-400'}`}
            >
              <Heart fill={isFavorite ? "currentColor" : "none"} />
            </button>
          </div>

          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed text-lg">
              {launch.details || "Esta misión no tiene detalles adicionales registrados."}
            </p>
            
            <div className="pt-6 border-t border-white/5">
              <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">Fecha de Lanzamiento</p>
              <p className="text-cyan-400 text-xl font-mono">
                {new Date(launch.date_utc).toLocaleDateString()}
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              {launch.links.article && (
                <a href={launch.links.article} target="_blank" rel="noreferrer" 
                   className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-bold transition-all">
                  Artículo
                </a>
              )}
              {launch.links.webcast && (
                <a href={launch.links.webcast} target="_blank" rel="noreferrer"
                   className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg text-sm font-bold transition-all">
                  YouTube
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;