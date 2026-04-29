import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-6xl font-black text-cyan-400 mb-4">DESCUBRE EL UNIVERSO</h1>
      <p className="text-xl text-gray-400">Explora las misiones espaciales de SpaceX</p>

      <Link to="/explore" className="mt-10 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-6 rounded">
        Explorar Lanzamientos Ahora
      </Link>
      
    </div>
  )
}

export default Home;