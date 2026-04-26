import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Card from '../components/Card';
import Loader from '../components/Loader';
import SearchForm from '../components/SearchForm';

const Explore = ({ favorites, toggleFavorite }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v4/launches');
        if (!response.ok) throw new Error('Error al conectar con SpaceX');
        const result = await response.json();
        setData(result);
        toast.success('Datos cargados correctamente');
      } catch (err) {
        setError(err.message);
        toast.error('Fallo al cargar los datos');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <Loader />;
  if (error) return <div className="text-center py-20 text-red-500">Error: {error}</div>;

  return (
    <section>
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-black mb-2 uppercase tracking-tighter">Explorar Lanzamientos</h1>
        <p className="text-gray-400">Consulta el historial de misiones de SpaceX</p>
      </header>

      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredData.map(item => (
          <Card 
            key={item.id} 
            item={item} 
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.some(fav => fav.id === item.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default Explore;