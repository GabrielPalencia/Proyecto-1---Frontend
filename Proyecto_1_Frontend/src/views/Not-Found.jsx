import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-bold text-sky-500">
        404
      </h1>
      
      <h2 className="text-2xl md:text-3xl font-semibold text-white mt-4">
        Página no encontrada
      </h2>
      
      <Link
        to="/explore"
        className="mt-8 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg shadow-sky-500/20"
      >
        Explorar misiones
      </Link>
    </main>
  );
}